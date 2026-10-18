export const RECOMMENDATION_TARGET_COUNT = 20;
// A refresh is accepted only when it can produce a complete 20-song page.
// Keeping this as a separate named constant makes the business rule explicit
// at the call site while preventing partial batches from replacing the page.
export const MIN_FRESH_RECOMMENDATIONS = RECOMMENDATION_TARGET_COUNT;
export const RECOMMENDATION_HISTORY_KEY = 'moekoe:recommendation-history:v1';
export const RECOMMENDATION_HISTORY_LIMIT = 2000;

const isObject = value => value !== null && typeof value === 'object';

/**
 * Return the stable song identity used by all recommendation sources.
 * Some endpoints put the hash on the song itself while others nest it in
 * audio_info. Hashes are normalized because the API is inconsistent about
 * letter casing.
 */
export function getSongHash(song) {
    if (!isObject(song)) return '';

    const hash = song.hash || song.audio_info?.hash;
    return typeof hash === 'string' ? hash.trim().toUpperCase() : '';
}

/**
 * Extract song records from the different response shapes used by the API.
 * Once an object has a hash, its nested audio_info is part of that same song
 * and is not traversed again.
 */
export function extractRecommendationSongs(payload) {
    const songs = [];
    const visited = new Set();

    const visit = value => {
        if (!value || typeof value !== 'object') return;
        if (visited.has(value)) return;
        visited.add(value);

        const hash = getSongHash(value);
        if (hash) {
            songs.push({ ...value, hash });
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(visit);
            return;
        }

        Object.values(value).forEach(child => {
            if (child && typeof child === 'object') visit(child);
        });
    };

    visit(payload);
    return songs;
}

/**
 * De-duplicate songs by hash while preserving source priority and order.
 */
export function deduplicateRecommendationSongs(songs) {
    const seen = new Set();
    return songs.filter(song => {
        const hash = getSongHash(song);
        if (!hash || seen.has(hash)) return false;
        seen.add(hash);
        return true;
    }).map(song => ({ ...song, hash: getSongHash(song) }));
}

/**
 * Fisher-Yates shuffle. The comparator form of Array#sort is biased and can
 * leave long-lived recommendation order patterns.
 */
export function shuffleRecommendations(items, random = Math.random) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(random() * (index + 1));
        [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
}

/**
 * Select only songs that have never appeared in the supplied history.
 * The returned list can contain fewer than targetCount when the upstream
 * candidate pool is exhausted; callers can then request fallback sources.
 */
export function selectFreshRecommendations({
    songs,
    seenHashes = new Set(),
    targetCount = RECOMMENDATION_TARGET_COUNT,
    random = Math.random,
}) {
    const normalizedSeen = seenHashes instanceof Set
        ? seenHashes
        : new Set(Array.from(seenHashes || [], hash => String(hash).toUpperCase()));
    const unique = deduplicateRecommendationSongs(songs);
    const fresh = unique.filter(song => !normalizedSeen.has(song.hash));
    return shuffleRecommendations(fresh, random).slice(0, targetCount);
}

export function loadRecommendationHistory(storage = globalThis.localStorage, key = RECOMMENDATION_HISTORY_KEY) {
    if (!storage) return new Set();

    try {
        const parsed = JSON.parse(storage.getItem(key) || '[]');
        const values = Array.isArray(parsed) ? parsed : parsed?.hashes;
        return new Set(
            Array.from(values || [])
                .map(hash => String(hash).trim().toUpperCase())
                .filter(Boolean)
        );
    } catch {
        return new Set();
    }
}

export function saveRecommendationHistory(
    seenHashes,
    storage = globalThis.localStorage,
    key = RECOMMENDATION_HISTORY_KEY,
    limit = RECOMMENDATION_HISTORY_LIMIT,
) {
    if (!storage) return;

    const values = Array.from(seenHashes || [], hash => String(hash).trim().toUpperCase())
        .filter(Boolean)
        .slice(-limit);
    storage.setItem(key, JSON.stringify(values));
}

export function getRecommendationHistoryKey(userInfo, device) {
    const identity = userInfo?.userid || device?.guid || device?.mid || 'anonymous';
    return `${RECOMMENDATION_HISTORY_KEY}:${identity}`;
}

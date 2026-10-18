const DEFAULT_BATCH_SIZE = 20;

function getSongList(response) {
    if (Number(response?.status) !== 1) return [];
    const data = response.data;
    if (Array.isArray(data?.song_list)) return data.song_list;
    if (Array.isArray(data?.songs)) return data.songs;
    if (Array.isArray(data?.items)) return data.items.map(item => item?.song_info || item).filter(Boolean);
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.lists)) return data.lists.flatMap(item => Array.isArray(item?.song_list) ? item.song_list : []);
    return [];
}

function songHash(song) {
    const value = song?.hash || song?.FileHash || song?.file_hash || song?.hash_128 || song?.hash_320;
    return value ? String(value).trim().toUpperCase() : '';
}

export function normalizeRecommendationSong(song) {
    const hash = songHash(song);
    if (!hash) return null;
    return {
        ...song,
        hash,
        name: song.name || song.ori_audio_name || song.songname || song.song_name || song.filename || '',
        cover: song.cover || song.album_cover?.replace('{size}', 480) || song.sizable_cover?.replace('{size}', 480) || '',
        author: song.author || song.author_name || song.singername || '',
        timelen: song.timelen ?? song.time_length ?? (Number(song.timelength_128) || 0) / 1000,
    };
}

export function extractRecommendationSongs(responses) {
    const songs = [];
    for (const response of responses) {
        for (const song of getSongList(response)) {
            const normalized = normalizeRecommendationSong(song);
            if (normalized) songs.push(normalized);
        }
    }
    return songs;
}

export function mergeRecommendationSongs(songs) {
    const unique = new Map();
    for (const song of songs) {
        const normalized = normalizeRecommendationSong(song);
        if (!normalized) continue;
        const previous = unique.get(normalized.hash);
        // Keep the first source's metadata: the daily endpoint is primary and
        // alternate sources should only fill hashes that it did not return.
        unique.set(normalized.hash, previous ? { ...normalized, ...previous } : normalized);
    }
    return [...unique.values()];
}

function shuffle(items, random = Math.random) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(random() * (index + 1));
        [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
}

function sameHashes(left, right) {
    return left.length === right.length && left.every((hash, index) => hash === right[index]);
}

/** Select unseen songs first; when upstream returns no new songs, rotate the fallback batch. */
export function selectRecommendationBatch(songs, options = {}) {
    const {
        seenHashes = new Set(),
        previousHashes = [],
        size = DEFAULT_BATCH_SIZE,
        minimumFresh = Math.min(5, size),
        random = Math.random,
    } = options;
    const candidates = mergeRecommendationSongs(songs);
    if (!candidates.length) return [];
    const unseen = candidates.filter(song => !seenHashes.has(song.hash));
    const pool = unseen.length >= minimumFresh ? unseen : candidates;
    let result = shuffle(pool, random).slice(0, size);
    const resultHashes = result.map(song => song.hash);
    if (sameHashes(resultHashes, previousHashes) && result.length > 1) {
        result = [...result.slice(1), result[0]];
    }
    return result;
}

export function rememberRecommendationHashes(seenHashes, songs, limit = 200) {
    for (const song of songs) seenHashes.add(song.hash);
    while (seenHashes.size > limit) seenHashes.delete(seenHashes.values().next().value);
}

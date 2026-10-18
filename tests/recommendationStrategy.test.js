import test from 'node:test';
import assert from 'node:assert/strict';
import {
    extractRecommendationSongs,
    getSongHash,
    loadRecommendationHistory,
    saveRecommendationHistory,
    selectFreshRecommendations,
    shuffleRecommendations,
} from '../src/utils/recommendationStrategy.js';

const storageFixture = () => {
    const values = new Map();
    return {
        getItem: key => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value),
    };
};

test('normalizes direct and nested song hashes', () => {
    assert.equal(getSongHash({ hash: ' abcd ' }), 'ABCD');
    assert.equal(getSongHash({ audio_info: { hash: 'ef01' } }), 'EF01');
    assert.equal(getSongHash({}), '');
});

test('extracts each song once from daily, card, and new-song response shapes', () => {
    const payload = {
        song_list: [{ hash: 'one' }, { audio_info: { hash: 'two' } }],
        tag_list: [{ song_list: [{ hash: 'three' }, { hash: 'one' }] }],
    };

    const hashes = extractRecommendationSongs(payload).map(song => song.hash);
    assert.deepEqual(hashes, ['ONE', 'TWO', 'THREE', 'ONE']);
});

test('selects unseen songs across rounds and never repeats a historical hash', () => {
    const source = Array.from({ length: 70 }, (_, index) => ({ hash: `song-${index}` }));
    const history = new Set();
    const rounds = [];

    for (let round = 0; round < 3; round += 1) {
        const selected = selectFreshRecommendations({
            songs: source,
            seenHashes: history,
            targetCount: 20,
            random: () => 0.5,
        });
        assert.equal(selected.length, 20);
        assert.equal(selected.filter(song => history.has(song.hash)).length, 0);
        selected.forEach(song => history.add(song.hash));
        rounds.push(selected.map(song => song.hash));
    }

    assert.equal(new Set(rounds.flat()).size, 60);
});

test('returns fewer than 20 when the unseen candidate pool is insufficient', () => {
    const selected = selectFreshRecommendations({
        songs: Array.from({ length: 19 }, (_, index) => ({ hash: `song-${index}` })),
        seenHashes: new Set(),
        targetCount: 20,
        random: () => 0.5,
    });

    // The strategy reports the available candidates; Home.vue rejects this
    // partial batch and keeps the previous 20-song page intact.
    assert.equal(selected.length, 19);
});

test('history persists normalized hashes and applies a storage limit', () => {
    const storage = storageFixture();
    const history = new Set(['a', 'b', 'c']);
    saveRecommendationHistory(history, storage, 'history', 2);
    assert.deepEqual([...loadRecommendationHistory(storage, 'history')], ['B', 'C']);
});

test('Fisher-Yates shuffle returns a new array and keeps every song', () => {
    const input = [{ hash: 'a' }, { hash: 'b' }, { hash: 'c' }];
    const output = shuffleRecommendations(input, () => 0);
    assert.notEqual(output, input);
    assert.deepEqual(output.map(song => song.hash).sort(), ['a', 'b', 'c']);
});

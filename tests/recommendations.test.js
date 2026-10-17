import test from 'node:test';
import assert from 'node:assert/strict';
import {
    extractRecommendationSongs,
    mergeRecommendationSongs,
    rememberRecommendationHashes,
    selectRecommendationBatch,
} from '../src/utils/recommendations.js';

const song = (hash, name = hash) => ({ hash, songname: name });

test('recommendation candidates are normalized and deduplicated by hash', () => {
    const responses = [
        { status: 1, data: { song_list: [song('abc', 'first'), song('DEF')] } },
        { status: 1, data: { song_list: [song('ABC', 'duplicate'), song('ghi')] } },
    ];

    const result = mergeRecommendationSongs(extractRecommendationSongs(responses));

    assert.deepEqual(result.map(item => item.hash), ['ABC', 'DEF', 'GHI']);
    assert.equal(result[0].name, 'first');
});

test('refresh prefers songs that have not been shown in this session', () => {
    const songs = ['a', 'b', 'c', 'd', 'e', 'f'].map(hash => song(hash));
    const seen = new Set(['A', 'B', 'C']);
    const result = selectRecommendationBatch(songs, {
        seenHashes: seen,
        size: 3,
        minimumFresh: 1,
        random: () => 0,
    });

    assert.deepEqual(result.map(item => item.hash), ['E', 'F', 'D']);
});

test('refresh rotates a fallback batch when upstream returns no new songs', () => {
    const songs = ['a', 'b', 'c'].map(hash => song(hash));
    const result = selectRecommendationBatch(songs, {
        seenHashes: new Set(['A', 'B', 'C']),
        previousHashes: ['A', 'B', 'C'],
        size: 3,
        random: () => 0,
    });

    assert.deepEqual(result.map(item => item.hash), ['B', 'C', 'A']);
});

test('shown hashes are bounded to avoid unbounded session memory', () => {
    const seen = new Set(['A', 'B']);
    rememberRecommendationHashes(seen, [song('C'), song('D')], 3);
    assert.deepEqual([...seen], ['B', 'C', 'D']);
});


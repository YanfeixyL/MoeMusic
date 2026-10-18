<template>
    <div class="container">
        <HomeRecommendations :playerControl="playerControl" />
        <div class="section-title-row">
            <h2 class="section-title">
                <img :src="`./assets/images/home/mama.png`" class="mama" @click="addAllSongsToQueue">
                {{ $t('mei-ri-tui-jian') }}
            </h2>
            <button class="recommend-refresh-button" type="button" :disabled="isRefreshing" :title="$t('huan-yi-pi')" @click="recommend">
                <i class="fas fa-sync-alt" :class="{ spinning: isRefreshing }"></i>
                <span>{{ $t('huan-yi-pi') }}</span>
            </button>
        </div>
        <CommonSkeleton v-if="isLoading" variant="compact-grid" :count="20" />
        <div v-else class="song-list">
            <div class="song-item" v-for="song in songs" :key="song.hash"
                @click="playSong(song['hash'], song.name, $getCover(song.cover, 480), song.author)"
                @contextmenu.prevent="showContextMenu($event, song)">
                <img :src="$getCover(song.cover, 64)" :alt="song.name" class="song-cover">
                <div class="song-info">
                    <div class="song-title">{{ song.name }}</div>
                    <div class="song-artist">{{ song.author }}</div>
                </div>
            </div>
        </div>
        <h2 class="section-title">{{ $t('tui-jian-ge-dan') }}</h2>
        <div class="playlist-grid">
            <div class="playlist-item" v-for="(playlist, index) in special_list" :key="index">
                <router-link :to="{
                    path: '/PlaylistDetail',
                    query: { global_collection_id: playlist.global_collection_id }
                }">
                    <div class="playlist-cover-wrap">
                        <img :src="$getCover(playlist.flexible_cover, 240)" class="playlist-cover">
                    </div>
                    <div class="playlist-info">
                        <div class="playlist-title">{{ playlist.specialname }}</div>
                        <div class="playlist-description">{{ playlist.intro }}</div>
                    </div>
                </router-link>
            </div>
        </div>
        <ContextMenu ref="contextMenuRef" :playerControl="playerControl" />
        <BackToTop />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { get } from '../utils/request';
import ContextMenu from '../components/ContextMenu.vue';
import BackToTop from '../components/BackToTop.vue';
import CommonSkeleton from '../components/CommonSkeleton.vue';
import HomeRecommendations from '../components/home/HomeRecommendations.vue';
import { useRoute, useRouter } from 'vue-router';
import { getCover } from '../utils/utils';
import { useActivatedWatch } from '../composables/useActivatedWatch';
import { MoeAuthStore } from '../stores/store';
import { normalizeRecommendationSong } from '../utils/recommendations';
import {
    RECOMMENDATION_TARGET_COUNT,
    extractRecommendationSongs,
    getRecommendationHistoryKey,
    loadRecommendationHistory,
    saveRecommendationHistory,
    selectFreshRecommendations,
} from '../utils/recommendationStrategy';

const router = useRouter();
const route = useRoute();
const songs = ref([]);
const special_list = ref([]);
const isLoading = ref(true);
const isRefreshing = ref(false);
const MoeAuth = MoeAuthStore();
const playSong = (hash, name, img, author) => {
    props.playerControl.addSongToQueue(hash, name, img, author);
};
const contextMenuRef = ref(null);
const showContextMenu = (event, song) => {
    if (contextMenuRef.value) {
        contextMenuRef.value.openContextMenu(event, {
            OriSongName: song.name || song.filename,
            FileHash: song.hash,
            cover: song.cover?.replace("{size}", 480) || './assets/images/ico.png',
            timeLength: song.timelen
        });
    }
};
const props = defineProps({
    playerControl: Object
});

onMounted(() => {
    recommend();
    playlist();
});

const handleShareRoute = async (onCleanup) => {
    if (window.electron) return;

    let cancelled = false;
    await new Promise(resolve => {
        const timer = setTimeout(resolve, 1000);
        onCleanup(() => {
            cancelled = true;
            clearTimeout(timer);
        });
    });

    if (cancelled) return;

    if (route.query.hash) {
        privilegeSong(route.query.hash).then(res => {
            if (cancelled) return;
            if (res.status == 1) {
                const songInfo = res.data[0];
                playSong(songInfo.hash, songInfo.albumname, getCover(songInfo.info.image, 480), songInfo.singername)
                router.push('/');
            }
        })
    } else if (route.query.listid) {
        router.push({
            path: '/PlaylistDetail',
            query: { global_collection_id: route.query.listid }
        });
    }
};

useActivatedWatch(() => [route.query.hash, route.query.listid], (_value, _oldValue, onCleanup) => {
    handleShareRoute(onCleanup);
}, { immediate: true });

const recommendationSources = [
    { name: 'everyday', path: '/everyday/recommend' },
    { name: 'recommend_songs', path: '/recommend/songs' },
    { name: 'top_card_1', path: '/top/card', params: { card_id: 1 } },
    { name: 'top_card_2', path: '/top/card', params: { card_id: 2 } },
    { name: 'top_card_3', path: '/top/card', params: { card_id: 3 } },
    { name: 'top_card_4', path: '/top/card', params: { card_id: 4 } },
    { name: 'new_song', path: '/top/song' },
    { name: 'youth_tag', path: '/top/tag/card/youth' },
    { name: 'youth_card_3001', path: '/top/card/youth', params: { card_id: 3001 } },
    { name: 'youth_card_3005', path: '/top/card/youth', params: { card_id: 3005 } },
];

const isSuccessfulRecommendationResponse = response => {
    if (!response || response.status === 0) return false;
    if (response.error_code !== undefined && response.error_code !== 0) return false;
    return Boolean(response.data);
};

const loadFreshRecommendations = async () => {
    // Home can mount before App.vue's device initialization hook. Wait for it
    // here so a first-run refresh uses the same history key as later refreshes.
    if (!MoeAuth.Device) await MoeAuth.initDevice();
    const historyKey = getRecommendationHistoryKey(MoeAuth.UserInfo, MoeAuth.Device);
    const history = loadRecommendationHistory(localStorage, historyKey);
    const candidates = [];

    for (const source of recommendationSources) {
        try {
            const response = await get(source.path, {
                ...(source.params || {}),
                // The API server caches identical URLs for two minutes. A
                // timestamp bypasses that proxy cache; the upstream daily
                // pool can still remain stable for the current date.
                timestamp: Date.now(),
            });

            if (!isSuccessfulRecommendationResponse(response)) continue;

            const sourceSongs = extractRecommendationSongs(response.data)
                .map(song => ({ ...normalizeRecommendationSong(song), recommendationSource: source.name }));
            candidates.push(...sourceSongs);

            const fresh = selectFreshRecommendations({
                songs: candidates,
                seenHashes: history,
                targetCount: RECOMMENDATION_TARGET_COUNT,
            });
            if (fresh.length >= RECOMMENDATION_TARGET_COUNT) break;
        } catch (error) {
            console.warn(`[推荐] ${source.name} 请求失败`, error);
        }
    }

    const freshSongs = selectFreshRecommendations({
        songs: candidates,
        seenHashes: history,
        targetCount: RECOMMENDATION_TARGET_COUNT,
    });

    if (freshSongs.length !== RECOMMENDATION_TARGET_COUNT) {
        const shortageError = new Error(`推荐候选池仅剩 ${freshSongs.length} 首新歌`);
        shortageError.code = 'INSUFFICIENT_FRESH_RECOMMENDATIONS';
        throw shortageError;
    }

    freshSongs.forEach(song => history.add(song.hash));
    saveRecommendationHistory(history, localStorage, historyKey);
    return freshSongs;
};

const recommend = async () => {
    if (isRefreshing.value) return;
    isRefreshing.value = true;
    isLoading.value = true;

    try {
        songs.value = await loadFreshRecommendations();
    } catch (error) {
        console.error('[推荐] 刷新失败:', error);
        window.$message?.error?.(error.code === 'INSUFFICIENT_FRESH_RECOMMENDATIONS'
            ? '当前推荐候选池不足，请稍后再试'
            : '推荐刷新失败，请稍后再试');
    } finally {
        isRefreshing.value = false;
        isLoading.value = false;
    }
};

const playlist = async () => {
    const response = await get(`/top/playlist?category_id=0`);
    if (response.status == 1) {
        special_list.value = response.data.special_list;
    }
}

const privilegeSong = async (hash) => {
    const response = await get(`/privilege/lite`, { hash: hash });
    return response;
}
const addAllSongsToQueue = () => {
    props.playerControl.addPlaylistToQueue(songs.value.map(song => ({
        hash: song.hash,
        name: song.name,
        cover: song.cover?.replace("{size}", 480),
        author: song.author,
        timelen: song.timelen
    })));
};

</script>

<style lang="scss" scoped>
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    --home-playlist-card-bg: #fff;
    --home-playlist-card-shadow: 0 8px 22px rgba(31, 41, 55, 0.08);
    --home-playlist-card-hover-shadow: 0 14px 30px rgba(31, 41, 55, 0.14);
    --home-playlist-title: var(--primary-color);
    --home-playlist-description: #666;
    --home-song-card-bg: #fff;
    --home-song-card-shadow: 0 6px 18px rgba(31, 41, 55, 0.07);
    --home-song-card-hover-shadow: 0 12px 26px rgba(31, 41, 55, 0.12);
    --home-song-title: var(--text-color);
    --home-song-artist: #666;
    --home-song-hover-bg: rgba(var(--primary-color-rgb), 0.06);

    &:is(.dark .container) {
        --home-playlist-card-bg: #1d1d1d;
        --home-playlist-card-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
        --home-playlist-card-hover-shadow: 0 16px 34px rgba(0, 0, 0, 0.34);
        --home-playlist-title: rgba(255, 255, 255, 0.86);
        --home-playlist-description: rgba(255, 255, 255, 0.62);
        --home-song-card-bg: #1d1d1d;
        --home-song-card-shadow: 0 10px 22px rgba(0, 0, 0, 0.24);
        --home-song-card-hover-shadow: 0 14px 30px rgba(0, 0, 0, 0.32);
        --home-song-title: rgba(255, 255, 255, 0.86);
        --home-song-artist: rgba(255, 255, 255, 0.58);
        --home-song-hover-bg: rgba(var(--primary-color-rgb), 0.12);
    }
}

.section-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.recommend-refresh-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 30px;
    padding: 7px 12px;
    color: var(--primary-color);
    background: transparent;
    border: 1px solid color-mix(in srgb, var(--primary-color) 45%, transparent);
    border-radius: 999px;
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease;

    &:hover:not(:disabled) {
        background-color: rgba(var(--primary-color-rgb), 0.1);
    }

    &:disabled {
        cursor: wait;
        opacity: 0.65;
    }

    .spinning {
        animation: recommendation-spin 0.9s linear infinite;
    }
}

@keyframes recommendation-spin {
    to { transform: rotate(360deg); }
}

.section-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
    color: var(--primary-color);

    .mama {
        position: absolute;
        height: 40px;
        margin-left: 117px;
        cursor: cell;
    }
}

.song-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
    margin-top: 20px;
    margin-bottom: 34px;
}

.song-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    background-color: var(--home-song-card-bg);
    padding: 8px 12px 8px 8px;
    border-radius: 8px;
    box-shadow: var(--home-song-card-shadow);
    transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
    cursor: pointer;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        right: 21px;
        z-index: 1;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 8px solid #fff;
        opacity: 0;
        transform: translateX(8px) scale(0.92);
        transition: opacity 0.25s ease, transform 0.25s ease;
    }

    &::after {
        content: "";
        position: absolute;
        right: 12px;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: var(--primary-color);
        border-radius: 50%;
        opacity: 0;
        transform: translateX(8px) scale(0.92);
        transition: opacity 0.25s ease, transform 0.25s ease;
    }

    &:hover {
        transform: translateY(-3px);
        background-color: var(--home-song-hover-bg);
        box-shadow: var(--home-song-card-hover-shadow);

        &::after {
            opacity: 1;
            transform: translateX(0) scale(1);
        }

        &::before {
            opacity: 1;
            transform: translateX(0) scale(1);
        }

        .song-info {
            padding-right: 34px;
        }
    }
}

.song-cover {
    flex: 0 0 auto;
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 6px;
}

.song-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    transition: padding-right 0.25s ease;
}

.song-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--home-song-title);
    line-height: 1.35;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.song-artist {
    margin-top: 4px;
    font-size: 13px;
    color: var(--home-song-artist);
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@media screen and (max-width: 768px) {
    .song-list {
        gap: 10px;
        margin-bottom: 28px;
    }

    .song-item {
        padding: 7px 10px 7px 7px;
    }

    .song-cover {
        width: 48px;
        height: 48px;
    }

    .song-title {
        font-size: 14px;
    }

    .song-artist {
        font-size: 12px;
    }
}

.playlist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
    gap: 18px;
}

.playlist-item {
    min-width: 0;
    padding: 10px;
    background-color: var(--home-playlist-card-bg);
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    box-shadow: var(--home-playlist-card-shadow);

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--home-playlist-card-hover-shadow);

        .playlist-cover {
            transform: scale(1.04);
        }
    }

    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
}

.playlist-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
}

.playlist-cover-wrap {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 6px;
}

.playlist-info {
    padding: 12px 2px 2px;
}

.playlist-title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 16px;
    color: var(--home-playlist-title);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.35;
    min-height: 43px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        min-height: 38px;
    }
}

.playlist-description {
    color: var(--home-playlist-description);
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.55;
    min-height: 40px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        min-height: 37px;
    }
}

@media screen and (max-width: 768px) {
    .playlist-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 12px;
    }

    .playlist-item {
        padding: 8px;
    }
}
</style>

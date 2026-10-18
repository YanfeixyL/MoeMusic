<template>
    <div v-if="showUpdateDialog" class="modal-overlay" @click="closeUpdateDialog">
        <div class="modal-content update-dialog" @click.stop>
            <h2>{{ showNewBadge ? `发现新版本 V${latestVersion}` : '软件更新' }}</h2>
            <MarkdownContent class="update-log-box" :content="updateLog" :repo-url="projectRepoUrl" />
            <div v-if="isDownloadingUpdate || isUpdateDownloaded" class="update-progress-inline">
                <div class="update-progress-bar">
                    <div class="update-progress-fill" :style="{ width: `${updateProgress}%` }"></div>
                </div>
                <span class="update-progress-percent">{{ updateProgress.toFixed(1) }}%</span>
            </div>
            <p v-if="updateStatusText" role="status">{{ updateStatusText }}</p>
            <div class="update-dialog-actions">
                <button @click="startOnlineUpdate" :disabled="isStartingUpdate || isDownloadingUpdate || updateState.status === 'unsupported'">
                    {{ isUpdateDownloaded ? '立即重启安装' : isDownloadingUpdate ? '下载中...' : isStartingUpdate ? '正在启动...' : '在线更新' }}
                </button>
                <button @click="openManualUpdatePage">手动更新</button>
                <button class="secondary-button" @click="closeUpdateDialog">关闭</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import MarkdownContent from './MarkdownContent.vue';
import { openRegisterUrl } from '../utils/utils';
import { isVersionLower, formatReleaseNotes } from '../utils/appUpdate';

const props = defineProps({
    appVersion: { type: String, default: '' },
    platform: { type: String, default: '' }
});
const emit = defineEmits(['badge-change']);
const projectRepoUrl = 'https://github.com/MoeKoeMusic/MoeKoeMusic';
const repoUrl = `${projectRepoUrl}/releases`;
const showUpdateDialog = ref(false);
const showNewBadge = ref(false);
const updateLog = ref('暂无更新日志');
const latestVersion = ref('');
const manualUpdateUrl = ref(repoUrl);
const updateState = ref({ status: 'idle', progress: null, error: null });
const actionError = ref('');
const isStartingUpdate = computed(() => ['checking', 'available'].includes(updateState.value.status));
const isDownloadingUpdate = computed(() => updateState.value.status === 'downloading');
const isUpdateDownloaded = computed(() => updateState.value.status === 'downloaded');
const updateProgress = computed(() => {
    const percent = Number(updateState.value.progress?.percent);
    return Number.isFinite(percent) ? Math.max(0, Math.min(100, percent)) : 0;
});
const updateStatusText = computed(() => actionError.value || updateState.value.error || ({
    checking: '正在检查更新...',
    available: '发现新版本，准备下载...',
    downloading: '正在后台下载更新，可以继续听歌。',
    downloaded: '更新已下载，正常退出时自动安装，也可以立即重启安装。',
    'not-available': '当前已是最新版本',
    unsupported: '当前环境不支持自动安装，请使用手动更新。'
}[updateState.value.status] || ''));
let unsubscribe;
let stateRevision = 0;
let useReleaseApi = !window.electronAPI?.getUpdateState;
let releaseRequest;

const setShowNewBadge = (value) => {
    showNewBadge.value = value;
    emit('badge-change', value);
};

const applyUpdateState = (state) => {
    if (!state) return;
    stateRevision += 1;
    updateState.value = state;
    actionError.value = '';
    if (state.info?.version) {
        latestVersion.value = state.info.version;
        updateLog.value = formatReleaseNotes(state.info.releaseNotes) || '暂无更新日志';
        setShowNewBadge(true);
    } else if (state.status === 'not-available') {
        setShowNewBadge(false);
    }
};

// Only web/unsupported packages use the Releases API; desktop updates use main-process state.
const fetchLatestVersion = async () => {
    if (!props.appVersion || !useReleaseApi) return;
    releaseRequest?.abort();
    const request = new AbortController();
    releaseRequest = request;
    const timeout = setTimeout(() => request.abort(), 15_000);
    try {
        const response = await fetch('https://api.github.com/repos/MoeKoeMusic/MoeKoeMusic/releases/latest', {
            signal: request.signal
        });
        if (!response.ok) throw new Error(`获取更新信息失败（HTTP ${response.status}）`);
        const data = await response.json();
        if (releaseRequest !== request || request.signal.aborted) return;
        if (typeof data.tag_name !== 'string') throw new Error('发布信息缺少版本号');
        latestVersion.value = data.tag_name.replace(/^v/, '');
        updateLog.value = data.body?.trim() || '暂无更新日志';
        // Open a release page so users can choose the correct CPU architecture.
        manualUpdateUrl.value = `${repoUrl}/tag/${encodeURIComponent(data.tag_name)}`;
        setShowNewBadge(isVersionLower(props.appVersion, latestVersion.value));
        actionError.value = '';
    } catch (error) {
        if (releaseRequest === request) actionError.value = error.name === 'AbortError'
            ? '获取更新信息超时，请稍后重试或手动更新。' : error.message;
    } finally {
        clearTimeout(timeout);
    }
};

const closeUpdateDialog = () => { showUpdateDialog.value = false; };
const openManualUpdatePage = () => openRegisterUrl(manualUpdateUrl.value);
const handleEntryClick = () => {
    showUpdateDialog.value = true;
    if (useReleaseApi) void fetchLatestVersion();
    else if (['idle', 'error', 'not-available'].includes(updateState.value.status)) void startOnlineUpdate();
};

const startOnlineUpdate = async () => {
    if (isStartingUpdate.value || isDownloadingUpdate.value) return;
    actionError.value = '';
    try {
        if (isUpdateDownloaded.value) {
            const result = await window.electronAPI.installUpdate();
            if (!result?.success) actionError.value = result?.message || '安装尚未就绪，请稍后重试。';
            return;
        }
        if (!window.electronAPI?.startUpdateDownload) {
            actionError.value = '当前环境不支持自动安装，请使用手动更新。';
            return;
        }
        const result = await window.electronAPI.startUpdateDownload();
        // Download completion is reported through state; do not overwrite it with "downloading".
        if (!result?.success && !['not-available', 'unsupported'].includes(result?.reason)) {
            actionError.value = result?.message || '更新失败，请稍后重试。';
        }
    } catch (error) {
        actionError.value = error?.message || '更新失败，请稍后重试。';
    }
};

watch(() => props.appVersion, () => { void fetchLatestVersion(); }, { immediate: true });
onMounted(async () => {
    if (!window.electronAPI?.getUpdateState) {
        updateState.value = { status: 'unsupported' };
        return;
    }
    // Subscribe before reading the snapshot; ignore a snapshot if a newer event arrived.
    unsubscribe = window.electronAPI.onUpdateState(applyUpdateState);
    const revision = stateRevision;
    try {
        const state = await window.electronAPI.getUpdateState();
        if (revision === stateRevision) applyUpdateState(state);
        useReleaseApi = state?.status === 'unsupported';
        if (useReleaseApi) await fetchLatestVersion();
    } catch (error) {
        actionError.value = error?.message || '读取更新状态失败';
    }
});
onUnmounted(() => {
    unsubscribe?.();
    releaseRequest?.abort();
});
defineExpose({ handleEntryClick });
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 700px;
    width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: left;
    animation: fadeIn 0.3s ease;

    h2 {
        margin-top: 20px;
        color: var(--primary-color);
    }

    button {
        margin-top: 15px;
        padding: 8px 12px;
        background-color: var(--primary-color);
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
}

.update-dialog {
    max-width: 600px;

    .update-log-box {
        max-height: 250px;
        overflow-y: auto;
        margin-top: 16px;
        padding: 14px 16px;
        border-radius: 10px;
        background: #faf7fb;
        border: 1px solid rgba(var(--primary-color-rgb), 0.18);
    }

    .update-dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 18px;
        flex-wrap: wrap;
    }

    .update-progress-inline {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .update-progress-bar {
        flex: 1;
        height: 6px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(var(--primary-color-rgb), 0.12);
    }

    .update-progress-fill {
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, var(--primary-color), #ff8ac2);
        transition: width 0.2s ease;
    }

    .update-progress-percent {
        min-width: 52px;
        text-align: right;
        font-size: 13px;
        color: #555;
        font-variant-numeric: tabular-nums;
    }

    button {
        min-width: 124px;
        border-radius: 999px;
        padding: 10px 18px;
        margin-top: 0;
    }

    .secondary-button {
        background: #eef1f6;
        color: #333;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>

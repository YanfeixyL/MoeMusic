// Keep update state in the main process so navigation/reloads cannot restart a download.
export function supportsAutoUpdate({ isPackaged, platform, env }) {
    // The current macOS build is unsigned; Squirrel.Mac requires signed applications.
    return isPackaged && (platform === 'win32' || (platform === 'linux' && Boolean(env.APPIMAGE)));
}

export function createUpdateController({ updater, supported, onState = () => {} }) {
    let state = { status: supported ? 'idle' : 'unsupported', info: null, progress: null, error: null };
    let checkPromise = null;
    let downloadPromise = null;
    let available = false;
    const listeners = [];
    const getState = () => structuredClone(state);
    const publish = (patch) => {
        state = { ...state, ...patch };
        onState(getState());
    };
    const listen = (event, handler) => {
        updater.on(event, handler);
        listeners.push([event, handler]);
    };
    const fail = (error) => {
        publish({ status: 'error', error: error?.message || String(error), progress: null });
        return { success: false, reason: 'error', message: state.error };
    };

    // Explicit downloads allow one shared promise for startup, tray and UI checks.
    updater.autoDownload = false;
    updater.autoInstallOnAppQuit = true;
    updater.allowPrerelease = false;
    updater.allowDowngrade = false;

    listen('update-available', (info) => {
        available = true;
        publish({ status: 'available', info, progress: null, error: null });
    });
    listen('update-not-available', () => {
        available = false;
        publish({ status: 'not-available', info: null, progress: null, error: null });
    });
    listen('download-progress', (progress) => {
        publish({ status: 'downloading', progress, error: null });
    });
    listen('update-downloaded', (info) => {
        publish({ status: 'downloaded', info, progress: { percent: 100 }, error: null });
    });
    // electron-updater emits errors as well as rejecting its check/download promises.
    listen('error', fail);

    function download() {
        if (downloadPromise) return downloadPromise;
        if (state.status === 'downloaded') return Promise.resolve({ success: true });
        publish({ status: 'downloading', progress: { percent: 0 }, error: null });
        downloadPromise = Promise.resolve().then(async () => {
            try {
                await updater.downloadUpdate();
                return { success: true };
            } catch (error) {
                return fail(error);
            } finally {
                downloadPromise = null;
            }
        });
        return downloadPromise;
    }

    function check() {
        if (!supported) return Promise.resolve({ success: false, reason: 'unsupported' });
        if (checkPromise) return checkPromise;
        if (downloadPromise) return downloadPromise;
        if (state.status === 'downloaded') return Promise.resolve({ success: true });
        publish({ status: 'checking', error: null });
        available = false;
        checkPromise = Promise.resolve().then(async () => {
            try {
                const result = await updater.checkForUpdates();
                if (!result) {
                    publish({ status: 'unsupported' });
                    return { success: false, reason: 'unsupported' };
                }
                if (!available) return { success: false, reason: 'not-available' };
                return await download();
            } catch (error) {
                return fail(error);
            } finally {
                checkPromise = null;
            }
        });
        return checkPromise;
    }

    return {
        getState,
        check,
        startDownload: check,
        install() {
            if (state.status !== 'downloaded') return { success: false, reason: 'not-downloaded' };
            try {
                updater.quitAndInstall(false, true);
                return state.status === 'error'
                    ? { success: false, reason: 'error', message: state.error } : { success: true };
            } catch (error) {
                return fail(error);
            }
        },
        dispose() {
            for (const [event, handler] of listeners) updater.removeListener(event, handler);
        }
    };
}

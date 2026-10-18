import { app, dialog } from 'electron';
import electronUpdater from 'electron-updater';
import log from 'electron-log';
import { t } from '../language/i18n.js';
import { createUpdateController, supportsAutoUpdate } from './updateController.js';

const { autoUpdater } = electronUpdater;
let controller;
let startupTimer;
let checkTimer;
let installPrompt;
let getMainWindow = () => null;

function showMessage(options) {
    const window = getMainWindow();
    return window && !window.isDestroyed()
        ? dialog.showMessageBox(window, options)
        : dialog.showMessageBox(options);
}

function showInstallPrompt() {
    if (installPrompt) return installPrompt;
    installPrompt = showMessage({
        type: 'info',
        title: t('update-ready'),
        message: t('update-ready-msg'),
        buttons: [t('install-now'), t('install-later')],
        defaultId: 1,
        cancelId: 1
    }).then(({ response }) => {
        if (response === 0) {
            const result = installUpdate();
            if (!result.success) return showMessage({ type: 'error', message: result.message || t('update-failed') });
        }
    }).catch(error => log.error('Update install prompt failed:', error))
        .finally(() => { installPrompt = null; });
    return installPrompt;
}

// Initialize independently of the music API: a broken API must not prevent updates.
export function setupAutoUpdater(windowProvider) {
    getMainWindow = windowProvider;
    if (controller) return;
    autoUpdater.logger = log;
    // Use electron-builder's packaged app-update.yml (build.publish in package.json).
    // Overriding it here could make a fork install an unrelated upstream build.
    autoUpdater.channel = 'latest';
    controller = createUpdateController({
        updater: autoUpdater,
        supported: supportsAutoUpdate({ isPackaged: app.isPackaged, platform: process.platform, env: process.env }),
        onState(state) {
            const window = getMainWindow();
            if (window && !window.isDestroyed()) {
                window.setProgressBar(state.status === 'downloading' ? (state.progress?.percent || 0) / 100 : -1);
                if (!window.webContents.isDestroyed()) window.webContents.send('update-state', state);
            }
            if (state.status === 'downloaded') void showInstallPrompt();
        }
    });
    if (controller.getState().status !== 'unsupported') {
        startupTimer = setTimeout(() => { void checkForUpdates(true); }, 10_000);
        checkTimer = setInterval(() => { void checkForUpdates(true); }, 4 * 60 * 60 * 1000);
        startupTimer.unref();
        checkTimer.unref();
    }
}

export function getUpdateState() {
    return controller?.getState() || { status: 'unsupported', info: null, progress: null, error: null };
}

export async function checkForUpdates(silent = false) {
    const alreadyDownloaded = getUpdateState().status === 'downloaded';
    const result = await startUpdateDownload();
    if (!silent) {
        if (alreadyDownloaded) await showInstallPrompt();
        else if (!result.success) {
            await showMessage({
                type: result.reason === 'error' ? 'error' : 'info',
                title: t('update-hint'),
                message: result.reason === 'unsupported' ? t('non-update')
                    : result.reason === 'not-available' ? t('already-latest')
                        : result.message || t('update-failed'),
                buttons: [t('ok')]
            });
        }
    }
    return result;
}

export function startUpdateDownload() {
    return controller?.startDownload() || Promise.resolve({ success: false, reason: 'unsupported' });
}

export function installUpdate() {
    if (getUpdateState().status !== 'downloaded') return { success: false, reason: 'not-downloaded' };
    // main.js marks isQuitting in before-quit, only after the updater actually quits.
    return controller.install();
}

export function stopAutoUpdater() {
    clearTimeout(startupTimer);
    clearInterval(checkTimer);
}

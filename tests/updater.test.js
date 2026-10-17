import test from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { createUpdateController, supportsAutoUpdate } from '../electron/services/updateController.js';
import { isVersionLower, formatReleaseNotes } from '../src/utils/appUpdate.js';

const info = { version: '1.7.1', releaseNotes: 'Fix playback' };
const deferred = () => {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
    return { promise, resolve, reject };
};

function fixture(supported = true) {
    const updater = new EventEmitter();
    const states = [];
    const calls = { check: 0, download: 0, install: [] };
    updater.checkForUpdates = async () => {
        calls.check += 1;
        updater.emit('update-available', info);
        return { isUpdateAvailable: true, updateInfo: info };
    };
    updater.downloadUpdate = async () => {
        calls.download += 1;
        updater.emit('download-progress', { percent: 50, transferred: 10, total: 20 });
        updater.emit('update-downloaded', info);
        return ['installer.exe'];
    };
    updater.quitAndInstall = (...args) => calls.install.push(args);
    const controller = createUpdateController({ updater, supported, onState: state => states.push(state) });
    return { updater, controller, states, calls };
}

test('only packaged Windows and Linux AppImage enable automatic installation', () => {
    for (const [isPackaged, platform, env, expected] of [
        [false, 'win32', {}, false], [true, 'win32', {}, true],
        [true, 'linux', {}, false], [true, 'linux', { APPIMAGE: '/music.AppImage' }, true],
        [true, 'darwin', {}, false], [true, 'freebsd', {}, false]
    ]) assert.equal(supportsAutoUpdate({ isPackaged, platform, env }), expected);
});

test('unsupported packages never check or download', async () => {
    const { controller, calls } = fixture(false);
    assert.deepEqual(await controller.check(), { success: false, reason: 'unsupported' });
    assert.equal(controller.getState().status, 'unsupported');
    assert.equal(calls.check + calls.download, 0);
});

test('a new release is downloaded automatically and ready state survives promise completion', async () => {
    const { controller, updater, states, calls } = fixture();
    assert.equal(updater.autoDownload, false);
    assert.equal(updater.autoInstallOnAppQuit, true);
    assert.equal(updater.allowPrerelease, false);
    assert.equal(updater.allowDowngrade, false);
    assert.deepEqual(await controller.check(), { success: true });
    assert.deepEqual(states.map(state => state.status), ['checking', 'available', 'downloading', 'downloading', 'downloaded']);
    assert.equal(controller.getState().status, 'downloaded');
    assert.equal(controller.getState().progress.percent, 100);
    assert.equal(calls.check, 1);
    assert.equal(calls.download, 1);
    assert.equal(calls.install.length, 0); // Listening to music is not interrupted.
});

test('simultaneous startup, tray and UI requests share a check and download', async () => {
    const { controller, updater, calls } = fixture();
    const gate = deferred();
    updater.checkForUpdates = async () => {
        calls.check += 1;
        await gate.promise;
        updater.emit('update-available', info);
        return { isUpdateAvailable: true };
    };
    const first = controller.check();
    const second = controller.startDownload();
    assert.equal(first, second);
    gate.resolve();
    await Promise.all([first, second, controller.check()]);
    assert.equal(calls.check, 1);
    assert.equal(calls.download, 1);
});

test('a manual request during download does not reset progress or start another download', async () => {
    const { controller, updater, calls } = fixture();
    const gate = deferred();
    const started = deferred();
    updater.downloadUpdate = async () => {
        calls.download += 1;
        updater.emit('download-progress', { percent: 64 });
        started.resolve();
        await gate.promise;
        updater.emit('update-downloaded', info);
    };
    const first = controller.check();
    await started.promise;
    const second = controller.startDownload();
    assert.equal(controller.getState().progress.percent, 64);
    gate.resolve();
    await Promise.all([first, second]);
    assert.equal(calls.check, 1);
    assert.equal(calls.download, 1);
});

test('no update clears old metadata and never downloads', async () => {
    const { controller, updater, calls } = fixture();
    updater.checkForUpdates = async () => {
        updater.emit('update-not-available', { version: '1.7.0' });
        return { isUpdateAvailable: false };
    };
    assert.deepEqual(await controller.check(), { success: false, reason: 'not-available' });
    assert.equal(controller.getState().info, null);
    assert.equal(calls.download, 0);
});

test('network errors become observable state and a later check retries successfully', async () => {
    const { controller, updater, calls } = fixture();
    const normalCheck = updater.checkForUpdates;
    updater.checkForUpdates = async () => {
        const error = new Error('ETIMEDOUT');
        updater.emit('error', error);
        throw error;
    };
    assert.deepEqual(await controller.check(), { success: false, reason: 'error', message: 'ETIMEDOUT' });
    assert.equal(controller.getState().status, 'error');
    assert.equal(controller.getState().progress, null);
    updater.checkForUpdates = normalCheck;
    assert.deepEqual(await controller.check(), { success: true });
    assert.equal(calls.download, 1);
});

test('a failed checksum prevents installation and permits download retry', async () => {
    const { controller, updater } = fixture();
    const normalDownload = updater.downloadUpdate;
    updater.downloadUpdate = async () => { throw new Error('sha512 checksum mismatch'); };
    assert.equal((await controller.check()).success, false);
    assert.deepEqual(controller.install(), { success: false, reason: 'not-downloaded' });
    updater.downloadUpdate = normalDownload;
    assert.equal((await controller.startDownload()).success, true);
});

test('downloaded state is a recoverable snapshot and repeated checks reuse it', async () => {
    const { controller, calls } = fixture();
    await controller.check();
    const snapshot = controller.getState();
    snapshot.info.version = '9.9.9';
    snapshot.progress.percent = 0;
    assert.equal(controller.getState().info.version, info.version);
    assert.equal(controller.getState().progress.percent, 100);
    await controller.check();
    assert.equal(calls.check, 1);
    assert.equal(calls.download, 1);
});

test('install requires a completed download and requests an interactive restart', async () => {
    const { controller, calls } = fixture();
    assert.equal(controller.install().success, false);
    await controller.check();
    assert.deepEqual(controller.install(), { success: true });
    assert.deepEqual(calls.install, [[false, true]]);
});

test('installer errors are returned without reporting successful installation', async () => {
    const { controller, updater } = fixture();
    await controller.check();
    updater.quitAndInstall = () => updater.emit('error', new Error('installer missing'));
    assert.deepEqual(controller.install(), { success: false, reason: 'error', message: 'installer missing' });
});

test('a disabled updater exits checking state', async () => {
    const { controller, updater } = fixture();
    updater.checkForUpdates = async () => null;
    assert.equal((await controller.check()).reason, 'unsupported');
    assert.equal(controller.getState().status, 'unsupported');
});

test('cleanup unregisters controller listeners', () => {
    const { controller, updater } = fixture();
    controller.dispose();
    assert.deepEqual(updater.eventNames(), []);
});

test('version comparison handles numeric versions, prereleases and malformed responses', () => {
    for (const [current, latest, expected] of [
        ['1.9.0', '1.10.0', true], ['1.7.0', 'v1.7.1', true],
        ['1.7.1-beta.1', '1.7.1', true], ['1.7.1', '1.7.1-beta.1', false],
        ['1.7.1', '1.7.1', false], ['2.0.0', '1.7.1', false], ['', undefined, false],
        ['1.7.0', 'not-a-version', false]
    ]) assert.equal(isVersionLower(current, latest), expected);
});

test('release notes accept strings and electron-updater full changelog arrays', () => {
    assert.equal(formatReleaseNotes('  Fix playback\n '), 'Fix playback');
    assert.equal(formatReleaseNotes([{ version: '1.7.1', note: 'Fix' }, { version: '1.7.0', note: null }]), 'Fix');
    assert.equal(formatReleaseNotes(undefined), '');
});

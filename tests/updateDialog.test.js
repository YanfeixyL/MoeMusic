import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { EventEmitter } from 'node:events';
import vm from 'node:vm';
import { parse, compileScript } from '@vue/compiler-sfc';
import { createRenderer, nextTick } from 'vue';

// Mount the actual SFC using Vue's renderer without a browser or extra DOM dependencies.
const { descriptor } = parse(readFileSync(new URL('../src/components/AppUpdateDialog.vue', import.meta.url), 'utf8'));
let code = compileScript(descriptor, { id: 'update-dialog-test', inlineTemplate: true }).content;
code = code.replace(/from ['"]vue['"]/g, `from '${import.meta.resolve('vue')}'`)
    .replace(/import MarkdownContent[^;]+;/, 'const MarkdownContent = { render: () => null };')
    .replace(/import \{ openRegisterUrl \}[^;]+;/, 'const openRegisterUrl = () => {};')
    .replace(/from ['"]\.\.\/utils\/appUpdate['"]/, `from '${new URL('../src/utils/appUpdate.js', import.meta.url).href}'`);
const { default: UpdateDialog } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);

const node = (type, text = '') => ({ type, text, children: [], props: {}, parent: null });
const renderer = createRenderer({
    createElement: type => node(type),
    createText: text => node('text', text),
    createComment: text => node('comment', text),
    setText: (element, text) => { element.text = text; },
    setElementText: (element, text) => { element.text = text; element.children = []; },
    patchProp: (element, key, _previous, next) => { element.props[key] = next; },
    parentNode: element => element.parent,
    nextSibling: element => element.parent?.children[element.parent.children.indexOf(element) + 1] || null,
    insert(element, parent, anchor = null) {
        element.parent = parent;
        const index = anchor ? parent.children.indexOf(anchor) : -1;
        parent.children.splice(index < 0 ? parent.children.length : index, 0, element);
    },
    remove(element) {
        const index = element.parent?.children.indexOf(element);
        if (index >= 0) element.parent.children.splice(index, 1);
    }
});
const content = element => element.text + element.children.map(content).join('');
const flush = async () => { await new Promise(resolve => setImmediate(resolve)); await nextTick(); };
const downloaded = { status: 'downloaded', info: { version: '1.7.1', releaseNotes: 'Fix' }, progress: { percent: 100 } };

function mount(api) {
    let listener;
    let unsubscribed = false;
    globalThis.window = {
        electronAPI: {
            onUpdateState(handler) { listener = handler; return () => { unsubscribed = true; }; },
            ...api
        }
    };
    const root = node('root');
    const app = renderer.createApp(UpdateDialog, { appVersion: '1.7.0', platform: 'win32' });
    const exposed = app.mount(root);
    return { root, app, exposed, emit: state => listener(state), unsubscribed: () => unsubscribed };
}

test('a stale initial IPC snapshot cannot overwrite a download-completed event', async () => {
    let resolveSnapshot;
    const snapshot = new Promise(resolve => { resolveSnapshot = resolve; });
    const instance = mount({ getUpdateState: () => snapshot });
    try {
        instance.emit(downloaded);
        resolveSnapshot({ status: 'downloading', progress: { percent: 20 } });
        await flush();
        instance.exposed.handleEntryClick();
        await nextTick();
        assert.match(content(instance.root), /立即重启安装/);
        assert.match(content(instance.root), /100\.0%/);
    } finally { instance.app.unmount(); }
    assert.equal(instance.unsubscribed(), true);
});

test('the download IPC promise resolving after completion leaves the install button enabled', async () => {
    let resolveDownload;
    let installs = 0;
    const download = new Promise(resolve => { resolveDownload = resolve; });
    const instance = mount({
        getUpdateState: async () => ({ status: 'idle' }),
        startUpdateDownload: () => download,
        installUpdate: async () => { installs += 1; return { success: true }; }
    });
    try {
        await flush();
        instance.exposed.handleEntryClick();
        instance.emit({ status: 'downloading', progress: { percent: 50 } });
        instance.emit(downloaded);
        resolveDownload({ success: true });
        await flush();
        assert.match(content(instance.root), /立即重启安装/);
        const findButton = element => element.type === 'button' ? element : element.children.map(findButton).find(Boolean);
        const button = findButton(instance.root);
        assert.equal(button.props.disabled, false);
        await button.props.onClick();
        assert.equal(installs, 1);
    } finally { instance.app.unmount(); }
});

test('remounting the update dialog restores downloaded state without another check', async () => {
    let checks = 0;
    const instance = mount({
        getUpdateState: async () => downloaded,
        startUpdateDownload: async () => { checks += 1; return { success: true }; }
    });
    try {
        await flush();
        instance.exposed.handleEntryClick();
        await nextTick();
        assert.match(content(instance.root), /立即重启安装/);
        assert.equal(checks, 0);
    } finally { instance.app.unmount(); }
});

test('preload update subscription returns a working cleanup function', () => {
    const ipcRenderer = new EventEmitter();
    const exposed = {};
    vm.runInNewContext(readFileSync(new URL('../electron/preload.cjs', import.meta.url), 'utf8'), {
        require: () => ({ ipcRenderer, contextBridge: { exposeInMainWorld: (name, api) => { exposed[name] = api; } } }),
        process: { platform: 'win32' }
    });
    let received;
    const cleanup = exposed.electronAPI.onUpdateState(state => { received = state; });
    ipcRenderer.emit('update-state', {}, downloaded);
    assert.equal(received, downloaded);
    cleanup();
    assert.equal(ipcRenderer.listenerCount('update-state'), 0);
});

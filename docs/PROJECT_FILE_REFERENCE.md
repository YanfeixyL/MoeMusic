# 项目逐文件与函数索引

配套阅读：[整体逻辑导读](<D:/Project/MoeKoeMusic/docs/PROJECT_GUIDE.md>)；[自动更新审查说明](<D:/Project/MoeKoeMusic/docs/AUTO_UPDATE_REVIEW.md>)。

本索引覆盖 **460 个文件**：主项目的已跟踪文件、API子模块的已跟踪文件，以及当前新增的更新代码、测试和说明文档。扫描时识别 **1480 个具名函数/方法/类位置**，所有扫描脚本块均可被语法解析；这属于静态结构核对，不代表1480个函数都已运行测试。

为每个代码文件说明职责并列出具名入口；匿名回调、每条CSS规则、全部依赖源码和二进制内部指令不逐行展开。API的每个业务模块单独列出，页面直接调用情况按源码静态引用定位；未定位不等于接口永远不会使用。代码位置基于当前工作区，后续编辑可能改变行号。

目录中的 `node_modules/`、`dist/`、`dist_electron/`、`.git/`、运行期 `api/bin/` 和用户数据是依赖/产物/缓存，不纳入业务源码逐文件表。API子模块作为独立仓库展开；它自己的README、锁文件、文档和CI也有单独条目。

## 根目录入口和配置

### .gitignore

[打开源码](<D:/Project/MoeKoeMusic/.gitignore>)。主项目忽略依赖、产物、日志、编辑器设置和实际扩展内容。

### .gitmodules

[打开源码](<D:/Project/MoeKoeMusic/.gitmodules>)。声明 api 为独立 Git子模块及其上游仓库地址，固定版本由 Gitlink记录。

### CODE_OF_CONDUCT.md

[打开源码](<D:/Project/MoeKoeMusic/CODE_OF_CONDUCT.md>)。社区参与的行为规范。

### CONTRIBUTING.md

[打开源码](<D:/Project/MoeKoeMusic/CONTRIBUTING.md>)。贡献、代码风格、测试、提交和 PR流程说明；不是运行时配置。

### Dockerfile

[打开源码](<D:/Project/MoeKoeMusic/Dockerfile>)。两阶段构建网页、安装 API生产依赖与 Nginx，容器同时运行 HTTP API和网页服务。

### LICENSE

[打开源码](<D:/Project/MoeKoeMusic/LICENSE>)。主项目 GPL-2.0-only许可证正文。

### README.md

[打开源码](<D:/Project/MoeKoeMusic/README.md>)。中文主项目介绍、截图、安装、开发、部署和使用说明。

### docker-compose.yml

[打开源码](<D:/Project/MoeKoeMusic/docker-compose.yml>)。网页/API容器的构建、重启策略、平台参数和8080/6521端口映射。

### index.html

[打开源码](<D:/Project/MoeKoeMusic/index.html>)。Vite网页入口：#app挂载点、前端模块、图标字体和语言初始化。

**具名函数、方法与类：** [getBrowserLocale](<D:/Project/MoeKoeMusic/index.html:23>)

**显式local/sessionStorage键：** `settings`。

### nginx.conf

[打开源码](<D:/Project/MoeKoeMusic/nginx.conf>)。网页静态服务和 SPA回退，把 /api/ 转发到音乐API。

### package-lock.json

[打开源码](<D:/Project/MoeKoeMusic/package-lock.json>)。npm 精确依赖和完整性锁；上一轮因 semver直接依赖调整布局，不手工编写业务逻辑。

### package.json

[打开源码](<D:/Project/MoeKoeMusic/package.json>)。主项目身份/版本/依赖、开发脚本、electron-builder平台目标、资源复制和发布源；上一轮添加 test与 semver。

### vite.config.js

[打开源码](<D:/Project/MoeKoeMusic/vite.config.js>)。Vue/Vite配置、8080开发服务器、别名、__VERSION__注入、PWA manifest与缓存规则。

**外部/内置依赖：** `vite`、`@vitejs/plugin-vue`、`vite-plugin-pwa`。

## Electron主进程、窗口与服务

### electron/appServices.js

[打开源码](<D:/Project/MoeKoeMusic/electron/appServices.js>)。桌面基础功能集：主/歌词/MV窗口、托盘/Touch Bar、API 子进程、快捷键、开机音效、任务栏按钮和 moekoe 协议。

**具名函数、方法与类：** [createWindow](<D:/Project/MoeKoeMusic/electron/appServices.js:23>) · [persistLyricsWindowBounds](<D:/Project/MoeKoeMusic/electron/appServices.js:142>) · [createLyricsWindow](<D:/Project/MoeKoeMusic/electron/appServices.js:149>) · [createMvWindow](<D:/Project/MoeKoeMusic/electron/appServices.js:234>) · [getIconPath](<D:/Project/MoeKoeMusic/electron/appServices.js:259>) · [getTray](<D:/Project/MoeKoeMusic/electron/appServices.js:265>) · [createTray](<D:/Project/MoeKoeMusic/electron/appServices.js:270>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:293>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:308>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:316>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:324>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:332>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:339>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:346>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:353>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:364>) · [createTouchBar](<D:/Project/MoeKoeMusic/electron/appServices.js:415>) · [iconPath](<D:/Project/MoeKoeMusic/electron/appServices.js:420>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:435>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:443>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:453>) · [startApiServer](<D:/Project/MoeKoeMusic/electron/appServices.js:496>) · [stopApiServer](<D:/Project/MoeKoeMusic/electron/appServices.js:574>) · [registerShortcut](<D:/Project/MoeKoeMusic/electron/appServices.js:585>) · [clickFunc](<D:/Project/MoeKoeMusic/electron/appServices.js:589>) · [syncDesktopLyricsSetting](<D:/Project/MoeKoeMusic/electron/appServices.js:704>) · [playStartupSound](<D:/Project/MoeKoeMusic/electron/appServices.js:713>) · [setThumbarButtons](<D:/Project/MoeKoeMusic/electron/appServices.js:750>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:755>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:763>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:771>) · [click](<D:/Project/MoeKoeMusic/electron/appServices.js:782>) · [registerProtocolHandler](<D:/Project/MoeKoeMusic/electron/appServices.js:799>) · [getHash](<D:/Project/MoeKoeMusic/electron/appServices.js:832>) · [handleArgv](<D:/Project/MoeKoeMusic/electron/appServices.js:838>) · [handleUrl](<D:/Project/MoeKoeMusic/electron/appServices.js:846>) · [sendHashAfterLoad](<D:/Project/MoeKoeMusic/electron/appServices.js:867>)

**项目内依赖：** [./services/updater.js](<D:/Project/MoeKoeMusic/electron/services/updater.js>)、[./language/i18n.js](<D:/Project/MoeKoeMusic/electron/language/i18n.js>)、[./services/externalLinkHandler.js](<D:/Project/MoeKoeMusic/electron/services/externalLinkHandler.js>)、[./services/customTrayMenuService.js](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js>)。

**外部/内置依赖：** `electron`、`path`、`child_process`、`electron-log`、`electron-store`、`url`、`electron-is-dev`、`fs`。

**IPC通道（操作:名称）：** `on:play-pause-action`、`on:update-current-lyrics`。

### electron/main.js

[打开源码](<D:/Project/MoeKoeMusic/electron/main.js>)。桌面主入口：单实例、生命周期、窗口与服务组合、设置和歌词 IPC；上一轮接入启动更新、退出安装和更新 IPC校验。

**具名函数、方法与类：** [showStartupError](<D:/Project/MoeKoeMusic/electron/main.js:25>) · [syncDesktopLyricsSetting](<D:/Project/MoeKoeMusic/electron/main.js:261>) · [isMainWindowRequest](<D:/Project/MoeKoeMusic/electron/main.js:361>)

**项目内依赖：** [./appServices.js](<D:/Project/MoeKoeMusic/electron/appServices.js>)、[./extensions/extensions.js](<D:/Project/MoeKoeMusic/electron/extensions/extensions.js>)、[./services/updater.js](<D:/Project/MoeKoeMusic/electron/services/updater.js>)、[./services/apiService.js](<D:/Project/MoeKoeMusic/electron/services/apiService.js>)、[./services/statusBarLyricsService.js](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js>)、[./services/customTrayMenuService.js](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js>)、[./services/desktopShortcutIcon.js](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js>)、[./services/logHelper.js](<D:/Project/MoeKoeMusic/electron/services/logHelper.js>)、[./language/i18n.js](<D:/Project/MoeKoeMusic/electron/language/i18n.js>)。

**外部/内置依赖：** `electron`、`electron-store`、`path`、`url`。

**IPC通道（操作:名称）：** `on:disclaimer-response`、`on:window-control`、`on:save-settings`、`on:clear-settings`、`on:custom-shortcut`、`on:lyrics-data`、`on:server-lyrics`、`on:desktop-lyrics-action`、`on:set-ignore-mouse-events`、`on:window-drag`、`on:lyrics-window-fixed-size`、`handle:lyrics-window-pointer-state`、`on:play-pause-action`、`on:open-url`、`on:set-tray-title`、`handle:open-mv-window`、`handle:open-log-path`、`handle:export-log`、`handle:start-update-download`、`handle:get-update-state`、`handle:install-update`。

### electron/preload.cjs

[打开源码](<D:/Project/MoeKoeMusic/electron/preload.cjs>)。隔离环境中的窗口桥，暴露通用 IPC及命名 electronAPI调用；上一轮增加更新状态/安装入口和可解绑订阅。

**具名函数、方法与类：** [send](<D:/Project/MoeKoeMusic/electron/preload.cjs:5>) · [invoke](<D:/Project/MoeKoeMusic/electron/preload.cjs:6>) · [on](<D:/Project/MoeKoeMusic/electron/preload.cjs:7>) · [once](<D:/Project/MoeKoeMusic/electron/preload.cjs:8>) · [removeListener](<D:/Project/MoeKoeMusic/electron/preload.cjs:9>) · [removeAllListeners](<D:/Project/MoeKoeMusic/electron/preload.cjs:10>) · [getExtensions](<D:/Project/MoeKoeMusic/electron/preload.cjs:18>) · [getExtensionsDetailed](<D:/Project/MoeKoeMusic/electron/preload.cjs:19>) · [reloadExtensions](<D:/Project/MoeKoeMusic/electron/preload.cjs:20>) · [openExtensionsDir](<D:/Project/MoeKoeMusic/electron/preload.cjs:21>) · [openExtensionPopup](<D:/Project/MoeKoeMusic/electron/preload.cjs:22>) · [installExtension](<D:/Project/MoeKoeMusic/electron/preload.cjs:23>) · [uninstallExtension](<D:/Project/MoeKoeMusic/electron/preload.cjs:24>) · [validateExtension](<D:/Project/MoeKoeMusic/electron/preload.cjs:25>) · [getExtensionsDirectory](<D:/Project/MoeKoeMusic/electron/preload.cjs:26>) · [ensureExtensionsDirectory](<D:/Project/MoeKoeMusic/electron/preload.cjs:27>) · [installPluginFromZip](<D:/Project/MoeKoeMusic/electron/preload.cjs:28>) · [installPluginFromUrl](<D:/Project/MoeKoeMusic/electron/preload.cjs:29>) · [setNativeHostAuthorization](<D:/Project/MoeKoeMusic/electron/preload.cjs:34>) · [getStatus](<D:/Project/MoeKoeMusic/electron/preload.cjs:36>) · [send](<D:/Project/MoeKoeMusic/electron/preload.cjs:37>) · [onMessage](<D:/Project/MoeKoeMusic/electron/preload.cjs:38>) · [wrapped](<D:/Project/MoeKoeMusic/electron/preload.cjs:39>) · [startUpdateDownload](<D:/Project/MoeKoeMusic/electron/preload.cjs:44>) · [getUpdateState](<D:/Project/MoeKoeMusic/electron/preload.cjs:45>) · [installUpdate](<D:/Project/MoeKoeMusic/electron/preload.cjs:46>) · [onUpdateState](<D:/Project/MoeKoeMusic/electron/preload.cjs:47>) · [wrapped](<D:/Project/MoeKoeMusic/electron/preload.cjs:48>) · [showOpenDialog](<D:/Project/MoeKoeMusic/electron/preload.cjs:52>) · [openMvWindow](<D:/Project/MoeKoeMusic/electron/preload.cjs:53>) · [openLogPath](<D:/Project/MoeKoeMusic/electron/preload.cjs:54>) · [exportLog](<D:/Project/MoeKoeMusic/electron/preload.cjs:55>)

**外部/内置依赖：** `electron`。

**IPC通道（操作:名称）：** `invoke:get-extensions`、`invoke:get-extensions-detailed`、`invoke:reload-extensions`、`invoke:open-extensions-dir`、`invoke:open-extension-popup`、`invoke:install-extension`、`invoke:uninstall-extension`、`invoke:validate-extension`、`invoke:get-extensions-directory`、`invoke:ensure-extensions-directory`、`invoke:install-plugin-from-zip`、`invoke:install-plugin-from-url`、`invoke:set-native-host-authorization`、`invoke:native-host-get-status`、`invoke:native-host-send`、`on:native-host-message`、`removeListener:native-host-message`、`invoke:start-update-download`、`invoke:get-update-state`、`invoke:install-update`、`on:update-state`、`removeListener:update-state`、`invoke:show-open-dialog`、`invoke:open-mv-window`、`invoke:open-log-path`、`invoke:export-log`。

### electron/services/apiService.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/apiService.js>)。可选 WebSocket 控制服务（6520），广播歌词和播放状态，转发上一首/下一首/播放命令；不是音乐 HTTP API。

**具名函数、方法与类：** [ApiService](<D:/Project/MoeKoeMusic/electron/services/apiService.js:3>) · [constructor](<D:/Project/MoeKoeMusic/electron/services/apiService.js:4>) · [init](<D:/Project/MoeKoeMusic/electron/services/apiService.js:12>) · [start](<D:/Project/MoeKoeMusic/electron/services/apiService.js:16>) · [stop](<D:/Project/MoeKoeMusic/electron/services/apiService.js:66>) · [broadcastToClients](<D:/Project/MoeKoeMusic/electron/services/apiService.js:79>) · [handleControlCommand](<D:/Project/MoeKoeMusic/electron/services/apiService.js:89>) · [updateLyrics](<D:/Project/MoeKoeMusic/electron/services/apiService.js:105>) · [updatePlayerState](<D:/Project/MoeKoeMusic/electron/services/apiService.js:114>)

**外部/内置依赖：** `ws`。

### electron/services/customTrayMenuService.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js>)。自定义托盘 BrowserWindow 的显示、定位、主题、内容同步和按钮分发，读取主窗口当前播放信息。

**具名函数、方法与类：** [CustomTrayMenuService](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:11>) · [constructor](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:12>) · [init](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:29>) · [isVisible](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:67>) · [toggle](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:71>) · [show](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:79>) · [hide](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:102>) · [cleanup](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:116>) · [updatePlaybackState](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:125>) · [refresh](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:136>) · [ensureWindow](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:145>) · [positionWindow](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:190>) · [pushState](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:214>) · [waitForRender](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:219>) · [finishRenderWait](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:234>) · [getMenuState](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:244>) · [normalizeSong](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:276>) · [formatTime](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:305>) · [getTheme](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:312>) · [getLabels](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:318>) · [getShortcuts](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:333>) · [handleAction](<D:/Project/MoeKoeMusic/electron/services/customTrayMenuService.js:344>)

**项目内依赖：** [./updater.js](<D:/Project/MoeKoeMusic/electron/services/updater.js>)、[../language/i18n.js](<D:/Project/MoeKoeMusic/electron/language/i18n.js>)。

**外部/内置依赖：** `electron`、`path`、`url`。

**IPC通道（操作:名称）：** `on:tray-menu-ready`、`on:tray-menu-hide`、`on:tray-menu-action`、`on:tray-menu-rendered`、`on:current-song-updated`。

### electron/services/desktopShortcutIcon.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js>)。Windows 桌面快捷方式图标管理：按生日/节日/日期选择图标，午夜调度刷新并处理 PowerShell快捷方式创建。

**具名函数、方法与类：** [createDateAtMidnight](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:22>) · [getFestivalMatch](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:26>) · [getDesktopShortcutIconPath](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:62>) · [refreshIconCache](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:73>) · [escapePowerShellString](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:79>) · [createShortcut](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:83>) · [syncDesktopShortcutIcon](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:108>) · [getNextMidnightDelay](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:121>) · [scheduleNextDesktopShortcutIconSync](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:135>) · [setupDesktopShortcutIcon](<D:/Project/MoeKoeMusic/electron/services/desktopShortcutIcon.js:142>)

**外部/内置依赖：** `fs`、`electron`、`path`、`url`、`child_process`、`electron-is-dev`。

### electron/services/externalLinkHandler.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/externalLinkHandler.js>)。判断窗口导航和新窗口中的外链，交给 shell.openExternal，在应用内保留适合内部加载的地址。

**具名函数、方法与类：** [shouldOpenExternally](<D:/Project/MoeKoeMusic/electron/services/externalLinkHandler.js:3>) · [bindExternalLinkHandler](<D:/Project/MoeKoeMusic/electron/services/externalLinkHandler.js:24>)

**外部/内置依赖：** `electron`。

### electron/services/logHelper.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/logHelper.js>)。打开日志目录、清理旧日志、按时间命名并 ZIP 导出日志。

**具名函数、方法与类：** [openLogPath](<D:/Project/MoeKoeMusic/electron/services/logHelper.js:7>) · [createExportFileName](<D:/Project/MoeKoeMusic/electron/services/logHelper.js:10>) · [pad](<D:/Project/MoeKoeMusic/electron/services/logHelper.js:12>) · [cleanLogs](<D:/Project/MoeKoeMusic/electron/services/logHelper.js:19>) · [exportLog](<D:/Project/MoeKoeMusic/electron/services/logHelper.js:34>)

**外部/内置依赖：** `fs`、`path`、`electron`、`electron-log`、`adm-zip`。

### electron/services/statusBarLyricsService.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js>)。macOS 状态栏歌词控制：主进程触发渲染、接收图片并替换 Tray 图标/标题，处理关闭与清理。

**具名函数、方法与类：** [StatusBarLyricsService](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:3>) · [constructor](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:4>) · [init](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:17>) · [isStatusBarLyricsEnabled](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:30>) · [registerListeners](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:37>) · [getLiveWebContents](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:45>) · [handleLyricsData](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:52>) · [handleDisabledState](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:87>) · [handleUpdateImage](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:110>) · [initializeOnStartup](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:153>) · [cleanup](<D:/Project/MoeKoeMusic/electron/services/statusBarLyricsService.js:171>)

**外部/内置依赖：** `electron`。

**IPC通道（操作:名称）：** `on:update-statusbar-image`。

### electron/services/updateController.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/updateController.js>)。上一轮新增：独立更新状态控制器，支持平台判断、并发任务合并、公开更新事件处理、下载重试和安装门槛。

**具名函数、方法与类：** [supportsAutoUpdate](<D:/Project/MoeKoeMusic/electron/services/updateController.js:2>) · [createUpdateController](<D:/Project/MoeKoeMusic/electron/services/updateController.js:7>) · [getState](<D:/Project/MoeKoeMusic/electron/services/updateController.js:13>) · [publish](<D:/Project/MoeKoeMusic/electron/services/updateController.js:14>) · [listen](<D:/Project/MoeKoeMusic/electron/services/updateController.js:18>) · [fail](<D:/Project/MoeKoeMusic/electron/services/updateController.js:22>) · [download](<D:/Project/MoeKoeMusic/electron/services/updateController.js:50>) · [check](<D:/Project/MoeKoeMusic/electron/services/updateController.js:67>) · [install](<D:/Project/MoeKoeMusic/electron/services/updateController.js:96>) · [dispose](<D:/Project/MoeKoeMusic/electron/services/updateController.js:106>)

### electron/services/updater.js

[打开源码](<D:/Project/MoeKoeMusic/electron/services/updater.js>)。上一轮改动：Electron 更新适配，读取包内发布源、启动/周期检查、任务栏进度、下载完成提示与安装入口。

**具名函数、方法与类：** [getMainWindow](<D:/Project/MoeKoeMusic/electron/services/updater.js:12>) · [showMessage](<D:/Project/MoeKoeMusic/electron/services/updater.js:14>) · [showInstallPrompt](<D:/Project/MoeKoeMusic/electron/services/updater.js:21>) · [setupAutoUpdater](<D:/Project/MoeKoeMusic/electron/services/updater.js:41>) · [onState](<D:/Project/MoeKoeMusic/electron/services/updater.js:51>) · [getUpdateState](<D:/Project/MoeKoeMusic/electron/services/updater.js:68>) · [checkForUpdates](<D:/Project/MoeKoeMusic/electron/services/updater.js:72>) · [startUpdateDownload](<D:/Project/MoeKoeMusic/electron/services/updater.js:91>) · [installUpdate](<D:/Project/MoeKoeMusic/electron/services/updater.js:95>) · [stopAutoUpdater](<D:/Project/MoeKoeMusic/electron/services/updater.js:101>)

**项目内依赖：** [../language/i18n.js](<D:/Project/MoeKoeMusic/electron/language/i18n.js>)、[./updateController.js](<D:/Project/MoeKoeMusic/electron/services/updateController.js>)。

**外部/内置依赖：** `electron`、`electron-updater`、`electron-log`。

### electron/view/index.html

[打开源码](<D:/Project/MoeKoeMusic/electron/view/index.html>)。自定义托盘菜单的 HTML/CSS/脚本；展示歌曲和动作，订阅托盘状态并向主进程发出操作。

**具名函数、方法与类：** [iconSvg](<D:/Project/MoeKoeMusic/electron/view/index.html:403>) · [escapeHtml](<D:/Project/MoeKoeMusic/electron/view/index.html:422>) · [setTheme](<D:/Project/MoeKoeMusic/electron/view/index.html:429>) · [getPlayIconName](<D:/Project/MoeKoeMusic/electron/view/index.html:433>) · [formatTime](<D:/Project/MoeKoeMusic/electron/view/index.html:435>) · [stopProgressTimer](<D:/Project/MoeKoeMusic/electron/view/index.html:442>) · [tickProgress](<D:/Project/MoeKoeMusic/electron/view/index.html:448>) · [syncProgressTimer](<D:/Project/MoeKoeMusic/electron/view/index.html:469>) · [renderControls](<D:/Project/MoeKoeMusic/electron/view/index.html:475>) · [renderSong](<D:/Project/MoeKoeMusic/electron/view/index.html:481>) · [renderActions](<D:/Project/MoeKoeMusic/electron/view/index.html:511>) · [render](<D:/Project/MoeKoeMusic/electron/view/index.html:534>) · [sendAction](<D:/Project/MoeKoeMusic/electron/view/index.html:541>)

## Electron扩展系统

### electron/extensions/extensionIPC.js

[打开源码](<D:/Project/MoeKoeMusic/electron/extensions/extensionIPC.js>)。扩展管理 IPC 与弹窗窗口；按来源识别扩展，分派安装/卸载、文件对话框、Native Host授权和通信。

**具名函数、方法与类：** [syncNativeHosts](<D:/Project/MoeKoeMusic/electron/extensions/extensionIPC.js:12>) · [getSenderExtensionId](<D:/Project/MoeKoeMusic/electron/extensions/extensionIPC.js:20>) · [getExtensionIconData](<D:/Project/MoeKoeMusic/electron/extensions/extensionIPC.js:33>) · [registerExtensionIPC](<D:/Project/MoeKoeMusic/electron/extensions/extensionIPC.js:63>) · [unregisterExtensionIPC](<D:/Project/MoeKoeMusic/electron/extensions/extensionIPC.js:379>)

**项目内依赖：** [./extensionManager.js](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js>)、[./nativeHostManager.js](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js>)、[../services/externalLinkHandler.js](<D:/Project/MoeKoeMusic/electron/services/externalLinkHandler.js>)。

**外部/内置依赖：** `electron`、`path`、`fs`、`electron-log`、`url`。

**IPC通道（操作:名称）：** `handle:set-native-host-authorization`、`handle:native-host-get-status`、`handle:native-host-send`、`handle:get-extensions`、`handle:get-extensions-detailed`、`handle:reload-extensions`、`handle:open-extensions-dir`、`handle:open-extension-popup`、`handle:install-extension`、`handle:uninstall-extension`、`handle:validate-extension`、`handle:get-extensions-directory`、`handle:install-plugin-from-zip`、`handle:install-plugin-from-url`、`handle:show-open-dialog`、`handle:ensure-extensions-directory`。

### electron/extensions/extensionManager.js

[打开源码](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js>)。扩展目录管理、session加载/卸载、manifest 校验、ZIP/URL 安装、信息/大小扫描和已安装判断。

**具名函数、方法与类：** [loadChromeExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:20>) · [unloadChromeExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:72>) · [getLoadedExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:87>) · [installExtension](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:100>) · [uninstallExtension](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:117>) · [reloadExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:157>) · [getExtensionsDirectory](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:171>) · [ensureExtensionsDirectory](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:178>) · [validateManifest](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:190>) · [getExtensionPopupPath](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:223>) · [hasExtensionPopupFile](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:229>) · [getExtensionInfo](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:244>) · [getDirectorySize](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:277>) · [installPluginFromZip](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:305>) · [installPluginFromUrl](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:411>) · [isZipBuffer](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:454>) · [formatFileSize](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:470>) · [scanExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:483>) · [isExtensionInstalled](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js:517>)

**项目内依赖：** [./nativeHostManager.js](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js>)。

**外部/内置依赖：** `electron`、`path`、`fs`、`electron-log`、`url`、`electron-is-dev`、`adm-zip`。

### electron/extensions/extensions.js

[打开源码](<D:/Project/MoeKoeMusic/electron/extensions/extensions.js>)。扩展系统生命周期：加载扩展、注册 IPC、同步本地程序索引/自动启动，清理、重启。

**具名函数、方法与类：** [initializeExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensions.js:10>) · [cleanupExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensions.js:34>) · [restartExtensions](<D:/Project/MoeKoeMusic/electron/extensions/extensions.js:55>) · [syncNativeHosts](<D:/Project/MoeKoeMusic/electron/extensions/extensions.js:70>)

**项目内依赖：** [./extensionManager.js](<D:/Project/MoeKoeMusic/electron/extensions/extensionManager.js>)、[./extensionIPC.js](<D:/Project/MoeKoeMusic/electron/extensions/extensionIPC.js>)、[./nativeHostManager.js](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js>)。

**外部/内置依赖：** `electron-log`。

### electron/extensions/nativeHostManager.js

[打开源码](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js>)。扩展可选本地程序：声明/路径/平台/授权校验，spawn 与 stdin/stdout JSON Lines、隐藏 bridge窗口、退出/超时清理。

**具名函数、方法与类：** [hasNativeHostPermission](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:18>) · [fsExists](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:23>) · [getPlatformEntries](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:31>) · [isRelativePluginPath](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:39>) · [NativeHostManager](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:51>) · [constructor](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:52>) · [syncExtensions](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:63>) · [startAuthorizedAutoHosts](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:84>) · [describeHosts](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:104>) · [setAuthorization](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:118>) · [clearExtensionAuthorization](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:151>) · [getStatusFromSender](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:162>) · [sendFromSender](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:177>) · [stopExtension](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:215>) · [stopAll](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:232>) · [done](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:254>) · [startHost](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:281>) · [stopHostByKey](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:343>) · [writeToHost](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:372>) · [openBridge](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:397>) · [closeBridge](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:437>) · [handleStdout](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:445>) · [sendToExtension](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:481>) · [getHosts](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:496>) · [normalizeHost](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:505>) · [getPluginId](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:541>) · [getPermissionKey](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:545>) · [getKey](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:550>) · [validateNativeHostManifest](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:555>) · [validateNativeHostDeclaration](<D:/Project/MoeKoeMusic/electron/extensions/nativeHostManager.js:577>)

**外部/内置依赖：** `electron`、`child_process`、`path`、`fs`、`url`、`electron-store`、`electron-log`、`tree-kill`。

## Electron原生文案

### electron/language/i18n.js

[打开源码](<D:/Project/MoeKoeMusic/electron/language/i18n.js>)。主进程原生菜单/对话框的六种语言字典和 locale 选择；上一轮修改退出安装文案。

**具名函数、方法与类：** [getLocale](<D:/Project/MoeKoeMusic/electron/language/i18n.js:219>) · [t](<D:/Project/MoeKoeMusic/electron/language/i18n.js:237>)

**外部/内置依赖：** `electron-store`、`electron`。

## Vue入口、布局、路由与Store

### src/App.vue

[打开源码](<D:/Project/MoeKoeMusic/src/App.vue>)。全局根组件：主窗口标题栏、路由、免责声明、状态栏歌词宿主；挂载时注册设备，桌面歌词路由不展示普通外壳。

**项目内依赖：** [@/components/Disclaimer.vue](<D:/Project/MoeKoeMusic/src/components/Disclaimer.vue>)、[@/components/TitleBar.vue](<D:/Project/MoeKoeMusic/src/components/TitleBar.vue>)、[@/components/StatusBarLyrics.vue](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue>)、[@/stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[@/assets/images/tray/tray-icon@2x.png?url](<D:/Project/MoeKoeMusic/src/assets/images/tray/tray-icon@2x.png>)。

**外部/内置依赖：** `vue`、`vue-router`。

**显式local/sessionStorage键：** `settings`。

### src/layouts/HomeLayout.vue

[打开源码](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue>)。顶部/侧边导航、常驻 PlayerControl 和内容区；KeepAlive 页面缓存、滚动恢复、网络状态和设置事件处理。

**具名函数、方法与类：** [handleNetworkChange](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:74>) · [handleOnline](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:88>) · [handleOffline](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:89>) · [loadNavigationMode](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:90>) · [handleSettingsChange](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:95>) · [handleSidebarCollapseChange](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:98>) · [applyPlayerBarLayout](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:102>) · [shouldCacheRoute](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:108>) · [getRouteCacheKey](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:110>) · [getScrollRouteKey](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:112>) · [saveRouteScrollPosition](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:114>) · [restoreRouteScrollPosition](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:118>) · [handleMainScroll](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:126>) · [stopPageRouteAnimation](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:130>) · [replayPageRouteAnimation](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue:137>)

**项目内依赖：** [@/components/Header.vue](<D:/Project/MoeKoeMusic/src/components/Header.vue>)、[@/components/SidebarNavigation.vue](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue>)、[@/components/PlayerControl.vue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue>)、[@/components/OnboardingGuide.vue](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**显式local/sessionStorage键：** `sidebarCollapsed`、`settings`、`theme`。

### src/main.js

[打开源码](<D:/Project/MoeKoeMusic/src/main.js>)。Vue 启动入口：创建应用，注册 Pinia/持久化插件、路由、i18n、弹窗与通知；生产网页环境注册 PWA service worker。

**具名函数、方法与类：** [onNeedRefresh](<D:/Project/MoeKoeMusic/src/main.js:33>) · [onOfflineReady](<D:/Project/MoeKoeMusic/src/main.js:36>)

**项目内依赖：** [./App.vue](<D:/Project/MoeKoeMusic/src/App.vue>)、[./router/router](<D:/Project/MoeKoeMusic/src/router/router.js>)、[../src/utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[./plugins/ModalPlugin](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js>)、[./plugins/MessagePlugin](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js>)、[./utils/i18n](<D:/Project/MoeKoeMusic/src/utils/i18n.js>)、[@/assets/themes/dark.scss](<D:/Project/MoeKoeMusic/src/assets/themes/dark.scss>)。

**外部/内置依赖：** `vue`、`pinia`、`pinia-plugin-persistedstate`、`virtual:pwa-register`。

### src/router/router.js

[打开源码](<D:/Project/MoeKoeMusic/src/router/router.js>)。Hash 路由表和登录导航守卫；处理第一次进入时的启动页设置，未登录时把目标路由保存为 redirect。

**项目内依赖：** [@/layouts/HomeLayout.vue](<D:/Project/MoeKoeMusic/src/layouts/HomeLayout.vue>)、[@/views/Home.vue](<D:/Project/MoeKoeMusic/src/views/Home.vue>)、[@/views/Discover.vue](<D:/Project/MoeKoeMusic/src/views/Discover.vue>)、[@/views/Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>)、[@/views/Login.vue](<D:/Project/MoeKoeMusic/src/views/Login.vue>)、[@/views/Settings.vue](<D:/Project/MoeKoeMusic/src/views/Settings.vue>)、[@/views/PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>)、[@/views/Search.vue](<D:/Project/MoeKoeMusic/src/views/Search.vue>)、[@/views/RecommendedSearch.vue](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue>)、[@/views/Lyrics.vue](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue>)、[@/views/Ranking.vue](<D:/Project/MoeKoeMusic/src/views/Ranking.vue>)、[@/views/CloudDrive.vue](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue>)、[@/views/LocalMusic.vue](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue>)、[@/views/VideoPlayer.vue](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue>)、[@/views/Recognize.vue](<D:/Project/MoeKoeMusic/src/views/Recognize.vue>)、[@/stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)。

**外部/内置依赖：** `vue-router`。

**显式local/sessionStorage键：** `settings`。

### src/stores/musicQueue.js

[打开源码](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js>)。歌曲队列 Store：追加、替换、读取、删除和清空队列；声明持久化配置。

**具名函数、方法与类：** [state](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js:4>) · [addSong](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js:9>) · [setQueue](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js:13>) · [getQueue](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js:17>) · [removeSong](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js:21>) · [clearQueue](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js:25>)

**外部/内置依赖：** `pinia`。

### src/stores/store.js

[打开源码](<D:/Project/MoeKoeMusic/src/stores/store.js>)。认证/设备 Store：UserInfo、Config、Device，设备注册和登录状态判断；设备注册使用独立 axios 实例。

**具名函数、方法与类：** [state](<D:/Project/MoeKoeMusic/src/stores/store.js:12>) · [fetchConfig](<D:/Project/MoeKoeMusic/src/stores/store.js:18>) · [setData](<D:/Project/MoeKoeMusic/src/stores/store.js:23>) · [clearData](<D:/Project/MoeKoeMusic/src/stores/store.js:27>) · [initDevice](<D:/Project/MoeKoeMusic/src/stores/store.js:30>) · [isAuthenticated](<D:/Project/MoeKoeMusic/src/stores/store.js:46>)

**项目内依赖：** [../utils/apiBaseUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js>)。

**外部/内置依赖：** `pinia`、`axios`。

## Vue路由页面

### src/views/CloudDrive.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue>)。远程云盘列表和分页缓存、虚拟滚动、搜索排序、批量队列操作、上传音频和删除云盘文件。

**具名函数、方法与类：** [cacheBustParams](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:196>) · [loadData](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:257>) · [fetchCloudTracks](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:266>) · [fetchCloudPage](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:293>) · [applyCloudResponse](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:308>) · [loadMoreTracks](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:332>) · [handleVirtualUpdate](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:346>) · [loadAllRemainingTracks](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:353>) · [getQualityInfo](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:409>) · [formatTrackList](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:423>) · [toggleListMode](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:443>) · [formatStorageSize](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:449>) · [searchTracks](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:458>) · [playSong](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:475>) · [loadAndAppendRemainingTracks](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:481>) · [addPlaylistToQueue](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:487>) · [uploadMusic](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:509>) · [getAudioDuration](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:515>) · [done](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:518>) · [getUploadQuality](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:529>) · [uploadFile](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:537>) · [onUploadProgress](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:557>) · [handleFileSelect](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:564>) · [scrollToTrackIndex](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:611>) · [scrollToItem](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:627>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:646>) · [toggleBatchSelection](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:655>) · [selectTrack](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:676>) · [appendSelectedToQueue](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:709>) · [deleteFilesFromCloud](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:717>) · [deleteSelectedFromCloud](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:723>) · [toggleSelectAll](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:762>) · [sortTracks](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:771>) · [parseSize](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:795>) · [getSortIconClass](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue:823>)

**项目内依赖：** [../components/PageScrollbar.vue](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue>)、[../components/BackToTop.vue](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue>)、[../components/CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[@/composables/useStickyDetailHeader](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js>)。

**外部/内置依赖：** `vue`、`vue3-virtual-scroller`、`vue-router`、`vue-i18n`。

**直接写出的请求地址：** `/user/cloud`、`/user/cloud/upload`、`/user/cloud/del?fileid=${fileids.join(',')}`。

**显式local/sessionStorage键：** `cloudDriveListMode`。

### src/views/Discover.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Discover.vue>)。通过路由查询参数选择发现页标签，组合新歌、新专辑、歌单和排行榜子组件。

**具名函数、方法与类：** [normalizeDiscoverTab](<D:/Project/MoeKoeMusic/src/views/Discover.vue:47>) · [handleDiscoverTabClick](<D:/Project/MoeKoeMusic/src/views/Discover.vue:65>)

**项目内依赖：** [../components/discover/DiscoverNewAlbumContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewAlbumContent.vue>)、[../components/discover/DiscoverNewSongContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue>)、[../components/discover/DiscoverPlaylistContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue>)、[../components/discover/RankingContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue>)、[../components/BackToTop.vue](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue>)。

**外部/内置依赖：** `vue`、`vue-router`。

### src/views/Home.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Home.vue>)。首页每日推荐/歌单加载、分享链接恢复；把推荐歌曲或完整列表送到常驻播放器。

**具名函数、方法与类：** [playSong](<D:/Project/MoeKoeMusic/src/views/Home.vue:58>) · [showContextMenu](<D:/Project/MoeKoeMusic/src/views/Home.vue:62>) · [handleShareRoute](<D:/Project/MoeKoeMusic/src/views/Home.vue:81>) · [recommend](<D:/Project/MoeKoeMusic/src/views/Home.vue:116>) · [playlist](<D:/Project/MoeKoeMusic/src/views/Home.vue:124>) · [privilegeSong](<D:/Project/MoeKoeMusic/src/views/Home.vue:131>) · [addAllSongsToQueue](<D:/Project/MoeKoeMusic/src/views/Home.vue:135>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../components/ContextMenu.vue](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)、[../components/BackToTop.vue](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue>)、[../components/CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../components/home/HomeRecommendations.vue](<D:/Project/MoeKoeMusic/src/components/home/HomeRecommendations.vue>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[../composables/useActivatedWatch](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/everyday/recommend`、`/top/playlist?category_id=0`、`/privilege/lite`。

### src/views/Library.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Library.vue>)。个人资料、VIP、听歌统计、关注和用户歌单；创建歌单、播放、活动和生日彩蛋。

**具名函数、方法与类：** [selectCategory](<D:/Project/MoeKoeMusic/src/views/Library.vue:217>) · [formatDuration](<D:/Project/MoeKoeMusic/src/views/Library.vue:223>) · [formatRegTime](<D:/Project/MoeKoeMusic/src/views/Library.vue:234>) · [updateProfileBackground](<D:/Project/MoeKoeMusic/src/views/Library.vue:242>) · [playSong](<D:/Project/MoeKoeMusic/src/views/Library.vue:257>) · [getUserDetails](<D:/Project/MoeKoeMusic/src/views/Library.vue:272>) · [getUserDetail](<D:/Project/MoeKoeMusic/src/views/Library.vue:288>) · [getVipInfo](<D:/Project/MoeKoeMusic/src/views/Library.vue:300>) · [getlisten](<D:/Project/MoeKoeMusic/src/views/Library.vue:313>) · [hideListenSection](<D:/Project/MoeKoeMusic/src/views/Library.vue:321>) · [getfollow](<D:/Project/MoeKoeMusic/src/views/Library.vue:327>) · [getplaylist](<D:/Project/MoeKoeMusic/src/views/Library.vue:339>) · [createPlaylist](<D:/Project/MoeKoeMusic/src/views/Library.vue:383>) · [goToArtistDetail](<D:/Project/MoeKoeMusic/src/views/Library.vue:398>) · [signIn](<D:/Project/MoeKoeMusic/src/views/Library.vue:408>) · [getVip](<D:/Project/MoeKoeMusic/src/views/Library.vue:418>) · [addAllSongsToQueue](<D:/Project/MoeKoeMusic/src/views/Library.vue:450>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[@/utils/teamEvent](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>)、[../components/BirthdayEasterEgg.vue](<D:/Project/MoeKoeMusic/src/components/BirthdayEasterEgg.vue>)、[../components/CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)。

**外部/内置依赖：** `vue`、`vue-router`、`vue-i18n`。

**直接写出的请求地址：** `/user/detail`、`/user/vip/detail`、`/user/listen`、`/user/follow`、`/user/playlist`、`/playlist/add`、`/youth/vip`、`/youth/day/vip`、`/youth/day/vip/upgrade`。

**显式local/sessionStorage键：** `t`、`like`、`collectedPlaylists`。

### src/views/LocalMusic.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue>)。File System Access 目录授权/历史，递归扫描与 music-metadata 标签读取，IndexedDB 缓存、虚拟列表和本地播放入口。

**具名函数、方法与类：** [initDB](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:270>) · [getStoreItem](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:294>) · [waitForTransaction](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:302>) · [getMusicCacheRecords](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:310>) · [getMusicCacheInfo](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:322>) · [releaseCoverUrls](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:329>) · [createRuntimeTrack](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:334>) · [sortMusicFiles](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:349>) · [applyMusicFiles](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:358>) · [loadMusicCache](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:365>) · [saveMusicCache](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:377>) · [deleteMusicCache](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:400>) · [markCoverCacheStale](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:413>) · [handleCoverError](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:433>) · [normalizeFolder](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:452>) · [normalizeFolderHistory](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:463>) · [findSameFolderIndex](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:467>) · [saveFolderHandle](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:482>) · [getFolderHistory](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:523>) · [loadFolderHistory](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:531>) · [saveFolderHistory](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:540>) · [saveLastFolderHandle](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:557>) · [loadFolderHandle](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:579>) · [checkFileSystemSupport](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:604>) · [loadLastFolder](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:613>) · [toggleFolderHistory](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:634>) · [switchFolder](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:638>) · [removeFolderHistory](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:657>) · [selectFolder](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:668>) · [refreshFolder](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:696>) · [readAudioMetadata](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:726>) · [scanDirectory](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:758>) · [scanMusicFiles](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:830>) · [getQualityInfo](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:851>) · [playSong](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:884>) · [addPlaylistToQueue](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:897>) · [searchTracks](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:921>) · [toggleListMode](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:929>) · [formatFileSize](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:935>) · [formatDuration](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:944>) · [getFileExtension](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:952>) · [scrollToTrackIndex](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:957>) · [scrollToItem](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:973>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:980>) · [toggleBatchSelection](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:994>) · [selectTrack](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:1011>) · [appendSelectedToQueue](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:1041>) · [toggleSelectAll](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:1055>) · [sortTracks](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:1064>) · [getSortIconClass](<D:/Project/MoeKoeMusic/src/views/LocalMusic.vue:1098>)

**项目内依赖：** [../components/CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../components/PageScrollbar.vue](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue>)、[../components/BackToTop.vue](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue>)、[@/composables/useStickyDetailHeader](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js>)。

**外部/内置依赖：** `vue`、`vue3-virtual-scroller`、`music-metadata`。

**显式local/sessionStorage键：** `localMusicListMode`。

### src/views/Login.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Login.vue>)。账号密码/短信/二维码登录、校验、倒计时和扫码轮询；结果写入认证 Store 并导航。

**具名函数、方法与类：** [validateField](<D:/Project/MoeKoeMusic/src/views/Login.vue:159>) · [emailLogin](<D:/Project/MoeKoeMusic/src/views/Login.vue:199>) · [sendCaptcha](<D:/Project/MoeKoeMusic/src/views/Login.vue:225>) · [phoneLogin](<D:/Project/MoeKoeMusic/src/views/Login.vue:257>) · [handleTabSwitch](<D:/Project/MoeKoeMusic/src/views/Login.vue:292>) · [getQrCode](<D:/Project/MoeKoeMusic/src/views/Login.vue:300>) · [selectAccount](<D:/Project/MoeKoeMusic/src/views/Login.vue:324>) · [backToLogin](<D:/Project/MoeKoeMusic/src/views/Login.vue:330>) · [checkQrStatus](<D:/Project/MoeKoeMusic/src/views/Login.vue:336>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)。

**外部/内置依赖：** `vue`、`vue-router`、`vue-i18n`。

**直接写出的请求地址：** `/login?username=${emailForm.email}&password=${emailForm.password}`、`/captcha/sent?mobile=${phoneForm.mobile}`、`/login/qr/key`、`/login/qr/create?key=${qrKey.value}&qrimg=true`、`/login/qr/check?key=${qrKey.value}&timestamp=${Date.now()}`。

### src/views/Lyrics.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue>)。独立桌面歌词：行/字高亮、字体颜色、锁定、拖动/缩放、穿透和悬停检测；通过 IPC 控制窗口/播放器。

**具名函数、方法与类：** [throttle](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:126>) · [setIgnoreMouseEvents](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:138>) · [getResizeDirection](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:147>) · [getResizeCursor](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:164>) · [setLyricsWindowFixedSize](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:172>) · [updateResizeCursor](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:184>) · [isMouseOnLyricsContent](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:190>) · [isScreenPointInElement](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:200>) · [isScreenPointInSelector](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:210>) · [clampColorChannel](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:222>) · [getColorContext](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:224>) · [parseHexColor](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:231>) · [parseRgbColorString](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:247>) · [resolveCssVarColor](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:258>) · [parseColorToRgb](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:271>) · [rgbToHex](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:287>) · [shiftRgb](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:289>) · [buildVerticalGradient](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:295>) · [handleColorChange](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:312>) · [persistDesktopLyricsSetting](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:322>) · [sendAction](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:329>) · [togglePlay](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:336>) · [toggleLock](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:341>) · [updateCurrentLineIndex](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:351>) · [updateDisplayedLines](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:371>) · [startDrag](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:385>) · [checkMousePosition](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:426>) · [handleMouseLeave](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:488>) · [stopHoverPolling](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:497>) · [pollHoverState](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:504>) · [startHoverPolling](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:531>) · [processLyricsData](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:554>) · [escapeFontFamily](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:573>) · [getLocalSettings](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:575>) · [loadDesktopLyricsFont](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:577>) · [handleStorageChange](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:581>) · [changeFontSize](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:586>) · [onDrag](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:606>) · [endDrag](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:661>) · [computeHighlightMetrics](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:699>) · [getLineHighlightStyle](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:754>) · [getHighlightProgress](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:764>) · [updateActiveLineScroll](<D:/Project/MoeKoeMusic/src/views/Lyrics.vue:766>)

**外部/内置依赖：** `vue`。

**IPC通道（操作:名称）：** `send:set-ignore-mouse-events`、`send:lyrics-window-fixed-size`、`send:window-drag`、`send:save-settings`、`send:desktop-lyrics-action`、`invoke:lyrics-window-pointer-state`、`on:lyrics-data`、`on:playing-status`。

**显式local/sessionStorage键：** `lyrics-default-color`、`lyrics-highlight-color`、`settings`、`lyrics-lock`、`lyrics-font-size`。

### src/views/PlaylistDetail.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>)。歌单/专辑/歌手共用详情页：分源加载、分页和虚拟列表、收藏/关注、分享、排序、批量添加删除与播放。

**具名函数、方法与类：** [updateFavoriteStatus](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:290>) · [clearBatchSelection](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:306>) · [loadData](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:373>) · [getArtistInfo](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:397>) · [getAlbumInfo](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:414>) · [formatArtistTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:436>) · [formatAlbumTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:457>) · [formatPlaylistTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:485>) · [fetchTracksPage](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:509>) · [getNormalPageSize](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:562>) · [applyTracksResult](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:564>) · [fetchArtistSongs](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:588>) · [fetchAlbumSongs](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:606>) · [fetchPlaylistTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:624>) · [loadMoreTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:642>) · [handleVirtualUpdate](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:660>) · [loadAllRemainingTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:667>) · [appendResult](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:678>) · [searchTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:718>) · [playSong](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:734>) · [loadAndAppendRemainingTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:739>) · [addPlaylistToQueue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:746>) · [toggleFollow](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:773>) · [toggleFavorite](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:795>) · [deletePlaylist](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:839>) · [sharePlaylist](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:850>) · [showContextMenu](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:856>) · [scrollToTrackIndex](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:870>) · [scrollToItem](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:887>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:907>) · [toggleDropdown](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:923>) · [toggleBatchSelection](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:928>) · [selectTrack](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:949>) · [appendSelectedToQueue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:974>) · [addSelectedToOtherPlaylist](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:983>) · [removeSelectedFromPlaylist](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:992>) · [toggleSelectAll](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1021>) · [sortTracks](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1030>) · [getSortIconClass](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1069>) · [handleSongRemoved](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1076>) · [toggleViewMode](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1082>) · [changeArtistSort](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1088>) · [isCurrentSong](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1097>) · [isCurrentPlaying](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue:1102>)

**项目内依赖：** [../components/CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../components/ContextMenu.vue](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)、[../components/PlaylistSelectModal.vue](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue>)、[../components/PageScrollbar.vue](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue>)、[../components/BackToTop.vue](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue>)、[../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[@/utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[@/composables/useStickyDetailHeader](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js>)。

**外部/内置依赖：** `vue`、`vue3-virtual-scroller`、`vue-router`、`vue-i18n`。

**直接写出的请求地址：** `/artist/detail`、`/album/detail`、`/artist/audios`、`/album/songs`、`/playlist/track/all`、`/playlist/del`、`/playlist/add`、`/playlist/tracks/del`。

**显式local/sessionStorage键：** `collectedPlaylists`、`trackViewMode`、`t`。

### src/views/Ranking.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Ranking.vue>)。独立排行榜路由的薄包装，复用 RankingContent 的数据和播放逻辑。

**项目内依赖：** [../components/discover/RankingContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue>)。

### src/views/Recognize.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Recognize.vue>)。麦克风/系统采集流、录制/解码 PCM 和歌曲识别；结果轮播、播放、收藏和添加歌单，销毁时清理媒体流。

**具名函数、方法与类：** [stopTracks](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:243>) · [clearTimer](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:245>) · [getMicDeviceLabel](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:251>) · [closeDeviceMenu](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:253>) · [updateDeviceMenuLayout](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:257>) · [toggleDeviceMenu](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:276>) · [selectMic](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:289>) · [setSource](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:294>) · [handleWindowPointerDown](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:299>) · [handleWindowResize](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:305>) · [loadMicDevices](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:310>) · [getMatchKey](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:321>) · [loopIndex](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:322>) · [clearSlideTimer](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:324>) · [endReset](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:330>) · [slideTo](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:339>) · [selectPrevious](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:355>) · [selectNext](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:359>) · [clickPrevious](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:363>) · [clickNext](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:368>) · [selectIndex](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:400>) · [startDrag](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:405>) · [moveDrag](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:418>) · [endDrag](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:426>) · [cancelDrag](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:440>) · [decodeToPCM](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:448>) · [getMicStream](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:473>) · [getSystemStream](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:487>) · [recognizeBlob](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:499>) · [startRecording](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:525>) · [stopRecording](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:565>) · [toggleRecording](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:575>) · [reset](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:580>) · [getSongHash](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:595>) · [toPlayerSong](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:597>) · [playSong](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:604>) · [addSelectedToPlaylist](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:615>) · [likeSelectedSong](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:622>) · [searchSelectedMatch](<D:/Project/MoeKoeMusic/src/views/Recognize.vue:629>)

**项目内依赖：** [@/utils/recognize](<D:/Project/MoeKoeMusic/src/utils/recognize.js>)、[@/components/PlaylistSelectModal.vue](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue>)。

**外部/内置依赖：** `vue`、`vue-router`。

### src/views/RecommendedSearch.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue>)。热搜榜、建议词、键盘高亮/选择和输入状态；提交关键词后转到 Search。

**具名函数、方法与类：** [getRouteKeyword](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:134>) · [normalizeKeyword](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:135>) · [setSuggestions](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:148>) · [normalizeBoards](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:154>) · [normalizeSuggestions](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:188>) · [fetchHotBoards](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:211>) · [fetchSuggestions](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:229>) · [getBoardKeywords](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:262>) · [medalClass](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:269>) · [shouldShowReason](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:271>) · [submitSearch](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:276>) · [selectKeyword](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:298>) · [applySuggestion](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:303>) · [clearKeyword](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:305>) · [handleSearchFocus](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:311>) · [highlightNextSuggestion](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:317>) · [highlightPrevSuggestion](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:325>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:333>) · [focusSearchInput](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue:339>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../composables/useActivatedWatch](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/search/hot`、`/search/suggest`。

### src/views/Search.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Search.vue>)。同步路由关键词/分类，调用综合或分类搜索，分页；分派歌曲播放和歌手/专辑/歌单/MV导航。

**具名函数、方法与类：** [changeSearchType](<D:/Project/MoeKoeMusic/src/views/Search.vue:100>) · [showContextMenu](<D:/Project/MoeKoeMusic/src/views/Search.vue:113>) · [syncSearchFromRoute](<D:/Project/MoeKoeMusic/src/views/Search.vue:134>) · [playSong](<D:/Project/MoeKoeMusic/src/views/Search.vue:152>) · [handleSongClick](<D:/Project/MoeKoeMusic/src/views/Search.vue:156>) · [handleComplexSongPlay](<D:/Project/MoeKoeMusic/src/views/Search.vue:165>) · [performSearch](<D:/Project/MoeKoeMusic/src/views/Search.vue:183>) · [nextPage](<D:/Project/MoeKoeMusic/src/views/Search.vue:218>) · [prevPage](<D:/Project/MoeKoeMusic/src/views/Search.vue:225>) · [goToPage](<D:/Project/MoeKoeMusic/src/views/Search.vue:271>) · [handleAlbumClick](<D:/Project/MoeKoeMusic/src/views/Search.vue:276>) · [handlePlaylistClick](<D:/Project/MoeKoeMusic/src/views/Search.vue:280>) · [handleArtistClick](<D:/Project/MoeKoeMusic/src/views/Search.vue:287>) · [handleMvClick](<D:/Project/MoeKoeMusic/src/views/Search.vue:296>) · [handleProgramClick](<D:/Project/MoeKoeMusic/src/views/Search.vue:306>)

**项目内依赖：** [../components/ContextMenu.vue](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)、[../components/CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../components/search/SongSearchList.vue](<D:/Project/MoeKoeMusic/src/components/search/SongSearchList.vue>)、[../components/search/AlbumGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/AlbumGrid.vue>)、[../components/search/PlaylistGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/PlaylistGrid.vue>)、[../components/search/ArtistGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/ArtistGrid.vue>)、[../components/search/MvGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue>)、[../components/search/ComplexSearchResults.vue](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue>)、[../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[../composables/useActivatedWatch](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/search/complex?keywords=${encodeURIComponent(searchQuery.value)}`、`/search?keywords=${encodeURIComponent(searchQuery.value)}&page=${currentPage.value}&pagesize=${pageSize.value}&type=${searchType.value}`。

### src/views/Settings.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/Settings.vue>)。渲染设置配置、执行主题/音频/网络等动作，保存 localStorage 并同步主进程；包含插件管理和重置/PWA入口。

**具名函数、方法与类：** [openShortcutSettings](<D:/Project/MoeKoeMusic/src/views/Settings.vue:224>) · [installPWA](<D:/Project/MoeKoeMusic/src/views/Settings.vue:225>) · [openOnboardingGuide](<D:/Project/MoeKoeMusic/src/views/Settings.vue:226>) · [createSelectedSettings](<D:/Project/MoeKoeMusic/src/views/Settings.vue:229>) · [isFontSelection](<D:/Project/MoeKoeMusic/src/views/Settings.vue:260>) · [updateAudioOutputDeviceDisplayText](<D:/Project/MoeKoeMusic/src/views/Settings.vue:262>) · [loadAudioOutputDevices](<D:/Project/MoeKoeMusic/src/views/Settings.vue:282>) · [loadLocalFonts](<D:/Project/MoeKoeMusic/src/views/Settings.vue:316>) · [openSelection](<D:/Project/MoeKoeMusic/src/views/Settings.vue:358>) · [openHelpLink](<D:/Project/MoeKoeMusic/src/views/Settings.vue:384>) · [getSettingItem](<D:/Project/MoeKoeMusic/src/views/Settings.vue:394>) · [getVisibleItems](<D:/Project/MoeKoeMusic/src/views/Settings.vue:402>) · [isToggleItem](<D:/Project/MoeKoeMusic/src/views/Settings.vue:404>) · [isToggleEnabled](<D:/Project/MoeKoeMusic/src/views/Settings.vue:410>) · [handleCardClick](<D:/Project/MoeKoeMusic/src/views/Settings.vue:412>) · [markRefreshHint](<D:/Project/MoeKoeMusic/src/views/Settings.vue:425>) · [shouldKeepSelectionOpen](<D:/Project/MoeKoeMusic/src/views/Settings.vue:431>) · [getUnavailableSettingText](<D:/Project/MoeKoeMusic/src/views/Settings.vue:437>) · [applyThemeColor](<D:/Project/MoeKoeMusic/src/views/Settings.vue:446>) · [applyTheme](<D:/Project/MoeKoeMusic/src/views/Settings.vue:447>) · [applyLanguage](<D:/Project/MoeKoeMusic/src/views/Settings.vue:448>) · [checkQualityAuth](<D:/Project/MoeKoeMusic/src/views/Settings.vue:452>) · [saveDpiScale](<D:/Project/MoeKoeMusic/src/views/Settings.vue:457>) · [toggleDesktopLyrics](<D:/Project/MoeKoeMusic/src/views/Settings.vue:463>) · [dispatchLoudnessNormalization](<D:/Project/MoeKoeMusic/src/views/Settings.vue:467>) · [updateAudioOutputWatch](<D:/Project/MoeKoeMusic/src/views/Settings.vue:472>) · [resetApiBaseUrl](<D:/Project/MoeKoeMusic/src/views/Settings.vue:492>) · [dispatchAudioOutputDevice](<D:/Project/MoeKoeMusic/src/views/Settings.vue:497>) · [handleLogAction](<D:/Project/MoeKoeMusic/src/views/Settings.vue:502>) · [runSelectAction](<D:/Project/MoeKoeMusic/src/views/Settings.vue:524>) · [toggleSetting](<D:/Project/MoeKoeMusic/src/views/Settings.vue:529>) · [selectOption](<D:/Project/MoeKoeMusic/src/views/Settings.vue:540>) · [selectFontOption](<D:/Project/MoeKoeMusic/src/views/Settings.vue:554>) · [isElectron](<D:/Project/MoeKoeMusic/src/views/Settings.vue:566>) · [saveSettings](<D:/Project/MoeKoeMusic/src/views/Settings.vue:569>) · [closeSelection](<D:/Project/MoeKoeMusic/src/views/Settings.vue:581>) · [testApiBaseUrl](<D:/Project/MoeKoeMusic/src/views/Settings.vue:673>) · [saveApiBaseUrl](<D:/Project/MoeKoeMusic/src/views/Settings.vue:707>) · [testProxyConnection](<D:/Project/MoeKoeMusic/src/views/Settings.vue:727>) · [saveProxy](<D:/Project/MoeKoeMusic/src/views/Settings.vue:796>) · [openOnboardingGuide](<D:/Project/MoeKoeMusic/src/views/Settings.vue:828>) · [openShortcutSettings](<D:/Project/MoeKoeMusic/src/views/Settings.vue:834>) · [closeShortcutSettings](<D:/Project/MoeKoeMusic/src/views/Settings.vue:838>) · [displayShortcut](<D:/Project/MoeKoeMusic/src/views/Settings.vue:843>) · [startRecording](<D:/Project/MoeKoeMusic/src/views/Settings.vue:872>) · [recordShortcut](<D:/Project/MoeKoeMusic/src/views/Settings.vue:878>) · [validateShortcut](<D:/Project/MoeKoeMusic/src/views/Settings.vue:963>) · [saveShortcuts](<D:/Project/MoeKoeMusic/src/views/Settings.vue:969>) · [clearShortcut](<D:/Project/MoeKoeMusic/src/views/Settings.vue:1003>) · [openResetConfirmation](<D:/Project/MoeKoeMusic/src/views/Settings.vue:1009>) · [installPWA](<D:/Project/MoeKoeMusic/src/views/Settings.vue:1026>)

**项目内依赖：** [../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[@/components/ExtensionManager.vue](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[@/utils/apiBaseUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js>)、[@/config/settings](<D:/Project/MoeKoeMusic/src/config/settings.js>)、[@/config/onboardingGuide](<D:/Project/MoeKoeMusic/src/config/onboardingGuide.js>)。

**外部/内置依赖：** `vue`、`vue-i18n`。

**直接写出的请求地址：** `https://api.ipify.org?format=json`。

**IPC通道（操作:名称）：** `send:open-url`、`send:desktop-lyrics-action`、`send:save-settings`、`send:custom-shortcut`、`send:clear-settings`。

**显式local/sessionStorage键：** `settings`、`version`。

### src/views/VideoPlayer.vue

[打开源码](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue>)。从路由 hash 请求 video/url，控制视频加载、错误、重试和返回/关闭。

**具名函数、方法与类：** [fetchVideoUrl](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue:54>) · [retryLoad](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue:98>) · [handleVideoLoaded](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue:102>) · [handleVideoError](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue:106>) · [goBack](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue:110>) · [closeWindow](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue:114>) · [handleBackAction](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue:118>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/video/url`。

## Vue通用组件

### src/components/AppUpdateDialog.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue>)。上一轮改动：显示主进程更新快照和事件，处理检查/重启安装及手动入口；不支持的环境通过 Releases API显示提示。

**具名函数、方法与类：** [setShowNewBadge](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue:64>) · [applyUpdateState](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue:69>) · [fetchLatestVersion](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue:84>) · [closeUpdateDialog](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue:112>) · [openManualUpdatePage](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue:113>) · [handleEntryClick](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue:114>) · [startOnlineUpdate](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue:120>)

**项目内依赖：** [./MarkdownContent.vue](<D:/Project/MoeKoeMusic/src/components/MarkdownContent.vue>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[../utils/appUpdate](<D:/Project/MoeKoeMusic/src/utils/appUpdate.js>)。

**外部/内置依赖：** `vue`。

**直接写出的请求地址：** `https://api.github.com/repos/MoeKoeMusic/MoeKoeMusic/releases/latest`。

### src/components/BackToTop.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue>)。观察滚动容器并显示返回顶部按钮，绑定/解绑时更新可见性。

**具名函数、方法与类：** [syncVisible](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue:28>) · [bind](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue:32>) · [unbind](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue:43>) · [scrollToTop](<D:/Project/MoeKoeMusic/src/components/BackToTop.vue:48>)

**外部/内置依赖：** `vue`、`vue-i18n`。

### src/components/BirthdayEasterEgg.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/BirthdayEasterEgg.vue>)。根据生日条件展示彩蛋，加载 confetti、执行动画和音乐播放尝试。

**具名函数、方法与类：** [parseMonthDay](<D:/Project/MoeKoeMusic/src/components/BirthdayEasterEgg.vue:42>) · [loadConfetti](<D:/Project/MoeKoeMusic/src/components/BirthdayEasterEgg.vue:61>) · [fireConfettiFromBottom](<D:/Project/MoeKoeMusic/src/components/BirthdayEasterEgg.vue:85>) · [tryAutoPlay](<D:/Project/MoeKoeMusic/src/components/BirthdayEasterEgg.vue:108>) · [playIntroOnce](<D:/Project/MoeKoeMusic/src/components/BirthdayEasterEgg.vue:117>)

**外部/内置依赖：** `vue`。

### src/components/CommonSkeleton.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)。通用加载骨架模板和样式；按 props 展示不同页面占位布局，没有接口请求。

### src/components/ContextMenu.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)。歌曲右键菜单：分享、播放 MV、下一首、添加/移出歌单；管理菜单位置、用户歌单和外部点击。

**具名函数、方法与类：** [adjustMenuPosition](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:50>) · [openContextMenu](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:64>) · [hideContextMenu](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:74>) · [fetchPlaylists](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:79>) · [shareSong](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:95>) · [addToPlaylist](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:102>) · [cancel](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:112>) · [addToNext](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:129>) · [hideSubMenu](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:136>) · [playMV](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:141>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue:153>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[@/utils/i18n](<D:/Project/MoeKoeMusic/src/utils/i18n.js>)、[@/utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/user/playlist`、`/playlist/tracks/add?listid=${listid}&data=${encodeURIComponent(song.OriSongName.replace(',', ''))}&#124;${song.FileHash}`、`/playlist/tracks/del?listid=${listId.value}&fileids=${contextSong.value.fileid}`。

### src/components/CustomModal.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue>)。alert/confirm/prompt/loading 弹窗实现，规范化配置并暴露 Promise 操作给 ModalPlugin。

**具名函数、方法与类：** [normalizeModalConfig](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:68>) · [applyModalSize](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:74>) · [customAlert](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:82>) · [confirmAlert](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:92>) · [customConfirm](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:99>) · [confirmAction](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:112>) · [customPrompt](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:119>) · [submitPrompt](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:134>) · [closePrompt](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:139>) · [showCustomLoading](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:144>) · [hideCustomLoading](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue:148>)

**项目内依赖：** [@/utils/i18n](<D:/Project/MoeKoeMusic/src/utils/i18n.js>)。

**外部/内置依赖：** `vue`。

### src/components/Disclaimer.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/Disclaimer.vue>)。免责声明界面；桌面接收 show-disclaimer 并通过 IPC反馈，网页使用本地记录。

**具名函数、方法与类：** [isElectron](<D:/Project/MoeKoeMusic/src/components/Disclaimer.vue:32>) · [agree](<D:/Project/MoeKoeMusic/src/components/Disclaimer.vue:35>) · [disagree](<D:/Project/MoeKoeMusic/src/components/Disclaimer.vue:44>)

**项目内依赖：** [../config/disclaimer](<D:/Project/MoeKoeMusic/src/config/disclaimer.js>)。

**外部/内置依赖：** `vue`。

**IPC通道（操作:名称）：** `on:show-disclaimer`、`send:disclaimer-response`。

**显式local/sessionStorage键：** `disclaimerAccepted`。

### src/components/ExtensionManager.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue>)。桌面扩展管理/市场界面：列表、ZIP/URL安装、卸载、弹窗、权限/Native Host授权、最低版本提示。

**具名函数、方法与类：** [refreshExtensions](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:329>) · [fetchMarketPlugins](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:353>) · [normalizeMarketPayload](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:387>) · [normalizeMarketPlugin](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:399>) · [normalizeUrl](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:439>) · [findInstalledExtension](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:457>) · [compareVersions](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:468>) · [tokenizeVersion](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:495>) · [isCurrentAppVersionLowerThanMin](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:502>) · [resolveNativeHostBadge](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:513>) · [resolveMarketPermissions](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:529>) · [toggleNativeHostAuthorization](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:560>) · [buildNativeHostAuthorizationMessage](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:590>) · [resolveMarketState](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:604>) · [handleMarketInstall](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:647>) · [openExtensionsDir](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:686>) · [openPluginsRepo](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:697>) · [openExtensionPopup](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:701>) · [uninstallExtension](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:712>) · [handleIconError](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:730>) · [handleMarketIconError](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:740>) · [installPlugin](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:750>) · [handlePluginInstall](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:767>) · [showAlert](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:784>) · [showConfirm](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:788>) · [isElectron](<D:/Project/MoeKoeMusic/src/components/ExtensionManager.vue:792>)

**外部/内置依赖：** `vue`、`vue-i18n`。

**显式local/sessionStorage键：** `version`。

### src/components/FullscreenLyricsSettings.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue>)。全屏歌词设置面板：布局/背景/显示选项规范化，通过组件事件通知播放器。

**具名函数、方法与类：** [default](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue:97>) · [normalizeSettings](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue:143>) · [openPanel](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue:153>) · [closePanel](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue:157>) · [handleFocusOut](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue:161>) · [updateSetting](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue:165>)

**外部/内置依赖：** `vue`、`vue-i18n`。

### src/components/Header.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/Header.vue>)。顶部导航、前后退/刷新、搜索、用户资料/登出、免责声明和更新入口；接收主进程版本。

**具名函数、方法与类：** [Disclaimer](<D:/Project/MoeKoeMusic/src/components/Header.vue:125>) · [updateNavigationStatus](<D:/Project/MoeKoeMusic/src/components/Header.vue:129>) · [goBack](<D:/Project/MoeKoeMusic/src/components/Header.vue:134>) · [goForward](<D:/Project/MoeKoeMusic/src/components/Header.vue:142>) · [refreshPage](<D:/Project/MoeKoeMusic/src/components/Header.vue:150>) · [logout](<D:/Project/MoeKoeMusic/src/components/Header.vue:154>) · [toggleProfile](<D:/Project/MoeKoeMusic/src/components/Header.vue:162>) · [getSearch](<D:/Project/MoeKoeMusic/src/components/Header.vue:166>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/components/Header.vue:198>) · [handleUpdateEntryClick](<D:/Project/MoeKoeMusic/src/components/Header.vue:205>)

**项目内依赖：** [../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[./AppUpdateDialog.vue](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue>)、[../config/disclaimer](<D:/Project/MoeKoeMusic/src/config/disclaimer.js>)。

**外部/内置依赖：** `vue`、`vue-router`、`vue-i18n`。

**IPC通道（操作:名称）：** `on:version`。

**显式local/sessionStorage键：** `version`、`settings`。

### src/components/MarkdownContent.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/MarkdownContent.vue>)。项目自实现的 Markdown 块/行内解析器，渲染链接、代码、列表等；用于发布说明等内容。

**具名函数、方法与类：** [parseMarkdownBlocks](<D:/Project/MoeKoeMusic/src/components/MarkdownContent.vue:70>) · [tokenizeMarkdownInline](<D:/Project/MoeKoeMusic/src/components/MarkdownContent.vue:155>) · [tokenComponent](<D:/Project/MoeKoeMusic/src/components/MarkdownContent.vue:190>) · [tokenProps](<D:/Project/MoeKoeMusic/src/components/MarkdownContent.vue:197>) · [onClick](<D:/Project/MoeKoeMusic/src/components/MarkdownContent.vue:203>)

**项目内依赖：** [../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)。

**外部/内置依赖：** `vue`。

### src/components/MessageNotification.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue>)。toast 消息队列、类型样式、自动移除与动画；由 MessagePlugin 调用。

**具名函数、方法与类：** [addMessage](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue:25>) · [removeMessage](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue:38>) · [success](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue:55>) · [error](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue:56>) · [warning](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue:57>) · [info](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue:58>)

**外部/内置依赖：** `vue`。

### src/components/OnboardingGuide.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue>)。按配置定位目标并展示新手引导；控制进度、路由条件、滚动、遮罩、观察器和完成记录。

**具名函数、方法与类：** [getCenteredCardRect](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:109>) · [isOverlapping](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:120>) · [getMascotPosition](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:127>) · [updateViewportSize](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:168>) · [isTargetInViewport](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:175>) · [scrollTargetIntoView](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:201>) · [refreshTarget](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:218>) · [refreshAfterRender](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:253>) · [skipCurrentStep](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:258>) · [previousStep](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:268>) · [nextStep](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:273>) · [skip](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:286>) · [handleKeydown](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:290>) · [getGuideStorageKey](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:296>) · [isGuideCompleted](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:300>) · [isGuideIntroCompleted](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:304>) · [completeGuideIntro](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:308>) · [getGuideStartIndex](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:312>) · [resetOnboardingGuideStorage](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:316>) · [matchesRoute](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:323>) · [isTriggerReady](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:330>) · [getPendingGuideForCurrentRoute](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:335>) · [findGuideByKey](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:339>) · [findNextGuide](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:343>) · [openOnboardingGuide](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:350>) · [syncMutationObserver](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:359>) · [scheduleGuideCheck](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:374>) · [completeOnboardingGuide](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:384>) · [handleOpenGuideEvent](<D:/Project/MoeKoeMusic/src/components/OnboardingGuide.vue:397>)

**项目内依赖：** [@/config/onboardingGuide](<D:/Project/MoeKoeMusic/src/config/onboardingGuide.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

### src/components/PageScrollbar.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue>)。虚拟/自定义滚动条：测量滚动范围，跟随内容变化，拖动和轨道点击滚动，清理事件。

**具名函数、方法与类：** [scheduleHide](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:51>) · [reveal](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:58>) · [sync](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:63>) · [requestSync](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:80>) · [measure](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:89>) · [remeasure](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:101>) · [onScroll](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:103>) · [dragTo](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:108>) · [onPointerMove](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:116>) · [stopDrag](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:118>) · [startDrag](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:127>) · [onThumbPointerDown](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:136>) · [onTrackPointerDown](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:144>) · [unbind](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:156>) · [bind](<D:/Project/MoeKoeMusic/src/components/PageScrollbar.vue:163>)

**外部/内置依赖：** `vue`。

### src/components/PlayerControl.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue>)。播放器协调中心和 UI：组合 Audio/队列/歌词/模式/媒体会话；处理切歌、状态恢复、音质、全屏歌词、系统控制与设置事件。

**具名函数、方法与类：** [escapeFontFamily](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:322>) · [isCurrentQualityOption](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:375>) · [toggleQualityMenu](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:378>) · [switchQuality](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:383>) · [onSongEnd](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:426>) · [isCurrentLyricsLine](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:570>) · [getCurrentLineIndex](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:573>) · [resetTrackTimeline](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:598>) · [normalizeLyricsCoverImageUrl](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:616>) · [collectLyricsCoverImageUrls](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:621>) · [visit](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:623>) · [extractLyricsCoverImages](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:653>) · [stopLyricsBackgroundCarousel](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:672>) · [startLyricsBackgroundCarousel](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:679>) · [loadLyricsCoverImages](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:695>) · [handleAutoSwitch](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:728>) · [clearAutoSwitchTimer](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:746>) · [getCurrentLyrics](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:771>) · [retryMissingLyrics](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:798>) · [handleFullscreenLyricsSettingsChange](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:837>) · [switchLyricsMode](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:851>) · [toggleCoverMode](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:856>) · [isBlobUrl](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:861>) · [isLocalSong](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:863>) · [toPlayerSong](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:865>) · [playSong](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:872>) · [resumePlayback](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:977>) · [togglePlayPause](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1054>) · [playSongFromQueue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1065>) · [handleRandomPlayback](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1182>) · [setVolumeOnClick](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1244>) · [onDragStart](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1255>) · [onDrag](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1264>) · [onDragEnd](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1275>) · [handleVolumeScroll](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1283>) · [handleLyricsWheel](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1292>) · [handleWindowResize](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1317>) · [handleLyricsClick](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1330>) · [copyLyricsToClipboard](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1347>) · [handleKeyDown](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1374>) · [setupMediaShortcuts](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1403>) · [toggleMute](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1448>) · [pausePlayback](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1457>) · [setupAudioOutputDeviceWatcher](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1474>) · [setAudioOutputDeviceWatcherEnabled](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1517>) · [applyAudioOutputDevice](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1529>) · [toggleSpeedMenu](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1546>) · [changePlaybackSpeed](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1551>) · [handleDocumentClick](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1562>) · [syncDesktopLyricsFont](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1574>) · [handleSettingsChange](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1578>) · [searchSong](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1583>) · [handleLoudnessChange](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1620>) · [playPrevious](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1674>) · [playNext](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1675>) · [seekBackward](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1676>) · [seekForward](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1683>) · [seekTo](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1690>) · [pause](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1821>) · [addSongToQueue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1824>) · [addLocalMusicToQueue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1839>) · [addLocalPlaylistToQueue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1856>) · [addPlaylistToQueue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1886>) · [addCloudMusicToQueue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1916>) · [addCloudPlaylistToQueue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1931>) · [onQueueSongAdd](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1964>) · [onQueueCloudSongAdd](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1979>) · [onQueueLocalSongAdd](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue:1992>)

**项目内依赖：** [../stores/musicQueue](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js>)、[./PlaylistSelectModal.vue](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue>)、[./QueueList.vue](<D:/Project/MoeKoeMusic/src/components/QueueList.vue>)、[./FullscreenLyricsSettings.vue](<D:/Project/MoeKoeMusic/src/components/FullscreenLyricsSettings.vue>)、[../utils/utils](<D:/Project/MoeKoeMusic/src/utils/utils.js>)、[../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[@/utils/teamEvent](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>)、[./player](<D:/Project/MoeKoeMusic/src/components/player/index.js>)。

**外部/内置依赖：** `vue`、`vue-i18n`、`vue-router`。

**直接写出的请求地址：** `/images?hash=${encodeURIComponent(hash)}`。

**IPC通道（操作:名称）：** `send:lyrics-data`、`send:server-lyrics`、`send:update-current-lyrics`、`on:play-previous-track`、`on:play-next-track`、`on:volume-up`、`on:volume-down`、`on:toggle-play-pause`、`on:toggle-mute`、`on:toggle-like`、`on:toggle-mode`、`on:url-params`、`send:play-pause-action`、`removeAllListeners:play-previous-track`、`removeAllListeners:play-next-track`、`removeAllListeners:volume-up`、`removeAllListeners:volume-down`、`removeAllListeners:toggle-play-pause`、`removeAllListeners:toggle-mute`、`removeAllListeners:toggle-like`、`removeAllListeners:toggle-mode`。

**显式local/sessionStorage键：** `lyrics-cover-mode`、`settings`、`player_progress`、`current_song`、`player_volume`、`player_speed`。

### src/components/PlaylistSelectModal.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue>)。歌曲收藏/添加歌单弹窗：验证用户和歌曲，查询用户歌单，提交 tracks/add，更新喜欢状态。

**具名函数、方法与类：** [default](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue:37>) · [validateUserAndSong](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue:43>) · [fetchPlaylists](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue:68>) · [addToPlaylist](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue:87>) · [toLike](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue:104>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)。

**外部/内置依赖：** `vue`、`vue-i18n`。

**直接写出的请求地址：** `/user/playlist`、`/playlist/tracks/add?listid=${listid}&data=${song_data}`。

**显式local/sessionStorage键：** `like`。

### src/components/QueueList.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/QueueList.vue>)。虚拟化播放队列列表，删除歌曲、选择在线/云盘/本地播放入口、开关和点击外部关闭。

**具名函数、方法与类：** [isLocalSong](<D:/Project/MoeKoeMusic/src/components/QueueList.vue:54>) · [removeSongFromQueue](<D:/Project/MoeKoeMusic/src/components/QueueList.vue:57>) · [playQueueItem](<D:/Project/MoeKoeMusic/src/components/QueueList.vue:67>) · [openQueue](<D:/Project/MoeKoeMusic/src/components/QueueList.vue:83>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/components/QueueList.vue:94>)

**项目内依赖：** [../stores/musicQueue](<D:/Project/MoeKoeMusic/src/stores/musicQueue.js>)。

**外部/内置依赖：** `vue`、`vue3-virtual-scroller`、`vue3-virtual-scroller/dist/vue3-virtual-scroller.css`。

### src/components/RiskVerifyModal.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue>)。风控验证界面：加载验证方式与腾讯验证码、提交短信/验证结果，向调用者反馈成功或取消。

**具名函数、方法与类：** [normalizeResult](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:74>) · [loadTencentCaptcha](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:79>) · [openTencentCaptcha](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:112>) · [loadVerifyInfo](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:138>) · [submitVerify](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:147>) · [submitTencent](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:165>) · [success](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:190>) · [cancelWith](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:197>) · [startVerify](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:204>) · [submitSms](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:239>) · [cancel](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue:260>)

**外部/内置依赖：** `vue`。

### src/components/SidebarNavigation.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue>)。侧边导航与用户歌单列表，折叠状态、搜索、用户菜单和更新入口；是 Header 的替代布局。

**具名函数、方法与类：** [updateNavigationStatus](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:192>) · [goBack](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:197>) · [goForward](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:205>) · [refreshPage](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:213>) · [emitSidebarWidth](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:217>) · [toggleCollapse](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:223>) · [getSearch](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:229>) · [getPlaylistTo](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:259>) · [isActivePlaylist](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:267>) · [getplaylist](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:278>) · [toggleProfile](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:319>) · [logout](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:323>) · [Disclaimer](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:331>) · [handleClickOutside](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:335>) · [handleUpdateEntryClick](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue:342>)

**项目内依赖：** [../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[./AppUpdateDialog.vue](<D:/Project/MoeKoeMusic/src/components/AppUpdateDialog.vue>)、[../config/disclaimer](<D:/Project/MoeKoeMusic/src/config/disclaimer.js>)。

**外部/内置依赖：** `vue`、`vue-router`、`vue-i18n`。

**直接写出的请求地址：** `/user/playlist`。

**IPC通道（操作:名称）：** `on:version`。

**显式local/sessionStorage键：** `sidebarCollapsed`、`settings`、`t`、`like`、`collectedPlaylists`、`version`。

### src/components/StatusBarLyrics.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue>)。在 Canvas 绘制 macOS 状态栏歌词/图标，处理长文本滚动，并经 IPC发送图片给主进程。

**具名函数、方法与类：** [clearScrollState](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:34>) · [renderFrameWithOffset](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:47>) · [startMarqueeAnimation](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:140>) · [animate](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:145>) · [getTextWidth](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:173>) · [updateStatusBarImage](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:185>) · [initLogo](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:223>) · [initStatusBar](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:234>) · [handler](<D:/Project/MoeKoeMusic/src/components/StatusBarLyrics.vue:248>)

**外部/内置依赖：** `vue`。

**IPC通道（操作:名称）：** `send:update-statusbar-image`、`removeAllListeners:generate-statusbar-image`、`on:generate-statusbar-image`、`removeListener:generate-statusbar-image`。

### src/components/TeamEvent.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/TeamEvent.vue>)。组队活动弹窗展示和交互，读取传入状态、调用传入操作并处理关闭动画。

**具名函数、方法与类：** [closeWithAnimation](<D:/Project/MoeKoeMusic/src/components/TeamEvent.vue:16>)

**项目内依赖：** [@/stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)。

**外部/内置依赖：** `vue`。

### src/components/TitleBar.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/TitleBar.vue>)。自定义窗口标题栏按钮，发送 close/minimize/maximize 的 window-control IPC。

**具名函数、方法与类：** [closeWindow](<D:/Project/MoeKoeMusic/src/components/TitleBar.vue:14>) · [minimizeWindow](<D:/Project/MoeKoeMusic/src/components/TitleBar.vue:15>) · [maximizeWindow](<D:/Project/MoeKoeMusic/src/components/TitleBar.vue:16>)

**IPC通道（操作:名称）：** `send:window-control`。

## 播放器逻辑模块

### src/components/player/AudioController.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js>)。创建唯一 Audio 和响应式音频状态，音量平方映射、可选 Web Audio 增益/响度规格化、播放速度和事件清理。

**具名函数、方法与类：** [useAudioController](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:3>) · [sliderToAmplitude](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:15>) · [amplitudeToSlider](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:16>) · [initWebAudio](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:27>) · [applyLoudnessNormalization](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:75>) · [ensureAudioContextRunning](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:151>) · [toggleLoudnessNormalization](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:185>) · [initAudio](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:212>) · [handleAudioEvent](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:242>) · [togglePlayPause](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:255>) · [toggleMute](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:276>) · [changeVolume](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:289>) · [setCurrentTime](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:298>) · [setPlaybackRate](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:304>) · [destroy](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js:312>)

**外部/内置依赖：** `vue`。

**IPC通道（操作:名称）：** `send:play-pause-action`。

**显式local/sessionStorage键：** `settings`、`player_volume`、`player_speed`。

### src/components/player/AudioOutput.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/AudioOutput.js>)。设置 Audio 的 sinkId，处理默认设备、API 不支持、设备相同和切换失败。

**具名函数、方法与类：** [setAudioOutputDevice](<D:/Project/MoeKoeMusic/src/components/player/AudioOutput.js:1>)

### src/components/player/ClimaxPoints.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/ClimaxPoints.js>)。归一化高潮点，提供缓存和失效控制，防止切歌后旧请求污染当前进度信息。

**具名函数、方法与类：** [normalizeClimaxPoints](<D:/Project/MoeKoeMusic/src/components/player/ClimaxPoints.js:1>) · [createClimaxPointLoader](<D:/Project/MoeKoeMusic/src/components/player/ClimaxPoints.js:24>) · [invalidate](<D:/Project/MoeKoeMusic/src/components/player/ClimaxPoints.js:27>) · [load](<D:/Project/MoeKoeMusic/src/components/player/ClimaxPoints.js:31>)

### src/components/player/Helpers.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js>)。环境检测、焦点判断、键盘/滚轮操作、桌面歌词切换、节流及每日 VIP 请求辅助。

**具名函数、方法与类：** [useHelpers](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:6>) · [isElectron](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:10>) · [handleVolumeScroll](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:15>) · [checkFocus](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:23>) · [handleKeyDown](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:28>) · [desktopLyrics](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:51>) · [throttle](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:64>) · [getVip](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js:76>)

**项目内依赖：** [../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)。

**外部/内置依赖：** `vue`。

**直接写出的请求地址：** `/youth/day/vip`、`/youth/day/vip/upgrade`。

**IPC通道（操作:名称）：** `send:desktop-lyrics-action`、`send:save-settings`。

**显式local/sessionStorage键：** `settings`、`lastVipRequestDate`。

### src/components/player/LyricsHandler.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js>)。在线歌词搜索/下载、KRC 文本解析、原文/翻译/音译模式、逐行/逐字定位与滚动高亮。

**具名函数、方法与类：** [useLyricsHandler](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:4>) · [isLocalHash](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:13>) · [toggleLyrics](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:16>) · [getLyrics](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:39>) · [parseLyrics](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:82>) · [toggleLyricsMode](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:196>) · [centerFirstLine](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:202>) · [scrollToCurrentLine](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:213>) · [highlightCurrentChar](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:231>) · [resetLyricsHighlight](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:287>) · [getCurrentLineIndex](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:318>) · [getCurrentLineText](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js:338>)

**项目内依赖：** [../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)。

**外部/内置依赖：** `vue`。

**直接写出的请求地址：** `/search/lyric?hash=${hash}`、`/lyric?id=${lyricSearchResponse.candidates[0].id}&accesskey=${lyricSearchResponse.candidates[0].accesskey}&fmt=krc&decode=true`。

**显式local/sessionStorage键：** `settings`。

### src/components/player/MediaSession.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js>)。系统媒体会话操作回调、歌曲 metadata 和播放时间轴；使用 navigator.mediaSession。

**具名函数、方法与类：** [useMediaSession](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js:1>) · [initMediaSession](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js:3>) · [changeMediaSession](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js:40>) · [checkImageAccessibility](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js:44>) · [updateMediaSession](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js:53>) · [updatePositionState](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js:71>) · [clearPositionState](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js:89>)

### src/components/player/PlaybackMode.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/PlaybackMode.js>)。随机/列表循环/单曲循环/顺序模式及随机历史栈，保存并恢复播放模式。

**具名函数、方法与类：** [usePlaybackMode](<D:/Project/MoeKoeMusic/src/components/player/PlaybackMode.js:3>) · [initPlaybackMode](<D:/Project/MoeKoeMusic/src/components/player/PlaybackMode.js:17>) · [setPlaybackMode](<D:/Project/MoeKoeMusic/src/components/player/PlaybackMode.js:24>) · [togglePlaybackMode](<D:/Project/MoeKoeMusic/src/components/player/PlaybackMode.js:34>)

**外部/内置依赖：** `vue`。

**显式local/sessionStorage键：** `player_playback_mode`。

### src/components/player/ProgressBar.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js>)。进度、格式化时间、seek 拖动/点击、鼠标时间提示和高潮点加载。

**具名函数、方法与类：** [useProgressBar](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:5>) · [formatTime](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:17>) · [clearMusicHighlights](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:25>) · [getMusicHighlights](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:30>) · [getDuration](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:37>) · [onProgressDragStart](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:46>) · [onProgressDrag](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:71>) · [onProgressDragEnd](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:87>) · [updateProgressFromEvent](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:107>) · [updateTimeTooltip](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:124>) · [hideTimeTooltip](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js:148>)

**项目内依赖：** [../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[./ClimaxPoints](<D:/Project/MoeKoeMusic/src/components/player/ClimaxPoints.js>)。

**外部/内置依赖：** `vue`。

**直接写出的请求地址：** `/song/climax?hash=${hash}`。

### src/components/player/SongQueue.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/SongQueue.js>)。组合三种队列来源，保存当前歌曲和优先下一首列表，并暴露统一队列操作。

**具名函数、方法与类：** [useSongQueue](<D:/Project/MoeKoeMusic/src/components/player/SongQueue.js:6>) · [addToNext](<D:/Project/MoeKoeMusic/src/components/player/SongQueue.js:26>)

**项目内依赖：** [./songQueue/OnlineMusicQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js>)、[./songQueue/CloudMusicQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/CloudMusicQueue.js>)、[./songQueue/LocalMusicQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js>)。

**外部/内置依赖：** `vue`。

### src/components/player/index.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/index.js>)。播放器模块的集中导出入口，PlayerControl 从这里导入各逻辑模块。

**项目内依赖：** [./AudioController](<D:/Project/MoeKoeMusic/src/components/player/AudioController.js>)、[./LyricsHandler](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js>)、[./ProgressBar](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js>)、[./PlaybackMode](<D:/Project/MoeKoeMusic/src/components/player/PlaybackMode.js>)、[./MediaSession](<D:/Project/MoeKoeMusic/src/components/player/MediaSession.js>)、[./SongQueue](<D:/Project/MoeKoeMusic/src/components/player/SongQueue.js>)、[./Helpers](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js>)、[./AudioOutput](<D:/Project/MoeKoeMusic/src/components/player/AudioOutput.js>)。

### src/components/player/songQueue/CloudMusicQueue.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/songQueue/CloudMusicQueue.js>)。云盘播放地址查询、isCloud 标记、队列去重和批量追加。

**具名函数、方法与类：** [useCloudMusicQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/CloudMusicQueue.js:3>) · [addCloudMusicToQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/CloudMusicQueue.js:5>) · [addCloudPlaylistToQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/CloudMusicQueue.js:88>)

**项目内依赖：** [../../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)。

**直接写出的请求地址：** `/user/cloud/url`。

**IPC通道（操作:名称）：** `send:set-tray-title`。

**显式local/sessionStorage键：** `player_progress`。

### src/components/player/songQueue/LocalMusicQueue.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js>)。本地 File/句柄恢复及授权、封面读取、blob URL、IndexedDB 保存和 isLocal 队列归一化。

**具名函数、方法与类：** [getLocalSongHash](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:4>) · [isLocalFile](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:10>) · [getLocalSongCover](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:12>) · [openLocalMusicDB](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:24>) · [getLocalStoreItem](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:47>) · [putLocalStoreItem](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:58>) · [saveLocalSongHandle](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:69>) · [getFileFromHandle](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:86>) · [resolveLocalSongFile](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:102>) · [readLocalSongCover](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:118>) · [useLocalMusicQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:132>) · [restoreLocalSongCover](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:133>) · [addLocalMusicToQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:144>) · [addLocalPlaylistToQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/LocalMusicQueue.js:229>)

**外部/内置依赖：** `vue`、`music-metadata`。

**IPC通道（操作:名称）：** `send:set-tray-title`。

**显式local/sessionStorage键：** `player_progress`。

### src/components/player/songQueue/OnlineMusicQueue.js

[打开源码](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js>)。在线音质与权限查询、播放 URL 候选回退、请求竞争控制、在线歌曲/歌单队列归一化。

**具名函数、方法与类：** [normalizeQuality](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:15>) · [getFallbackChain](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:19>) · [getQualityLabel](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:21>) · [getPrivilegeVariants](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:23>) · [getQualityOptions](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:36>) · [getPrivilegeCandidates](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:51>) · [useOnlineMusicQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:72>) · [addSongToQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:76>) · [isStaleRequest](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:79>) · [getPlaylistAllSongs](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:273>) · [addPlaylistToQueue](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:296>) · [privilegeSong](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js:330>)

**项目内依赖：** [../../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../../../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)。

**直接写出的请求地址：** `/song/url`、`/privilege/lite`。

**IPC通道（操作:名称）：** `send:set-tray-title`。

**显式local/sessionStorage键：** `settings`、`player_progress`。

## 发现、首页和搜索子组件

### src/components/discover/DiscoverNewAlbumContent.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewAlbumContent.vue>)。新专辑分类数据加载、归一化展示和详情导航，激活时按路由同步。

**具名函数、方法与类：** [normalizeAlbumType](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewAlbumContent.vue:72>) · [getAlbumListFromResponse](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewAlbumContent.vue:77>) · [fetchNewAlbums](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewAlbumContent.vue:85>) · [selectAlbumType](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewAlbumContent.vue:101>)

**项目内依赖：** [../CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../../composables/useActivatedWatch](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/top/album`。

### src/components/discover/DiscoverNewSongContent.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue>)。新歌分页、字段转成搜索歌曲结构、右键菜单及播放器入口。

**具名函数、方法与类：** [normalizePage](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:65>) · [buildPageNumbers](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:70>) · [getAuthorNames](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:102>) · [mapNewSongToSearchSong](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:107>) · [fetchNewSongs](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:131>) · [updateSongPageQuery](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:152>) · [playSong](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:167>) · [showContextMenu](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:171>) · [handleSongClick](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:180>) · [goToSongPage](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:189>) · [nextSongPage](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:195>) · [prevSongPage](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue:201>)

**项目内依赖：** [../CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../ContextMenu.vue](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)、[../search/SongSearchList.vue](<D:/Project/MoeKoeMusic/src/components/search/SongSearchList.vue>)、[../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../../composables/useActivatedWatch](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/top/song`。

### src/components/discover/DiscoverPlaylistContent.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue>)。歌单标签和分类列表，路由选择同步与标签指示器测量。

**具名函数、方法与类：** [normalizeIndex](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:76>) · [fetchPlaylistTags](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:82>) · [fetchPlaylistList](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:89>) · [syncSelectionFromRoute](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:96>) · [ensurePlaylistData](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:109>) · [updatePlaylistQuery](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:122>) · [selectMainCategory](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:134>) · [selectSubCategory](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:141>) · [updateMainCategoryIndicator](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue:148>)

**项目内依赖：** [../CommonSkeleton.vue](<D:/Project/MoeKoeMusic/src/components/CommonSkeleton.vue>)、[../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[../../composables/useActivatedWatch](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js>)。

**外部/内置依赖：** `vue`、`vue-router`。

**直接写出的请求地址：** `/playlist/tags`、`/top/playlist?withsong=0&category_id=${tagId.value}`。

### src/components/discover/RankingContent.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue>)。排行榜集合/选择保存、各榜单歌曲分页、随机推荐和批量播放。

**具名函数、方法与类：** [updateRankSelectorHeight](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:117>) · [toggleRankSelector](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:147>) · [saveSelectedRanks](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:152>) · [initRankPagination](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:156>) · [loadRankSongs](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:166>) · [loadSelectedRanks](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:195>) · [loadRandomRanks](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:207>) · [toggleRank](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:219>) · [formatIntro](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:237>) · [playRankSongs](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:249>) · [handleScroll](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:262>) · [handlePlayClick](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue:280>)

**项目内依赖：** [../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)。

**外部/内置依赖：** `vue`。

**直接写出的请求地址：** `/rank/audio?rankid=${rankId}&page=${page}&pagesize=${pagesize}`、`/rank/list`。

**显式local/sessionStorage键：** `selectedRankIds`。

### src/components/home/HomeRecommendations.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/home/HomeRecommendations.vue>)。首页精选推荐卡片、推荐样式/模式切换和推荐列表播放。

**具名函数、方法与类：** [toggleMode](<D:/Project/MoeKoeMusic/src/components/home/HomeRecommendations.vue:157>) · [toggleRecommendCardStyle](<D:/Project/MoeKoeMusic/src/components/home/HomeRecommendations.vue:163>) · [playFM](<D:/Project/MoeKoeMusic/src/components/home/HomeRecommendations.vue:171>)

**项目内依赖：** [../../utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)。

**外部/内置依赖：** `vue`。

**直接写出的请求地址：** `/top/card`。

### src/components/search/AlbumGrid.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/search/AlbumGrid.vue>)。专辑搜索结果卡片，规范显示字段并 emit 点击给父页面。

**具名函数、方法与类：** [default](<D:/Project/MoeKoeMusic/src/components/search/AlbumGrid.vue:42>) · [onAlbumClick](<D:/Project/MoeKoeMusic/src/components/search/AlbumGrid.vue:48>)

### src/components/search/ArtistGrid.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/search/ArtistGrid.vue>)。歌手搜索结果卡片与点击事件，父页面负责真正的导航。

**具名函数、方法与类：** [default](<D:/Project/MoeKoeMusic/src/components/search/ArtistGrid.vue:35>) · [onArtistClick](<D:/Project/MoeKoeMusic/src/components/search/ArtistGrid.vue:41>)

### src/components/search/ComplexSearchResults.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue>)。综合搜索各区块，复用歌曲/专辑/歌单/歌手/MV组件并分派更多结果和播放动作。

**具名函数、方法与类：** [getSection](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue:140>) · [getImage](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue:172>) · [getSingerNames](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue:177>) · [formatDate](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue:182>) · [formatCount](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue:187>) · [goToSearch](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue:194>) · [handleSongContextMenu](<D:/Project/MoeKoeMusic/src/components/search/ComplexSearchResults.vue:205>)

**项目内依赖：** [./AlbumGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/AlbumGrid.vue>)、[./PlaylistGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/PlaylistGrid.vue>)、[./ArtistGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/ArtistGrid.vue>)、[./MvGrid.vue](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue>)、[./SongSearchList.vue](<D:/Project/MoeKoeMusic/src/components/search/SongSearchList.vue>)。

**外部/内置依赖：** `vue`、`vue-router`。

### src/components/search/MvGrid.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue>)。MV 搜索结果卡片、图像/日期/时长格式与选择事件。

**具名函数、方法与类：** [default](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue:25>) · [onMvClick](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue:31>) · [getImage](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue:35>) · [formatDate](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue:54>) · [formatDuration](<D:/Project/MoeKoeMusic/src/components/search/MvGrid.vue:59>)

### src/components/search/PlaylistGrid.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/search/PlaylistGrid.vue>)。歌单搜索结果卡片，格式化播放量和日期并发出详情选择事件。

**具名函数、方法与类：** [default](<D:/Project/MoeKoeMusic/src/components/search/PlaylistGrid.vue:42>) · [onPlaylistClick](<D:/Project/MoeKoeMusic/src/components/search/PlaylistGrid.vue:48>) · [formatPlayCount](<D:/Project/MoeKoeMusic/src/components/search/PlaylistGrid.vue:53>) · [formatDate](<D:/Project/MoeKoeMusic/src/components/search/PlaylistGrid.vue:66>)

### src/components/search/SongSearchList.vue

[打开源码](<D:/Project/MoeKoeMusic/src/components/search/SongSearchList.vue>)。歌曲搜索结果列表的展示与点击/右键事件，不独立管理 Audio。

**具名函数、方法与类：** [default](<D:/Project/MoeKoeMusic/src/components/search/SongSearchList.vue:28>)

## Vue工具、配置、composable和插件

### src/composables/useActivatedWatch.js

[打开源码](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js>)。为 KeepAlive 页面在激活时建立 watch，失活/卸载时停止，减少后台页面请求。

**具名函数、方法与类：** [useActivatedWatch](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js:3>) · [start](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js:6>) · [cleanup](<D:/Project/MoeKoeMusic/src/composables/useActivatedWatch.js:11>)

**外部/内置依赖：** `vue`。

### src/composables/useStickyDetailHeader.js

[打开源码](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js>)。测量歌曲列表和标题高度，按滚动调整吸顶、缩放、操作区和表头样式，管理监听和 ResizeObserver。

**具名函数、方法与类：** [clamp](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js:3>) · [useStickyDetailHeader](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js:16>) · [measureListHeader](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js:36>) · [syncScroll](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js:41>) · [observeListHeader](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js:45>) · [bindScroll](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js:56>) · [refresh](<D:/Project/MoeKoeMusic/src/composables/useStickyDetailHeader.js:65>)

**外部/内置依赖：** `vue`。

### src/config/disclaimer.js

[打开源码](<D:/Project/MoeKoeMusic/src/config/disclaimer.js>)。免责声明和用户协议的文案键、横幅资源路径，供标题导航和免责声明组件使用。

### src/config/onboardingGuide.js

[打开源码](<D:/Project/MoeKoeMusic/src/config/onboardingGuide.js>)。引导事件、存储键、各引导步骤、目标选择器和路由条件；不直接渲染界面。

### src/config/settings.js

[打开源码](<D:/Project/MoeKoeMusic/src/config/settings.js>)。声明式设置项和快捷键配置：选项、默认值、可用平台、帮助链接和动作名称，供 Settings.vue 生成界面。

**具名函数、方法与类：** [createSettingSections](<D:/Project/MoeKoeMusic/src/config/settings.js:3>) · [createShortcutConfigs](<D:/Project/MoeKoeMusic/src/config/settings.js:525>) · [useSettingsConfig](<D:/Project/MoeKoeMusic/src/config/settings.js:572>)

**外部/内置依赖：** `vue`。

### src/plugins/MessagePlugin.js

[打开源码](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js>)。把 MessageNotification 动态挂到 document，并注册 $message 的 success/error/warning/info 调用。

**具名函数、方法与类：** [install](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js:5>) · [mountMessage](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js:8>) · [message](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js:18>) · [success](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js:24>) · [error](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js:29>) · [warning](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js:34>) · [info](<D:/Project/MoeKoeMusic/src/plugins/MessagePlugin.js:39>)

**项目内依赖：** [@/components/MessageNotification.vue](<D:/Project/MoeKoeMusic/src/components/MessageNotification.vue>)。

**外部/内置依赖：** `vue`。

### src/plugins/ModalPlugin.js

[打开源码](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js>)。把 CustomModal 动态挂到 document，暴露 $modal.alert/confirm/prompt 和 loading 操作。

**具名函数、方法与类：** [install](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js:5>) · [mountModal](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js:8>) · [customAlert](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js:17>) · [customConfirm](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js:22>) · [customPrompt](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js:27>) · [showLoading](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js:32>) · [hideLoading](<D:/Project/MoeKoeMusic/src/plugins/ModalPlugin.js:37>)

**项目内依赖：** [@/components/CustomModal.vue](<D:/Project/MoeKoeMusic/src/components/CustomModal.vue>)。

**外部/内置依赖：** `vue`。

### src/utils/apiBaseUrl.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js>)。确定 API 地址，验证 http(s) 自定义地址，拼接 URL，并通过设备注册接口测试连通性。

**具名函数、方法与类：** [normalizeApiBaseUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js:4>) · [validateApiBaseUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js:9>) · [getApiBaseUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js:27>) · [joinApiUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js:38>) · [testApiBaseUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js:44>)

**显式local/sessionStorage键：** `settings`。

### src/utils/appUpdate.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/appUpdate.js>)。上一轮新增：使用 semver 比较版本，兼容字符串和数组形式的发布说明。

**具名函数、方法与类：** [isVersionLower](<D:/Project/MoeKoeMusic/src/utils/appUpdate.js:3>) · [formatReleaseNotes](<D:/Project/MoeKoeMusic/src/utils/appUpdate.js:7>)

**外部/内置依赖：** `semver`。

### src/utils/i18n.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/i18n.js>)。载入六种语言文案，结合浏览器语言和用户设置初始化 Vue i18n。

**具名函数、方法与类：** [getBrowserLocale](<D:/Project/MoeKoeMusic/src/utils/i18n.js:18>)

**项目内依赖：** [../language/en.json](<D:/Project/MoeKoeMusic/src/language/en.json>)、[../language/ja.json](<D:/Project/MoeKoeMusic/src/language/ja.json>)、[../language/ko.json](<D:/Project/MoeKoeMusic/src/language/ko.json>)、[../language/ru.json](<D:/Project/MoeKoeMusic/src/language/ru.json>)、[../language/zh-CN.json](<D:/Project/MoeKoeMusic/src/language/zh-CN.json>)、[../language/zh-TW.json](<D:/Project/MoeKoeMusic/src/language/zh-TW.json>)。

**外部/内置依赖：** `vue-i18n`。

**显式local/sessionStorage键：** `settings`。

### src/utils/recognize.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/recognize.js>)。发送 PCM 二进制到 audio/match，将识别字段归一化为歌曲数据和置信度并排序。

**具名函数、方法与类：** [pick](<D:/Project/MoeKoeMusic/src/utils/recognize.js:3>) · [firstValue](<D:/Project/MoeKoeMusic/src/utils/recognize.js:11>) · [normalizeCover](<D:/Project/MoeKoeMusic/src/utils/recognize.js:13>) · [mapRecognizeMatch](<D:/Project/MoeKoeMusic/src/utils/recognize.js:15>) · [recognizeAudio](<D:/Project/MoeKoeMusic/src/utils/recognize.js:40>)

**项目内依赖：** [./request](<D:/Project/MoeKoeMusic/src/utils/request.js>)。

**直接写出的请求地址：** `/audio/match`。

### src/utils/request.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/request.js>)。前端 axios 统一入口：附加账号/设备 Authorization，处理风控和 HTTP 错误；封装 GET/POST/PUT/DELETE/PATCH/上传。

**具名函数、方法与类：** [get](<D:/Project/MoeKoeMusic/src/utils/request.js:102>) · [post](<D:/Project/MoeKoeMusic/src/utils/request.js:114>) · [put](<D:/Project/MoeKoeMusic/src/utils/request.js:126>) · [del](<D:/Project/MoeKoeMusic/src/utils/request.js:138>) · [patch](<D:/Project/MoeKoeMusic/src/utils/request.js:150>) · [uploadImage](<D:/Project/MoeKoeMusic/src/utils/request.js:162>)

**项目内依赖：** [../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)、[./apiBaseUrl](<D:/Project/MoeKoeMusic/src/utils/apiBaseUrl.js>)、[./riskVerify](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js>)。

**外部/内置依赖：** `axios`。

### src/utils/riskVerify.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js>)。检测风控响应，串行排队打开验证组件，清理验证 DOM，完成后限次重试原请求。

**具名函数、方法与类：** [getHeader](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:6>) · [getRiskEventId](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:17>) · [isRiskError](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:32>) · [cleanupTencentCaptchaDom](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:39>) · [openRiskVerifyModal](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:50>) · [close](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:62>) · [settle](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:73>) · [onSuccess](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:83>) · [onCancel](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:87>) · [queueVerify](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:94>) · [getRiskEventIdFromResponse](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:100>) · [handleRiskResponse](<D:/Project/MoeKoeMusic/src/utils/riskVerify.js:104>)

**项目内依赖：** [@/components/RiskVerifyModal.vue](<D:/Project/MoeKoeMusic/src/components/RiskVerifyModal.vue>)。

**外部/内置依赖：** `vue`。

### src/utils/teamEvent.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>)。组队活动共享状态和操作：查询期次/个人状态、建队、加入、复制分享码、动态弹出 TeamEvent。

**具名函数、方法与类：** [getMyTeam](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:20>) · [refreshStatus](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:27>) · [createTeam](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:43>) · [joinTeam](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:48>) · [generateShareText](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:53>) · [copyTeamCode](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:59>) · [createTeamWithToast](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:70>) · [joinTeamWithToast](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:91>) · [refreshStatusWithToast](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:110>) · [createTeamEventPopup](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:126>) · [closePopup](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js:132>)

**项目内依赖：** [@/utils/request](<D:/Project/MoeKoeMusic/src/utils/request.js>)、[@/components/TeamEvent.vue](<D:/Project/MoeKoeMusic/src/components/TeamEvent.vue>)。

**外部/内置依赖：** `vue`。

**直接写出的请求地址：** `/team/period/info?t=${Date.now()}`、`/team/my/status?period_id=${currentPeriod.value}&t=${Date.now()}`、`/team/my/info?period_id=${currentPeriod.value}&t=${Date.now()}`、`/team/my?period_id=${currentPeriod.value}&t=${Date.now()}`、`/team/join?t=${Date.now()}`。

### src/utils/utils.js

[打开源码](<D:/Project/MoeKoeMusic/src/utils/utils.js>)。字体和主题应用、封面/日期/时长格式、媒体权限、音频设备签名、外链、MV 窗口与歌曲/歌单分享。

**具名函数、方法与类：** [escapeCssString](<D:/Project/MoeKoeMusic/src/utils/utils.js:6>) · [applyCustomFont](<D:/Project/MoeKoeMusic/src/utils/utils.js:8>) · [applyColorTheme](<D:/Project/MoeKoeMusic/src/utils/utils.js:24>) · [getCover](<D:/Project/MoeKoeMusic/src/utils/utils.js:90>) · [getProfileBgColor](<D:/Project/MoeKoeMusic/src/utils/utils.js:95>) · [formatMilliseconds](<D:/Project/MoeKoeMusic/src/utils/utils.js:140>) · [formatTimestampToAgo](<D:/Project/MoeKoeMusic/src/utils/utils.js:148>) · [requestMicrophonePermission](<D:/Project/MoeKoeMusic/src/utils/utils.js:177>) · [getAudioOutputDeviceSignature](<D:/Project/MoeKoeMusic/src/utils/utils.js:207>) · [setTheme](<D:/Project/MoeKoeMusic/src/utils/utils.js:218>) · [applyTheme](<D:/Project/MoeKoeMusic/src/utils/utils.js:227>) · [openRegisterUrl](<D:/Project/MoeKoeMusic/src/utils/utils.js:255>) · [openMvPlayer](<D:/Project/MoeKoeMusic/src/utils/utils.js:263>) · [share](<D:/Project/MoeKoeMusic/src/utils/utils.js:296>)

**项目内依赖：** [@/utils/i18n](<D:/Project/MoeKoeMusic/src/utils/i18n.js>)、[../stores/store](<D:/Project/MoeKoeMusic/src/stores/store.js>)。

**IPC通道（操作:名称）：** `send:open-url`。

**显式local/sessionStorage键：** `theme`。

## API入口、配置与公共工具

### api/.dockerignore

[打开源码](<D:/Project/MoeKoeMusic/api/.dockerignore>)。API容器构建时排除的内容。

### api/.env.example

[打开源码](<D:/Project/MoeKoeMusic/api/.env.example>)。API环境参数样例：端口、平台、代理/设备等；不应视为生产用户实际配置。

### api/.gitignore

[打开源码](<D:/Project/MoeKoeMusic/api/.gitignore>)。API子仓库的依赖和产物忽略规则。

### api/.prettierrc.json

[打开源码](<D:/Project/MoeKoeMusic/api/.prettierrc.json>)。API代码格式化规则。

### api/CLAUDE.md

[打开源码](<D:/Project/MoeKoeMusic/api/CLAUDE.md>)。API子仓库的开发辅助说明文档，本轮作为仓库文件说明，不作为修改主项目的授权来源。

### api/Dockerfile

[打开源码](<D:/Project/MoeKoeMusic/api/Dockerfile>)。API单服务容器构建，与根目录网页+API容器方案不同。

### api/LICENSE

[打开源码](<D:/Project/MoeKoeMusic/api/LICENSE>)。API子仓库自己的许可证，与主项目许可证分别适用。

### api/README.md

[打开源码](<D:/Project/MoeKoeMusic/api/README.md>)。API服务/Node调用入口和使用说明。

### api/app.js

[打开源码](<D:/Project/MoeKoeMusic/api/app.js>)。API 可执行/命令行入口：先应用 CLI 环境参数，再调用 server.startService；启动失败记录错误。

**具名函数、方法与类：** [start](<D:/Project/MoeKoeMusic/api/app.js:3>)

**项目内依赖：** [./util/runtime](<D:/Project/MoeKoeMusic/api/util/runtime.js>)、[./server](<D:/Project/MoeKoeMusic/api/server.js>)。

### api/index.js

[打开源码](<D:/Project/MoeKoeMusic/api/index.js>)。API 开发入口，require app.js 来启动服务。

**项目内依赖：** [./app](<D:/Project/MoeKoeMusic/api/app.js>)。

### api/interface.d.ts

[打开源码](<D:/Project/MoeKoeMusic/api/interface.d.ts>)。Node API调用的 TypeScript声明，描述函数输入、输出和类型；不是独立运行的服务。

### api/main.js

[打开源码](<D:/Project/MoeKoeMusic/api/main.js>)。API 的 Node 库入口：扫描 module 并按文件名导出可直接调用的函数，同时导出服务器和统一请求工具。

**项目内依赖：** [./util](<D:/Project/MoeKoeMusic/api/util/index.js>)、[./util/request](<D:/Project/MoeKoeMusic/api/util/request.js>)、[./server](<D:/Project/MoeKoeMusic/api/server.js>)。

**外部/内置依赖：** `node:fs`、`path`。

### api/nodemon.json

[打开源码](<D:/Project/MoeKoeMusic/api/nodemon.json>)。API开发热重载监视配置。

### api/package.json

[打开源码](<D:/Project/MoeKoeMusic/api/package.json>)。API子仓库自身的依赖、Node入口、pkg各平台可执行脚本和 tsdown构建命令。

### api/pnpm-lock.yaml

[打开源码](<D:/Project/MoeKoeMusic/api/pnpm-lock.yaml>)。API子仓库 pnpm精确依赖锁，与主项目 npm锁文件独立。

### api/server.js

[打开源码](<D:/Project/MoeKoeMusic/api/server.js>)。Express 核心：扫描模块自动注册路由，CORS、Cookie/Authorization合并、设备默认值、静态页、请求体解析、成功响应缓存和错误返回。

**具名函数、方法与类：** [getModulesDefinitions](<D:/Project/MoeKoeMusic/api/server.js:105>) · [parseRoute](<D:/Project/MoeKoeMusic/api/server.js:118>) · [consturctServer](<D:/Project/MoeKoeMusic/api/server.js:160>) · [ensureCookie](<D:/Project/MoeKoeMusic/api/server.js:249>) · [startService](<D:/Project/MoeKoeMusic/api/server.js:473>)

**项目内依赖：** [./util/util](<D:/Project/MoeKoeMusic/api/util/util.js>)、[./util/crypto](<D:/Project/MoeKoeMusic/api/util/crypto.js>)、[./util/request](<D:/Project/MoeKoeMusic/api/util/request.js>)、[./util/apicache](<D:/Project/MoeKoeMusic/api/util/apicache.js>)。

**外部/内置依赖：** `node:fs`、`node:path`、`express`、`safe-decode-uri-component`、`dotenv`。

### api/tsconfig.json

[打开源码](<D:/Project/MoeKoeMusic/api/tsconfig.json>)。API TypeScript类型检查/构建选项。

### api/tsdown.config.js

[打开源码](<D:/Project/MoeKoeMusic/api/tsdown.config.js>)。API JS打包配置：指定入口、输出格式、打包选项；区别于主项目 Vite和 API的 pkg可执行打包。

**外部/内置依赖：** `tsdown`。

### api/util/apicache.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/apicache.js>)。Express API响应缓存中间件，管理缓存键、过期、分组、响应头和绕过策略。

**具名函数、方法与类：** [matches](<D:/Project/MoeKoeMusic/api/util/apicache.js:54>) · [doesntMatch](<D:/Project/MoeKoeMusic/api/util/apicache.js:65>) · [logDuration](<D:/Project/MoeKoeMusic/api/util/apicache.js:80>) · [getSafeHeaders](<D:/Project/MoeKoeMusic/api/util/apicache.js:91>) · [ApiCache](<D:/Project/MoeKoeMusic/api/util/apicache.js:107>) · [debug](<D:/Project/MoeKoeMusic/api/util/apicache.js:148>) · [shouldCacheResponse](<D:/Project/MoeKoeMusic/api/util/apicache.js:171>) · [addIndexEntries](<D:/Project/MoeKoeMusic/api/util/apicache.js:206>) · [filterBlacklistedHeaders](<D:/Project/MoeKoeMusic/api/util/apicache.js:225>) · [createCacheObject](<D:/Project/MoeKoeMusic/api/util/apicache.js:245>) · [cacheResponse](<D:/Project/MoeKoeMusic/api/util/apicache.js:268>) · [accumulateContent](<D:/Project/MoeKoeMusic/api/util/apicache.js:306>) · [makeResponseCacheable](<D:/Project/MoeKoeMusic/api/util/apicache.js:353>) · [sendCachedResponse](<D:/Project/MoeKoeMusic/api/util/apicache.js:437>) · [syncOptions](<D:/Project/MoeKoeMusic/api/util/apicache.js:475>) · [parseDuration](<D:/Project/MoeKoeMusic/api/util/apicache.js:583>) · [options](<D:/Project/MoeKoeMusic/api/util/apicache.js:668>) · [NOOPCachePerformance](<D:/Project/MoeKoeMusic/api/util/apicache.js:686>) · [CachePerformance](<D:/Project/MoeKoeMusic/api/util/apicache.js:698>) · [cache](<D:/Project/MoeKoeMusic/api/util/apicache.js:869>) · [bypass](<D:/Project/MoeKoeMusic/api/util/apicache.js:873>)

**项目内依赖：** [./memory-cache](<D:/Project/MoeKoeMusic/api/util/memory-cache.js>)。

**外部/内置依赖：** `url`。

### api/util/config.json

[打开源码](<D:/Project/MoeKoeMusic/api/util/config.json>)。上游 API 协议参数和平台标识常量；其中 clientver 不是 MoeKoe 的 package.json 版本。

### api/util/crypto.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/crypto.js>)。AES/RSA/MD5/SHA1及歌单加解密，Buffer和 CryptoJS WordArray转换，供业务协议适配使用。

**具名函数、方法与类：** [encodeUtf8](<D:/Project/MoeKoeMusic/api/util/crypto.js:9>) · [decodeUtf8](<D:/Project/MoeKoeMusic/api/util/crypto.js:59>) · [normalizeBuffer](<D:/Project/MoeKoeMusic/api/util/crypto.js:104>) · [wordArrayFromBuffer](<D:/Project/MoeKoeMusic/api/util/crypto.js:110>) · [wordArrayToBuffer](<D:/Project/MoeKoeMusic/api/util/crypto.js:121>) · [uint8ArrayToHex](<D:/Project/MoeKoeMusic/api/util/crypto.js:130>) · [utf8WordArray](<D:/Project/MoeKoeMusic/api/util/crypto.js:134>) · [getForgePublicKey](<D:/Project/MoeKoeMusic/api/util/crypto.js:138>) · [bufferToBinaryString](<D:/Project/MoeKoeMusic/api/util/crypto.js:145>) · [rsaRawEncrypt](<D:/Project/MoeKoeMusic/api/util/crypto.js:151>) · [cryptoMd5](<D:/Project/MoeKoeMusic/api/util/crypto.js:167>) · [cryptoSha1](<D:/Project/MoeKoeMusic/api/util/crypto.js:177>) · [cryptoAesEncrypt](<D:/Project/MoeKoeMusic/api/util/crypto.js:188>) · [cryptoAesDecrypt](<D:/Project/MoeKoeMusic/api/util/crypto.js:222>) · [cryptoRSAEncrypt](<D:/Project/MoeKoeMusic/api/util/crypto.js:247>) · [rsaEncrypt2](<D:/Project/MoeKoeMusic/api/util/crypto.js:264>) · [playlistAesEncrypt](<D:/Project/MoeKoeMusic/api/util/crypto.js:272>) · [playlistAesDecrypt](<D:/Project/MoeKoeMusic/api/util/crypto.js:287>)

**项目内依赖：** [./util](<D:/Project/MoeKoeMusic/api/util/util.js>)。

**外部/内置依赖：** `crypto-js`、`node-forge`。

### api/util/generate_simulate.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js>)。现有 API风控辅助：生成交互轨迹/设备字段并编码 sid/edt 数据；接口协议的一部分，本轮不调整。

**具名函数、方法与类：** [generateEDTData](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:76>) · [bezierPath](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:156>) · [f3](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:195>) · [f5](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:205>) · [f6](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:217>) · [fs3](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:229>) · [fs5](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:238>) · [fs6](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:249>) · [ri](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:259>) · [generateSimulate](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js:286>)

**项目内依赖：** [./util](<D:/Project/MoeKoeMusic/api/util/util.js>)。

**外部/内置依赖：** `crypto-js`、`node-forge`。

### api/util/helper.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/helper.js>)。各种平台/场景的参数签名函数，包含歌曲播放和云盘 key，供 request 和业务模块使用。

**具名函数、方法与类：** [signatureWebParams](<D:/Project/MoeKoeMusic/api/util/helper.js:39>) · [signatureAndroidParams](<D:/Project/MoeKoeMusic/api/util/helper.js:60>) · [signatureRegisterParams](<D:/Project/MoeKoeMusic/api/util/helper.js:92>) · [signParams](<D:/Project/MoeKoeMusic/api/util/helper.js:113>) · [signKey](<D:/Project/MoeKoeMusic/api/util/helper.js:134>) · [signCloudKey](<D:/Project/MoeKoeMusic/api/util/helper.js:151>) · [signParamsKey](<D:/Project/MoeKoeMusic/api/util/helper.js:167>)

**项目内依赖：** [./crypto](<D:/Project/MoeKoeMusic/api/util/crypto.js>)、[./config.json](<D:/Project/MoeKoeMusic/api/util/config.json>)。

**外部/内置依赖：** `crypto-js`。

### api/util/index.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/index.js>)。对外汇总配置、当前平台 appid/clientver、加解密、签名、请求和工具函数。

**项目内依赖：** [./config.json](<D:/Project/MoeKoeMusic/api/util/config.json>)、[./crypto](<D:/Project/MoeKoeMusic/api/util/crypto.js>)、[./request](<D:/Project/MoeKoeMusic/api/util/request.js>)、[./runtime](<D:/Project/MoeKoeMusic/api/util/runtime.js>)、[./helper](<D:/Project/MoeKoeMusic/api/util/helper.js>)、[./util](<D:/Project/MoeKoeMusic/api/util/util.js>)。

### api/util/memory-cache.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/memory-cache.js>)。缓存内存后端：存取、过期计时、删除和统计，为 apicache 提供存储。

**具名函数、方法与类：** [MemoryCache](<D:/Project/MoeKoeMusic/api/util/memory-cache.js:20>)

### api/util/request.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/request.js>)。API 统一上游请求：补 appid/clientver/设备/认证参数，计算签名，设置网关/代理，整理业务状态、响应头和风控字段。

**具名函数、方法与类：** [createRequest](<D:/Project/MoeKoeMusic/api/util/request.js:67>)

**项目内依赖：** [./helper](<D:/Project/MoeKoeMusic/api/util/helper.js>)、[./util](<D:/Project/MoeKoeMusic/api/util/util.js>)、[./config.json](<D:/Project/MoeKoeMusic/api/util/config.json>)、[./runtime](<D:/Project/MoeKoeMusic/api/util/runtime.js>)、[./generate_simulate](<D:/Project/MoeKoeMusic/api/util/generate_simulate.js>)。

**外部/内置依赖：** `axios`。

### api/util/runtime.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/runtime.js>)。解析 --platform/--port/--proxy 等 CLI 参数并写环境变量；解析和缓存 HTTP(S)代理配置。

**具名函数、方法与类：** [parseCliArgs](<D:/Project/MoeKoeMusic/api/util/runtime.js:43>) · [applyCliOverrides](<D:/Project/MoeKoeMusic/api/util/runtime.js:80>) · [resolveProxy](<D:/Project/MoeKoeMusic/api/util/runtime.js:129>)

**外部/内置依赖：** `url`。

### api/util/util.js

[打开源码](<D:/Project/MoeKoeMusic/api/util/util.js>)。随机串/数字、Cookie解析、KRC解码、GUID/MID与 WebGL信息等通用函数。

**具名函数、方法与类：** [randomString](<D:/Project/MoeKoeMusic/api/util/util.js:34>) · [randomNumber](<D:/Project/MoeKoeMusic/api/util/util.js:59>) · [parseCookieString](<D:/Project/MoeKoeMusic/api/util/util.js:85>) · [cookieToJson](<D:/Project/MoeKoeMusic/api/util/util.js:102>) · [decodeLyrics](<D:/Project/MoeKoeMusic/api/util/util.js:130>) · [calculateMid](<D:/Project/MoeKoeMusic/api/util/util.js:175>) · [getGuid](<D:/Project/MoeKoeMusic/api/util/util.js:200>) · [e](<D:/Project/MoeKoeMusic/api/util/util.js:201>) · [generateWebGLHash](<D:/Project/MoeKoeMusic/api/util/util.js:224>) · [isUUIDv4](<D:/Project/MoeKoeMusic/api/util/util.js:296>)

**外部/内置依赖：** `pako`、`crypto-js`、`big-integer`。

### api/vercel.json

[打开源码](<D:/Project/MoeKoeMusic/api/vercel.json>)。API在 Vercel部署的入口/路由等配置。

## API演示页与验证资源

### api/public/.gitignore

[打开源码](<D:/Project/MoeKoeMusic/api/public/.gitignore>)。API示例静态目录的忽略规则。

### api/public/audio_match.html

[打开源码](<D:/Project/MoeKoeMusic/api/public/audio_match.html>)。音频识别 API演示页，采集/处理片段并提交识别请求。

**具名函数、方法与类：** [audioBufferToPCM](<D:/Project/MoeKoeMusic/api/public/audio_match.html:229>) · [decodeAudioBlob](<D:/Project/MoeKoeMusic/api/public/audio_match.html:239>) · [getSystemAudioStream](<D:/Project/MoeKoeMusic/api/public/audio_match.html:245>) · [getDisplayMediaStream](<D:/Project/MoeKoeMusic/api/public/audio_match.html:251>) · [recognizeAudio](<D:/Project/MoeKoeMusic/api/public/audio_match.html:262>) · [stopRecording](<D:/Project/MoeKoeMusic/api/public/audio_match.html:316>) · [cleanup](<D:/Project/MoeKoeMusic/api/public/audio_match.html:328>) · [resetBtn](<D:/Project/MoeKoeMusic/api/public/audio_match.html:336>) · [renderResult](<D:/Project/MoeKoeMusic/api/public/audio_match.html:343>) · [formatDuration](<D:/Project/MoeKoeMusic/api/public/audio_match.html:383>) · [setButtonsDisabled](<D:/Project/MoeKoeMusic/api/public/audio_match.html:390>) · [startRecordWith](<D:/Project/MoeKoeMusic/api/public/audio_match.html:395>)

**直接写出的请求地址：** `/audio/match?t=${Date.now()}`。

### api/public/fingerprint.js

[打开源码](<D:/Project/MoeKoeMusic/api/public/fingerprint.js>)。登录验证示例页共用的浏览器行为指纹工具：WebGL哈希、行为事件数据和sid加密；用于验证码流程。

**具名函数、方法与类：** [ri](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:20>) · [f3](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:36>) · [f5](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:46>) · [f6](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:58>) · [fs3](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:70>) · [fs5](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:80>) · [fs6](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:92>) · [bezierPath](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:115>) · [hex2buf](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:147>) · [buf2hex](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:158>) · [hexToBase64](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:169>) · [encryptSid](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:212>) · [generateWebGLHash](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:250>) · [generateEDTData](<D:/Project/MoeKoeMusic/api/public/fingerprint.js:305>)

### api/public/index.html

[打开源码](<D:/Project/MoeKoeMusic/api/public/index.html>)。API服务的入口/调试页面，用于浏览接口或演示，而不是 src/App.vue 的主界面。

### api/public/login_captcha.html

[打开源码](<D:/Project/MoeKoeMusic/api/public/login_captcha.html>)。登录验证码/验证演示页面，供 API调试使用。

**具名函数、方法与类：** [loadScript](<D:/Project/MoeKoeMusic/api/public/login_captcha.html:251>) · [ready](<D:/Project/MoeKoeMusic/api/public/login_captcha.html:368>)

**直接写出的请求地址：** `/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`、`/get/verify/info?eventid=${loginResult.ssaCode}`。

### api/public/login_captcha_simulate.html

[打开源码](<D:/Project/MoeKoeMusic/api/public/login_captcha_simulate.html>)。登录验证模拟数据的演示/调试页，使用现有风控辅助逻辑。

**具名函数、方法与类：** [$](<D:/Project/MoeKoeMusic/api/public/login_captcha_simulate.html:253>) · [loadScript](<D:/Project/MoeKoeMusic/api/public/login_captcha_simulate.html:262>) · [getCookie](<D:/Project/MoeKoeMusic/api/public/login_captcha_simulate.html:279>) · [ready](<D:/Project/MoeKoeMusic/api/public/login_captcha_simulate.html:406>)

**直接写出的请求地址：** `/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`、`/get/verify/info?eventid=${loginPromise.ssaCode}`、`/verify/user/info?eventid=${loginPromise.ssaCode}&v_type=${v_type}&verifycode=${encodeURIComponent(                             a                           )}&sid=${encodeURIComponent(sid)}&edt=${encodeURIComponent(edt)}`、`/verify/user/info?eventid=${loginPromise.ssaCode}&v_type=${v_type}&verifycode=${encodeURIComponent(                         code                       )}&sid=${encodeURIComponent(sid)}&edt=${encodeURIComponent(edt)}`。

### api/public/sid_edt_generator.html

[打开源码](<D:/Project/MoeKoeMusic/api/public/sid_edt_generator.html>)。sid/edt 数据生成演示页，展示现有协议参数构建。

**具名函数、方法与类：** [ab2hex](<D:/Project/MoeKoeMusic/api/public/sid_edt_generator.html:27>) · [ab2str](<D:/Project/MoeKoeMusic/api/public/sid_edt_generator.html:43>) · [algoStr](<D:/Project/MoeKoeMusic/api/public/sid_edt_generator.html:57>) · [renderLog](<D:/Project/MoeKoeMusic/api/public/sid_edt_generator.html:317>) · [initApp](<D:/Project/MoeKoeMusic/api/public/sid_edt_generator.html:348>)

### api/public/verify-pkg/verifycode.js

[打开源码](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js>)。验证 WASM 的 JavaScript桥接/生成胶水，负责内存和导出函数调用；与两个 .wasm文件配套。

**具名函数、方法与类：** [_classCallCheck](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:3>) · [_defineProperties](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:9>) · [_createClass](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:19>) · [_instanceof](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:25>) · [_typeof](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:33>) · [getObject](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:57>) · [dropObject](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:63>) · [takeObject](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:69>) · [getUint8Memory0](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:82>) · [getStringFromWasm0](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:90>) · [addHeapObject](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:94>) · [passStringToWasm0](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:118>) · [isLikeNone](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:157>) · [getInt32Memory0](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:163>) · [debugString](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:171>) · [makeMutClosure](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:247>) · [real](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:254>) · [__wbg_adapter_26](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:278>) · [__wbg_adapter_29](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:285>) · [__wbg_adapter_32](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:293>) · [handleError](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:307>) · [getArrayU8FromWasm0](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:317>) · [getFloat64Memory0](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:323>) · [__wbg_adapter_165](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:331>) · [value](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:348>) · [value](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:361>) · [EData](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:370>) · [value](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:383>) · [value](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:399>) · [load](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:417>) · [init](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:450>) · [cb0](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode.js:836>)

### api/public/verify-pkg/verifycode_bg.wasm

[打开源码](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode_bg.wasm>)。风险验证相关 WebAssembly二进制，与 verifycode.js桥接；第二个为 iOS相关变体，不是音乐解码引擎。

### api/public/verify-pkg/verifycode_bg_ios.wasm

[打开源码](<D:/Project/MoeKoeMusic/api/public/verify-pkg/verifycode_bg_ios.wasm>)。风险验证相关 WebAssembly二进制，与 verifycode.js桥接；第二个为 iOS相关变体，不是音乐解码引擎。

### api/public/verifySlide.html

[打开源码](<D:/Project/MoeKoeMusic/api/public/verifySlide.html>)。滑动验证演示页，配合验证脚本与 WASM资源。

**具名函数、方法与类：** [getCookie](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:341>) · [showStep1Result](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:351>) · [showResult](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:362>) · [loadScript](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:373>) · [fetchVerifyInfo](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:393>) · [generateSidEdt](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:485>) · [triggerCaptcha](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:519>) · [startTxCaptcha](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:549>) · [ready](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:599>) · [startSmsCaptcha](<D:/Project/MoeKoeMusic/api/public/verifySlide.html:618>)

**直接写出的请求地址：** `/get/verify/info?eventid=${encodeURIComponent(eventid)}`。

## API的177个业务模块

默认规则为 `文件名去掉.js，下划线替换为/`。模块由 Express `app.use`挂载，服务器本身不以get/post区分入口；模块内 method 是向上游发请求使用的方法。很多同名接口分支由参数或平台决定，下面职责不是完整参数手册。

“前端直接引用”按 src源码中静态字符串请求地址匹配，动态地址或模块之间调用可能不在表里。公开接口不要求每个都被主界面直接调用。

| 模块文件 | 注册路由 | 职责 | 具名入口/辅助函数 | 前端直接引用 |
| --- | --- | --- | --- | --- |
| [ai_recommend.js](<D:/Project/MoeKoeMusic/api/module/ai_recommend.js>) | `/ai/recommend` | AI推荐歌曲接口 | [module.exports](<D:/Project/MoeKoeMusic/api/module/ai_recommend.js:3>) | 静态未定位直接引用 |
| [album.js](<D:/Project/MoeKoeMusic/api/module/album.js>) | `/album` | 按专辑标识获取专辑基础信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/album.js:4>) | 静态未定位直接引用 |
| [album_detail.js](<D:/Project/MoeKoeMusic/api/module/album_detail.js>) | `/album/detail` | 专辑详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/album_detail.js:2>) | [PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [album_shop.js](<D:/Project/MoeKoeMusic/api/module/album_shop.js>) | `/album/shop` | 数字专辑商店分类/内容 | [module.exports](<D:/Project/MoeKoeMusic/api/module/album_shop.js:2>) | 静态未定位直接引用 |
| [album_songs.js](<D:/Project/MoeKoeMusic/api/module/album_songs.js>) | `/album/songs` | 专辑歌曲列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/album_songs.js:2>) | [PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [artist_albums.js](<D:/Project/MoeKoeMusic/api/module/artist_albums.js>) | `/artist/albums` | 歌手专辑列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_albums.js:3>) | 静态未定位直接引用 |
| [artist_audios.js](<D:/Project/MoeKoeMusic/api/module/artist_audios.js>) | `/artist/audios` | 歌手歌曲列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_audios.js:4>) | [PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [artist_detail.js](<D:/Project/MoeKoeMusic/api/module/artist_detail.js>) | `/artist/detail` | 歌手详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_detail.js:2>) | [PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [artist_follow.js](<D:/Project/MoeKoeMusic/api/module/artist_follow.js>) | `/artist/follow` | 关注歌手 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_follow.js:3>) | 静态未定位直接引用 |
| [artist_follow_newsongs.js](<D:/Project/MoeKoeMusic/api/module/artist_follow_newsongs.js>) | `/artist/follow/newsongs` | 已关注歌手的新歌/新专辑动态 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_follow_newsongs.js:2>) | 静态未定位直接引用 |
| [artist_honour.js](<D:/Project/MoeKoeMusic/api/module/artist_honour.js>) | `/artist/honour` | 歌手成就/荣誉信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_honour.js:2>) | 静态未定位直接引用 |
| [artist_lists.js](<D:/Project/MoeKoeMusic/api/module/artist_lists.js>) | `/artist/lists` | 歌手列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_lists.js:2>) | 静态未定位直接引用 |
| [artist_unfollow.js](<D:/Project/MoeKoeMusic/api/module/artist_unfollow.js>) | `/artist/unfollow` | 取消关注歌手 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_unfollow.js:3>) | 静态未定位直接引用 |
| [artist_videos.js](<D:/Project/MoeKoeMusic/api/module/artist_videos.js>) | `/artist/videos` | 歌手视频/MV列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/artist_videos.js:5>) | 静态未定位直接引用 |
| [audio.js](<D:/Project/MoeKoeMusic/api/module/audio.js>) | `/audio` | 音频基础信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/audio.js:3>) | 静态未定位直接引用 |
| [audio_accompany_matching.js](<D:/Project/MoeKoeMusic/api/module/audio_accompany_matching.js>) | `/audio/accompany/matching` | 匹配歌曲伴奏 | [module.exports](<D:/Project/MoeKoeMusic/api/module/audio_accompany_matching.js:3>) | 静态未定位直接引用 |
| [audio_ktv_total.js](<D:/Project/MoeKoeMusic/api/module/audio_ktv_total.js>) | `/audio/ktv/total` | 歌曲KTV作品数量 | [module.exports](<D:/Project/MoeKoeMusic/api/module/audio_ktv_total.js:3>) | 静态未定位直接引用 |
| [audio_match.js](<D:/Project/MoeKoeMusic/api/module/audio_match.js>) | `/audio/match` | 提交音频二进制到上游识曲服务 | [module.exports](<D:/Project/MoeKoeMusic/api/module/audio_match.js:2>) | [recognize.js](<D:/Project/MoeKoeMusic/src/utils/recognize.js>) |
| [audio_related.js](<D:/Project/MoeKoeMusic/api/module/audio_related.js>) | `/audio/related` | 音频关联内容 | [module.exports](<D:/Project/MoeKoeMusic/api/module/audio_related.js:6>) | 静态未定位直接引用 |
| [brush.js](<D:/Project/MoeKoeMusic/api/module/brush.js>) | `/brush` | 刷刷/连续歌曲推荐流 | [module.exports](<D:/Project/MoeKoeMusic/api/module/brush.js:3>) | 静态未定位直接引用 |
| [captcha_sent.js](<D:/Project/MoeKoeMusic/api/module/captcha_sent.js>) | `/captcha/sent` | 发送手机验证码 | [module.exports](<D:/Project/MoeKoeMusic/api/module/captcha_sent.js:2>) | [Login.vue](<D:/Project/MoeKoeMusic/src/views/Login.vue>) |
| [comment_album.js](<D:/Project/MoeKoeMusic/api/module/comment_album.js>) | `/comment/album` | 专辑评论 | [module.exports](<D:/Project/MoeKoeMusic/api/module/comment_album.js:2>) | 静态未定位直接引用 |
| [comment_count.js](<D:/Project/MoeKoeMusic/api/module/comment_count.js>) | `/comment/count` | 评论数量 | [module.exports](<D:/Project/MoeKoeMusic/api/module/comment_count.js:2>) | 静态未定位直接引用 |
| [comment_floor.js](<D:/Project/MoeKoeMusic/api/module/comment_floor.js>) | `/comment/floor` | 评论楼中楼/回复 | [isNonEmpty](<D:/Project/MoeKoeMusic/api/module/comment_floor.js:6>) · [resolveFloorCommentRequestConfig](<D:/Project/MoeKoeMusic/api/module/comment_floor.js:12>) · [commentFloor](<D:/Project/MoeKoeMusic/api/module/comment_floor.js:54>) | 静态未定位直接引用 |
| [comment_music.js](<D:/Project/MoeKoeMusic/api/module/comment_music.js>) | `/comment/music` | 歌曲评论 | [module.exports](<D:/Project/MoeKoeMusic/api/module/comment_music.js:2>) | 静态未定位直接引用 |
| [comment_music_classify.js](<D:/Project/MoeKoeMusic/api/module/comment_music_classify.js>) | `/comment/music/classify` | 按分类获取歌曲评论 | [module.exports](<D:/Project/MoeKoeMusic/api/module/comment_music_classify.js:2>) | 静态未定位直接引用 |
| [comment_music_hotword.js](<D:/Project/MoeKoeMusic/api/module/comment_music_hotword.js>) | `/comment/music/hotword` | 歌曲评论热词 | [module.exports](<D:/Project/MoeKoeMusic/api/module/comment_music_hotword.js:2>) | 静态未定位直接引用 |
| [comment_playlist.js](<D:/Project/MoeKoeMusic/api/module/comment_playlist.js>) | `/comment/playlist` | 歌单评论 | [module.exports](<D:/Project/MoeKoeMusic/api/module/comment_playlist.js:2>) | 静态未定位直接引用 |
| [everyday_friend.js](<D:/Project/MoeKoeMusic/api/module/everyday_friend.js>) | `/everyday/friend` | 基于听歌的好友推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/everyday_friend.js:2>) | 静态未定位直接引用 |
| [everyday_history.js](<D:/Project/MoeKoeMusic/api/module/everyday_history.js>) | `/everyday/history` | 每日推荐历史 | [module.exports](<D:/Project/MoeKoeMusic/api/module/everyday_history.js:3>) | 静态未定位直接引用 |
| [everyday_recommend.js](<D:/Project/MoeKoeMusic/api/module/everyday_recommend.js>) | `/everyday/recommend` | 每日歌曲推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/everyday_recommend.js:1>) | [Home.vue](<D:/Project/MoeKoeMusic/src/views/Home.vue>) |
| [everyday_style_recommend.js](<D:/Project/MoeKoeMusic/api/module/everyday_style_recommend.js>) | `/everyday/style/recommend` | 每日风格推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/everyday_style_recommend.js:1>) | 静态未定位直接引用 |
| [favorite_count.js](<D:/Project/MoeKoeMusic/api/module/favorite_count.js>) | `/favorite/count` | 音频收藏数 | [module.exports](<D:/Project/MoeKoeMusic/api/module/favorite_count.js:1>) | 静态未定位直接引用 |
| [fm_class.js](<D:/Project/MoeKoeMusic/api/module/fm_class.js>) | `/fm/class` | 分类FM歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/fm_class.js:2>) | 静态未定位直接引用 |
| [fm_image.js](<D:/Project/MoeKoeMusic/api/module/fm_image.js>) | `/fm/image` | FM信息/图片 | [module.exports](<D:/Project/MoeKoeMusic/api/module/fm_image.js:2>) | 静态未定位直接引用 |
| [fm_recommend.js](<D:/Project/MoeKoeMusic/api/module/fm_recommend.js>) | `/fm/recommend` | FM推荐列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/fm_recommend.js:2>) | 静态未定位直接引用 |
| [fm_songs.js](<D:/Project/MoeKoeMusic/api/module/fm_songs.js>) | `/fm/songs` | FM歌曲列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/fm_songs.js:2>) | 静态未定位直接引用 |
| [get_mode_info.js](<D:/Project/MoeKoeMusic/api/module/get_mode_info.js>) | `/get/mode/info` | 音效/耳机型号详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/get_mode_info.js:3>) | 静态未定位直接引用 |
| [get_model.js](<D:/Project/MoeKoeMusic/api/module/get_model.js>) | `/get/model` | 音效列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/get_model.js:3>) | 静态未定位直接引用 |
| [get_verify_info.js](<D:/Project/MoeKoeMusic/api/module/get_verify_info.js>) | `/get/verify/info` | 获取风险验证方式/信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/get_verify_info.js:2>) | 静态未定位直接引用 |
| [images.js](<D:/Project/MoeKoeMusic/api/module/images.js>) | `/images` | 歌曲关联的封面/图片集合 | [module.exports](<D:/Project/MoeKoeMusic/api/module/images.js:3>) | [PlayerControl.vue](<D:/Project/MoeKoeMusic/src/components/PlayerControl.vue>) |
| [images_audio.js](<D:/Project/MoeKoeMusic/api/module/images_audio.js>) | `/images/audio` | 歌曲关联的歌手图片 | [module.exports](<D:/Project/MoeKoeMusic/api/module/images_audio.js:3>) | 静态未定位直接引用 |
| [ip.js](<D:/Project/MoeKoeMusic/api/module/ip.js>) | `/ip` | 内容IP关联的歌曲/专辑/视频/作者，IP在这里不是网络地址 | [module.exports](<D:/Project/MoeKoeMusic/api/module/ip.js:2>) | 静态未定位直接引用 |
| [ip_dateil.js](<D:/Project/MoeKoeMusic/api/module/ip_dateil.js>) | `/ip/dateil` | 内容IP详情；保留源码dateil拼写 | [module.exports](<D:/Project/MoeKoeMusic/api/module/ip_dateil.js:2>) | 静态未定位直接引用 |
| [ip_playlist.js](<D:/Project/MoeKoeMusic/api/module/ip_playlist.js>) | `/ip/playlist` | 内容IP相关歌单 | [module.exports](<D:/Project/MoeKoeMusic/api/module/ip_playlist.js:2>) | 静态未定位直接引用 |
| [ip_zone.js](<D:/Project/MoeKoeMusic/api/module/ip_zone.js>) | `/ip/zone` | 内容IP专区入口 | [module.exports](<D:/Project/MoeKoeMusic/api/module/ip_zone.js:2>) | 静态未定位直接引用 |
| [ip_zone_home.js](<D:/Project/MoeKoeMusic/api/module/ip_zone_home.js>) | `/ip/zone/home` | 内容IP专区首页推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/ip_zone_home.js:2>) | 静态未定位直接引用 |
| [kmr_audio_mv.js](<D:/Project/MoeKoeMusic/api/module/kmr_audio_mv.js>) | `/kmr/audio/mv` | 按album_audio_id/MixSongID取对应MV | [module.exports](<D:/Project/MoeKoeMusic/api/module/kmr_audio_mv.js:3>) | 静态未定位直接引用 |
| [krm_audio.js](<D:/Project/MoeKoeMusic/api/module/krm_audio.js>) | `/krm/audio` | 按album_audio_id/MixSongID取歌曲/专辑/歌手信息；保留krm拼写 | [module.exports](<D:/Project/MoeKoeMusic/api/module/krm_audio.js:2>) | 静态未定位直接引用 |
| [lastest_songs_listen.js](<D:/Project/MoeKoeMusic/api/module/lastest_songs_listen.js>) | `/lastest/songs/listen` | 设备最近听歌记录；保留lastest拼写 | [module.exports](<D:/Project/MoeKoeMusic/api/module/lastest_songs_listen.js:2>) | 静态未定位直接引用 |
| [login.js](<D:/Project/MoeKoeMusic/api/module/login.js>) | `/login` | 账号密码登录 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login.js:3>) | [Login.vue](<D:/Project/MoeKoeMusic/src/views/Login.vue>) |
| [login_cellphone.js](<D:/Project/MoeKoeMusic/api/module/login_cellphone.js>) | `/login/cellphone` | 手机验证码登录 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_cellphone.js:9>) | 静态未定位直接引用 |
| [login_device.js](<D:/Project/MoeKoeMusic/api/module/login_device.js>) | `/login/device` | 登录设备信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_device.js:3>) | 静态未定位直接引用 |
| [login_device_kick.js](<D:/Project/MoeKoeMusic/api/module/login_device_kick.js>) | `/login/device/kick` | 指定登录设备退出 | [rsaNoPadEncrypt](<D:/Project/MoeKoeMusic/api/module/login_device_kick.js:7>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/login_device_kick.js:23>) | 静态未定位直接引用 |
| [login_openplat.js](<D:/Project/MoeKoeMusic/api/module/login_openplat.js>) | `/login/openplat` | 开放平台授权登录 | [assetsToken](<D:/Project/MoeKoeMusic/api/module/login_openplat.js:12>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/login_openplat.js:20>) | 静态未定位直接引用 |
| [login_qq.js](<D:/Project/MoeKoeMusic/api/module/login_qq.js>) | `/login/qq` | QQ授权登录 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_qq.js:9>) | 静态未定位直接引用 |
| [login_qq_qr_check.js](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_check.js>) | `/login/qq/qr/check` | QQ二维码扫码状态与登录兑换 | [cookieToString](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_check.js:12>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_check.js:22>) · [validateStatus](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_check.js:121>) | 静态未定位直接引用 |
| [login_qq_qr_create.js](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_create.js>) | `/login/qq/qr/create` | 生成QQ登录二维码 | [hash33](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_create.js:8>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_create.js:16>) · [cookieStr](<D:/Project/MoeKoeMusic/api/module/login_qq_qr_create.js:68>) | 静态未定位直接引用 |
| [login_qr_check.js](<D:/Project/MoeKoeMusic/api/module/login_qr_check.js>) | `/login/qr/check` | 酷狗二维码状态查询 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_qr_check.js:5>) | [Login.vue](<D:/Project/MoeKoeMusic/src/views/Login.vue>) |
| [login_qr_create.js](<D:/Project/MoeKoeMusic/api/module/login_qr_create.js>) | `/login/qr/create` | 生成酷狗二维码图片/数据 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_qr_create.js:4>) | [Login.vue](<D:/Project/MoeKoeMusic/src/views/Login.vue>) |
| [login_qr_key.js](<D:/Project/MoeKoeMusic/api/module/login_qr_key.js>) | `/login/qr/key` | 取得酷狗二维码登录key | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_qr_key.js:4>) | [Login.vue](<D:/Project/MoeKoeMusic/src/views/Login.vue>) |
| [login_token.js](<D:/Project/MoeKoeMusic/api/module/login_token.js>) | `/login/token` | 使用token刷新登录 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_token.js:15>) | 静态未定位直接引用 |
| [login_wx_check.js](<D:/Project/MoeKoeMusic/api/module/login_wx_check.js>) | `/login/wx/check` | 微信扫码状态查询 | [module.exports](<D:/Project/MoeKoeMusic/api/module/login_wx_check.js:4>) | 静态未定位直接引用 |
| [login_wx_create.js](<D:/Project/MoeKoeMusic/api/module/login_wx_create.js>) | `/login/wx/create` | 微信二维码/授权入口 | [accessToken](<D:/Project/MoeKoeMusic/api/module/login_wx_create.js:7>) · [ticket](<D:/Project/MoeKoeMusic/api/module/login_wx_create.js:16>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/login_wx_create.js:18>) | 静态未定位直接引用 |
| [longaudio_album_audios.js](<D:/Project/MoeKoeMusic/api/module/longaudio_album_audios.js>) | `/longaudio/album/audios` | 长音频专辑的节目列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/longaudio_album_audios.js:1>) | 静态未定位直接引用 |
| [longaudio_album_detail.js](<D:/Project/MoeKoeMusic/api/module/longaudio_album_detail.js>) | `/longaudio/album/detail` | 长音频专辑详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/longaudio_album_detail.js:1>) | 静态未定位直接引用 |
| [longaudio_daily_recommend.js](<D:/Project/MoeKoeMusic/api/module/longaudio_daily_recommend.js>) | `/longaudio/daily/recommend` | 长音频每日推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/longaudio_daily_recommend.js:1>) | 静态未定位直接引用 |
| [longaudio_rank_recommend.js](<D:/Project/MoeKoeMusic/api/module/longaudio_rank_recommend.js>) | `/longaudio/rank/recommend` | 长音频榜单推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/longaudio_rank_recommend.js:1>) | 静态未定位直接引用 |
| [longaudio_vip_recommend.js](<D:/Project/MoeKoeMusic/api/module/longaudio_vip_recommend.js>) | `/longaudio/vip/recommend` | 长音频VIP精选 | [module.exports](<D:/Project/MoeKoeMusic/api/module/longaudio_vip_recommend.js:1>) | 静态未定位直接引用 |
| [longaudio_week_recommend.js](<D:/Project/MoeKoeMusic/api/module/longaudio_week_recommend.js>) | `/longaudio/week/recommend` | 长音频每周新专辑推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/longaudio_week_recommend.js:1>) | 静态未定位直接引用 |
| [lyric.js](<D:/Project/MoeKoeMusic/api/module/lyric.js>) | `/lyric` | 歌词下载与可选KRC解码 | [module.exports](<D:/Project/MoeKoeMusic/api/module/lyric.js:4>) | [LyricsHandler.js](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js>) |
| [pc_diantai.js](<D:/Project/MoeKoeMusic/api/module/pc_diantai.js>) | `/pc/diantai` | PC电台banner信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/pc_diantai.js:2>) | 静态未定位直接引用 |
| [personal_fm.js](<D:/Project/MoeKoeMusic/api/module/personal_fm.js>) | `/personal/fm` | 私人FM推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/personal_fm.js:2>) | 静态未定位直接引用 |
| [playhistory_upload.js](<D:/Project/MoeKoeMusic/api/module/playhistory_upload.js>) | `/playhistory/upload` | 上传听歌历史 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playhistory_upload.js:2>) | 静态未定位直接引用 |
| [playlist_add.js](<D:/Project/MoeKoeMusic/api/module/playlist_add.js>) | `/playlist/add` | 创建/收藏歌单，具体模式取决于参数 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_add.js:2>) | [Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>)、[PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [playlist_del.js](<D:/Project/MoeKoeMusic/api/module/playlist_del.js>) | `/playlist/del` | 删除/取消收藏歌单，具体语义取决于目标列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_del.js:4>) | [PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [playlist_detail.js](<D:/Project/MoeKoeMusic/api/module/playlist_detail.js>) | `/playlist/detail` | 歌单详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_detail.js:3>) | 静态未定位直接引用 |
| [playlist_effect.js](<D:/Project/MoeKoeMusic/api/module/playlist_effect.js>) | `/playlist/effect` | 音效歌单 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_effect.js:3>) | 静态未定位直接引用 |
| [playlist_similar.js](<D:/Project/MoeKoeMusic/api/module/playlist_similar.js>) | `/playlist/similar` | 相似歌单 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_similar.js:3>) | 静态未定位直接引用 |
| [playlist_tags.js](<D:/Project/MoeKoeMusic/api/module/playlist_tags.js>) | `/playlist/tags` | 歌单分类标签 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_tags.js:3>) | [DiscoverPlaylistContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue>) |
| [playlist_track_all.js](<D:/Project/MoeKoeMusic/api/module/playlist_track_all.js>) | `/playlist/track/all` | 公开歌单歌曲列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_track_all.js:2>) | [PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [playlist_track_all_new.js](<D:/Project/MoeKoeMusic/api/module/playlist_track_all_new.js>) | `/playlist/track/all/new` | 另一版歌单完整歌曲列表接口 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_track_all_new.js:2>) | 静态未定位直接引用 |
| [playlist_tracks_add.js](<D:/Project/MoeKoeMusic/api/module/playlist_tracks_add.js>) | `/playlist/tracks/add` | 向歌单添加歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_tracks_add.js:3>) | [ContextMenu.vue](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)、[PlaylistSelectModal.vue](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue>) |
| [playlist_tracks_del.js](<D:/Project/MoeKoeMusic/api/module/playlist_tracks_del.js>) | `/playlist/tracks/del` | 从歌单删除歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/playlist_tracks_del.js:3>) | [ContextMenu.vue](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)、[PlaylistDetail.vue](<D:/Project/MoeKoeMusic/src/views/PlaylistDetail.vue>) |
| [privilege_lite.js](<D:/Project/MoeKoeMusic/api/module/privilege_lite.js>) | `/privilege/lite` | 歌曲权限/各音质候选信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/privilege_lite.js:4>) | [OnlineMusicQueue.js](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js>)、[Home.vue](<D:/Project/MoeKoeMusic/src/views/Home.vue>) |
| [rank_audio.js](<D:/Project/MoeKoeMusic/api/module/rank_audio.js>) | `/rank/audio` | 排行榜歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/rank_audio.js:2>) | [RankingContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue>) |
| [rank_info.js](<D:/Project/MoeKoeMusic/api/module/rank_info.js>) | `/rank/info` | 排行榜详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/rank_info.js:2>) | 静态未定位直接引用 |
| [rank_list.js](<D:/Project/MoeKoeMusic/api/module/rank_list.js>) | `/rank/list` | 排行榜列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/rank_list.js:3>) | [RankingContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/RankingContent.vue>) |
| [rank_top.js](<D:/Project/MoeKoeMusic/api/module/rank_top.js>) | `/rank/top` | 推荐排行榜 | [module.exports](<D:/Project/MoeKoeMusic/api/module/rank_top.js:3>) | 静态未定位直接引用 |
| [rank_vol.js](<D:/Project/MoeKoeMusic/api/module/rank_vol.js>) | `/rank/vol` | 排行榜期数列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/rank_vol.js:2>) | 静态未定位直接引用 |
| [recommend_songs.js](<D:/Project/MoeKoeMusic/api/module/recommend_songs.js>) | `/recommend/songs` | 每日推荐歌曲的另一入口 | [module.exports](<D:/Project/MoeKoeMusic/api/module/recommend_songs.js:3>) | 静态未定位直接引用 |
| [register_dev.js](<D:/Project/MoeKoeMusic/api/module/register_dev.js>) | `/register/dev` | 设备注册，返回设备指纹等信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/register_dev.js:2>) | 静态未定位直接引用 |
| [scene_audio_list.js](<D:/Project/MoeKoeMusic/api/module/scene_audio_list.js>) | `/scene/audio/list` | 场景的音频列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_audio_list.js:3>) | 静态未定位直接引用 |
| [scene_collection_list.js](<D:/Project/MoeKoeMusic/api/module/scene_collection_list.js>) | `/scene/collection/list` | 场景集合列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_collection_list.js:3>) | 静态未定位直接引用 |
| [scene_lists.js](<D:/Project/MoeKoeMusic/api/module/scene_lists.js>) | `/scene/lists` | 场景列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_lists.js:1>) | 静态未定位直接引用 |
| [scene_lists_v2.js](<D:/Project/MoeKoeMusic/api/module/scene_lists_v2.js>) | `/scene/lists/v2` | 第二版场景列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_lists_v2.js:1>) | 静态未定位直接引用 |
| [scene_module.js](<D:/Project/MoeKoeMusic/api/module/scene_module.js>) | `/scene/module` | 场景模块 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_module.js:1>) | 静态未定位直接引用 |
| [scene_module_info.js](<D:/Project/MoeKoeMusic/api/module/scene_module_info.js>) | `/scene/module/info` | 场景模块信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_module_info.js:1>) | 静态未定位直接引用 |
| [scene_music.js](<D:/Project/MoeKoeMusic/api/module/scene_music.js>) | `/scene/music` | 场景歌曲推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_music.js:1>) | 静态未定位直接引用 |
| [scene_video_list.js](<D:/Project/MoeKoeMusic/api/module/scene_video_list.js>) | `/scene/video/list` | 场景视频列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/scene_video_list.js:3>) | 静态未定位直接引用 |
| [search.js](<D:/Project/MoeKoeMusic/api/module/search.js>) | `/search` | 按类型搜索歌曲/专辑/歌手/歌单等 | [module.exports](<D:/Project/MoeKoeMusic/api/module/search.js:2>) | [Search.vue](<D:/Project/MoeKoeMusic/src/views/Search.vue>) |
| [search_complex.js](<D:/Project/MoeKoeMusic/api/module/search_complex.js>) | `/search/complex` | 综合搜索多个类别 | [module.exports](<D:/Project/MoeKoeMusic/api/module/search_complex.js:2>) | [Search.vue](<D:/Project/MoeKoeMusic/src/views/Search.vue>) |
| [search_default.js](<D:/Project/MoeKoeMusic/api/module/search_default.js>) | `/search/default` | 搜索默认推荐词 | [module.exports](<D:/Project/MoeKoeMusic/api/module/search_default.js:2>) | 静态未定位直接引用 |
| [search_hot.js](<D:/Project/MoeKoeMusic/api/module/search_hot.js>) | `/search/hot` | 热搜榜/热门词 | [module.exports](<D:/Project/MoeKoeMusic/api/module/search_hot.js:2>) | [RecommendedSearch.vue](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue>) |
| [search_lyric.js](<D:/Project/MoeKoeMusic/api/module/search_lyric.js>) | `/search/lyric` | 按hash等条件搜索歌词候选 | [module.exports](<D:/Project/MoeKoeMusic/api/module/search_lyric.js:4>) | [LyricsHandler.js](<D:/Project/MoeKoeMusic/src/components/player/LyricsHandler.js>) |
| [search_mixed.js](<D:/Project/MoeKoeMusic/api/module/search_mixed.js>) | `/search/mixed` | 另一版混合/综合搜索 | [module.exports](<D:/Project/MoeKoeMusic/api/module/search_mixed.js:3>) | 静态未定位直接引用 |
| [search_suggest.js](<D:/Project/MoeKoeMusic/api/module/search_suggest.js>) | `/search/suggest` | 关键词输入联想建议 | [module.exports](<D:/Project/MoeKoeMusic/api/module/search_suggest.js:1>) | [RecommendedSearch.vue](<D:/Project/MoeKoeMusic/src/views/RecommendedSearch.vue>) |
| [server_now.js](<D:/Project/MoeKoeMusic/api/module/server_now.js>) | `/server/now` | 上游服务器时间 | [module.exports](<D:/Project/MoeKoeMusic/api/module/server_now.js:2>) | 静态未定位直接引用 |
| [sheet_collection.js](<D:/Project/MoeKoeMusic/api/module/sheet_collection.js>) | `/sheet/collection` | 乐谱集合/首页模块 | [module.exports](<D:/Project/MoeKoeMusic/api/module/sheet_collection.js:3>) | 静态未定位直接引用 |
| [sheet_detail.js](<D:/Project/MoeKoeMusic/api/module/sheet_detail.js>) | `/sheet/detail` | 乐谱详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/sheet_detail.js:2>) | 静态未定位直接引用 |
| [sheet_explore.js](<D:/Project/MoeKoeMusic/api/module/sheet_explore.js>) | `/sheet/explore` | 乐谱探索推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/sheet_explore.js:2>) | 静态未定位直接引用 |
| [sheet_rank.js](<D:/Project/MoeKoeMusic/api/module/sheet_rank.js>) | `/sheet/rank` | 乐谱排行榜 | [module.exports](<D:/Project/MoeKoeMusic/api/module/sheet_rank.js:3>) | 静态未定位直接引用 |
| [sheet_song.js](<D:/Project/MoeKoeMusic/api/module/sheet_song.js>) | `/sheet/song` | 乐谱关联歌曲信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/sheet_song.js:2>) | 静态未定位直接引用 |
| [sheet_tags.js](<D:/Project/MoeKoeMusic/api/module/sheet_tags.js>) | `/sheet/tags` | 乐谱分类标签 | [module.exports](<D:/Project/MoeKoeMusic/api/module/sheet_tags.js:3>) | 静态未定位直接引用 |
| [sidedt.js](<D:/Project/MoeKoeMusic/api/module/sidedt.js>) | `/sidedt` | 生成sid/edt并转交验证用户接口 | [module.exports](<D:/Project/MoeKoeMusic/api/module/sidedt.js:19>) | 静态未定位直接引用 |
| [singer_list.js](<D:/Project/MoeKoeMusic/api/module/singer_list.js>) | `/singer/list` | 歌手列表的另一入口 | [module.exports](<D:/Project/MoeKoeMusic/api/module/singer_list.js:2>) | 静态未定位直接引用 |
| [song_climax.js](<D:/Project/MoeKoeMusic/api/module/song_climax.js>) | `/song/climax` | 歌曲高潮点/片段时间 | [module.exports](<D:/Project/MoeKoeMusic/api/module/song_climax.js:3>) | [ProgressBar.js](<D:/Project/MoeKoeMusic/src/components/player/ProgressBar.js>) |
| [song_ranking.js](<D:/Project/MoeKoeMusic/api/module/song_ranking.js>) | `/song/ranking` | 歌曲成绩/排名信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/song_ranking.js:3>) | 静态未定位直接引用 |
| [song_ranking_filter.js](<D:/Project/MoeKoeMusic/api/module/song_ranking_filter.js>) | `/song/ranking/filter` | 歌曲排名筛选条件 | [module.exports](<D:/Project/MoeKoeMusic/api/module/song_ranking_filter.js:3>) | 静态未定位直接引用 |
| [song_url.js](<D:/Project/MoeKoeMusic/api/module/song_url.js>) | `/song/url` | 按hash和音质取得播放地址 | [module.exports](<D:/Project/MoeKoeMusic/api/module/song_url.js:10>) | [OnlineMusicQueue.js](<D:/Project/MoeKoeMusic/src/components/player/songQueue/OnlineMusicQueue.js>) |
| [song_url_new.js](<D:/Project/MoeKoeMusic/api/module/song_url_new.js>) | `/song/url/new` | 另一版播放地址/权限请求 | [module.exports](<D:/Project/MoeKoeMusic/api/module/song_url_new.js:2>) | 静态未定位直接引用 |
| [team_join.js](<D:/Project/MoeKoeMusic/api/module/team_join.js>) | `/team/join` | 加入活动队伍 | [rsaNoPadEncrypt](<D:/Project/MoeKoeMusic/api/module/team_join.js:5>) · [signatureWebParamsWithBody](<D:/Project/MoeKoeMusic/api/module/team_join.js:18>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/team_join.js:28>) | [teamEvent.js](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>) |
| [team_my.js](<D:/Project/MoeKoeMusic/api/module/team_my.js>) | `/team/my` | 创建自己的活动队伍 | [rsaNoPadEncrypt](<D:/Project/MoeKoeMusic/api/module/team_my.js:5>) · [signatureWebParamsWithBody](<D:/Project/MoeKoeMusic/api/module/team_my.js:18>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/team_my.js:28>) | [teamEvent.js](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>) |
| [team_my_info.js](<D:/Project/MoeKoeMusic/api/module/team_my_info.js>) | `/team/my/info` | 个人队伍详情 | [rsaNoPadEncrypt](<D:/Project/MoeKoeMusic/api/module/team_my_info.js:5>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/team_my_info.js:17>) | [teamEvent.js](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>) |
| [team_my_status.js](<D:/Project/MoeKoeMusic/api/module/team_my_status.js>) | `/team/my/status` | 个人活动参与/队伍状态 | [rsaNoPadEncrypt](<D:/Project/MoeKoeMusic/api/module/team_my_status.js:5>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/team_my_status.js:17>) | [teamEvent.js](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>) |
| [team_period_info.js](<D:/Project/MoeKoeMusic/api/module/team_period_info.js>) | `/team/period/info` | 组队活动期次信息 | [rsaNoPadEncrypt](<D:/Project/MoeKoeMusic/api/module/team_period_info.js:5>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/team_period_info.js:17>) | [teamEvent.js](<D:/Project/MoeKoeMusic/src/utils/teamEvent.js>) |
| [theme_music.js](<D:/Project/MoeKoeMusic/api/module/theme_music.js>) | `/theme/music` | 主题歌曲分类推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/theme_music.js:3>) | 静态未定位直接引用 |
| [theme_music_detail.js](<D:/Project/MoeKoeMusic/api/module/theme_music_detail.js>) | `/theme/music/detail` | 指定主题歌曲详情/推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/theme_music_detail.js:2>) | 静态未定位直接引用 |
| [theme_playlist.js](<D:/Project/MoeKoeMusic/api/module/theme_playlist.js>) | `/theme/playlist` | 主题歌单 | [module.exports](<D:/Project/MoeKoeMusic/api/module/theme_playlist.js:3>) | 静态未定位直接引用 |
| [theme_playlist_track.js](<D:/Project/MoeKoeMusic/api/module/theme_playlist_track.js>) | `/theme/playlist/track` | 主题歌单歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/theme_playlist_track.js:3>) | 静态未定位直接引用 |
| [top_album.js](<D:/Project/MoeKoeMusic/api/module/top_album.js>) | `/top/album` | 新专辑推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/top_album.js:4>) | [DiscoverNewAlbumContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewAlbumContent.vue>) |
| [top_card.js](<D:/Project/MoeKoeMusic/api/module/top_card.js>) | `/top/card` | 精选好歌卡片/推荐模块 | [module.exports](<D:/Project/MoeKoeMusic/api/module/top_card.js:10>) | [HomeRecommendations.vue](<D:/Project/MoeKoeMusic/src/components/home/HomeRecommendations.vue>) |
| [top_card_youth.js](<D:/Project/MoeKoeMusic/api/module/top_card_youth.js>) | `/top/card/youth` | 概念版精选推荐卡片 | [module.exports](<D:/Project/MoeKoeMusic/api/module/top_card_youth.js:10>) | 静态未定位直接引用 |
| [top_ip.js](<D:/Project/MoeKoeMusic/api/module/top_ip.js>) | `/top/ip` | 内容IP推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/top_ip.js:7>) | 静态未定位直接引用 |
| [top_playlist.js](<D:/Project/MoeKoeMusic/api/module/top_playlist.js>) | `/top/playlist` | 推荐/分类歌单 | [module.exports](<D:/Project/MoeKoeMusic/api/module/top_playlist.js:6>) | [DiscoverPlaylistContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverPlaylistContent.vue>)、[Home.vue](<D:/Project/MoeKoeMusic/src/views/Home.vue>) |
| [top_song.js](<D:/Project/MoeKoeMusic/api/module/top_song.js>) | `/top/song` | 新歌推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/top_song.js:4>) | [DiscoverNewSongContent.vue](<D:/Project/MoeKoeMusic/src/components/discover/DiscoverNewSongContent.vue>) |
| [top_tag_card_youth.js](<D:/Project/MoeKoeMusic/api/module/top_tag_card_youth.js>) | `/top/tag/card/youth` | 概念版标签盲盒推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/top_tag_card_youth.js:3>) | 静态未定位直接引用 |
| [user_cloud.js](<D:/Project/MoeKoeMusic/api/module/user_cloud.js>) | `/user/cloud` | 用户云盘列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_cloud.js:2>) | [CloudDrive.vue](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue>) |
| [user_cloud_del.js](<D:/Project/MoeKoeMusic/api/module/user_cloud_del.js>) | `/user/cloud/del` | 删除用户云盘文件 | [splitList](<D:/Project/MoeKoeMusic/api/module/user_cloud_del.js:4>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/user_cloud_del.js:22>) | [CloudDrive.vue](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue>) |
| [user_cloud_match.js](<D:/Project/MoeKoeMusic/api/module/user_cloud_match.js>) | `/user/cloud/match` | 上传前匹配云盘音频元数据 | [fileMd5](<D:/Project/MoeKoeMusic/api/module/user_cloud_match.js:5>) · [splitList](<D:/Project/MoeKoeMusic/api/module/user_cloud_match.js:7>) · [firstCandidate](<D:/Project/MoeKoeMusic/api/module/user_cloud_match.js:14>) · [normalizeMatch](<D:/Project/MoeKoeMusic/api/module/user_cloud_match.js:16>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/user_cloud_match.js:36>) | 静态未定位直接引用 |
| [user_cloud_upload.js](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js>) | `/user/cloud/upload` | 云盘上传授权、分片上传、完成及文件登记 | [fileMd5](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:20>) · [bssVerifyCode](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:21>) · [boolParam](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:22>) · [firstCandidate](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:26>) · [normalizeMatch](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:27>) · [extractMatch](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:44>) · [withProtocol](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:50>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:52>) · [signBssParams](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:102>) · [http](<D:/Project/MoeKoeMusic/api/module/user_cloud_upload.js:108>) | [CloudDrive.vue](<D:/Project/MoeKoeMusic/src/views/CloudDrive.vue>) |
| [user_cloud_url.js](<D:/Project/MoeKoeMusic/api/module/user_cloud_url.js>) | `/user/cloud/url` | 用户云盘播放地址 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_cloud_url.js:3>) | [CloudMusicQueue.js](<D:/Project/MoeKoeMusic/src/components/player/songQueue/CloudMusicQueue.js>) |
| [user_detail.js](<D:/Project/MoeKoeMusic/api/module/user_detail.js>) | `/user/detail` | 用户详细资料 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_detail.js:2>) | [Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [user_follow.js](<D:/Project/MoeKoeMusic/api/module/user_follow.js>) | `/user/follow` | 用户关注列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_follow.js:5>) | [Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [user_follow_message.js](<D:/Project/MoeKoeMusic/api/module/user_follow_message.js>) | `/user/follow/message` | 用户关注/消息历史 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_follow_message.js:4>) | 静态未定位直接引用 |
| [user_grade_info.js](<D:/Project/MoeKoeMusic/api/module/user_grade_info.js>) | `/user/grade/info` | 用户等级信息及听歌时间相关上报 | [v4Headers](<D:/Project/MoeKoeMusic/api/module/user_grade_info.js:38>) · [buildV4](<D:/Project/MoeKoeMusic/api/module/user_grade_info.js:48>) · [buildV2](<D:/Project/MoeKoeMusic/api/module/user_grade_info.js:116>) · [module.exports](<D:/Project/MoeKoeMusic/api/module/user_grade_info.js:182>) | 静态未定位直接引用 |
| [user_history.js](<D:/Project/MoeKoeMusic/api/module/user_history.js>) | `/user/history` | 用户听歌历史 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_history.js:2>) | 静态未定位直接引用 |
| [user_listen.js](<D:/Project/MoeKoeMusic/api/module/user_listen.js>) | `/user/listen` | 用户听歌排行/列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_listen.js:2>) | [Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [user_playlist.js](<D:/Project/MoeKoeMusic/api/module/user_playlist.js>) | `/user/playlist` | 用户歌单列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_playlist.js:3>) | [ContextMenu.vue](<D:/Project/MoeKoeMusic/src/components/ContextMenu.vue>)、[PlaylistSelectModal.vue](<D:/Project/MoeKoeMusic/src/components/PlaylistSelectModal.vue>)、[SidebarNavigation.vue](<D:/Project/MoeKoeMusic/src/components/SidebarNavigation.vue>)、[Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [user_purchased_albums.js](<D:/Project/MoeKoeMusic/api/module/user_purchased_albums.js>) | `/user/purchased/albums` | 已购买专辑 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_purchased_albums.js:4>) | 静态未定位直接引用 |
| [user_purchased_songs.js](<D:/Project/MoeKoeMusic/api/module/user_purchased_songs.js>) | `/user/purchased/songs` | 已购买歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_purchased_songs.js:4>) | 静态未定位直接引用 |
| [user_video_collect.js](<D:/Project/MoeKoeMusic/api/module/user_video_collect.js>) | `/user/video/collect` | 收藏视频列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_video_collect.js:5>) | 静态未定位直接引用 |
| [user_video_love.js](<D:/Project/MoeKoeMusic/api/module/user_video_love.js>) | `/user/video/love` | 点赞视频列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_video_love.js:5>) | 静态未定位直接引用 |
| [user_vip_detail.js](<D:/Project/MoeKoeMusic/api/module/user_vip_detail.js>) | `/user/vip/detail` | 用户VIP详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/user_vip_detail.js:1>) | [Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [verify_user_info.js](<D:/Project/MoeKoeMusic/api/module/verify_user_info.js>) | `/verify/user/info` | 提交风控验证结果 | [module.exports](<D:/Project/MoeKoeMusic/api/module/verify_user_info.js:3>) | 静态未定位直接引用 |
| [video_detail.js](<D:/Project/MoeKoeMusic/api/module/video_detail.js>) | `/video/detail` | 视频详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/video_detail.js:3>) | 静态未定位直接引用 |
| [video_privilege.js](<D:/Project/MoeKoeMusic/api/module/video_privilege.js>) | `/video/privilege` | 视频权限 | [module.exports](<D:/Project/MoeKoeMusic/api/module/video_privilege.js:4>) | 静态未定位直接引用 |
| [video_url.js](<D:/Project/MoeKoeMusic/api/module/video_url.js>) | `/video/url` | 视频播放地址 | [module.exports](<D:/Project/MoeKoeMusic/api/module/video_url.js:2>) | [VideoPlayer.vue](<D:/Project/MoeKoeMusic/src/views/VideoPlayer.vue>) |
| [youth_channel_all.js](<D:/Project/MoeKoeMusic/api/module/youth_channel_all.js>) | `/youth/channel/all` | 概念版全部频道列表 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_channel_all.js:1>) | 静态未定位直接引用 |
| [youth_channel_amway.js](<D:/Project/MoeKoeMusic/api/module/youth_channel_amway.js>) | `/youth/channel/amway` | 概念版安利频道内容 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_channel_amway.js:1>) | 静态未定位直接引用 |
| [youth_channel_detail.js](<D:/Project/MoeKoeMusic/api/module/youth_channel_detail.js>) | `/youth/channel/detail` | 概念版频道详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_channel_detail.js:1>) | 静态未定位直接引用 |
| [youth_channel_similar.js](<D:/Project/MoeKoeMusic/api/module/youth_channel_similar.js>) | `/youth/channel/similar` | 概念版相似/友好频道 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_channel_similar.js:1>) | 静态未定位直接引用 |
| [youth_channel_song.js](<D:/Project/MoeKoeMusic/api/module/youth_channel_song.js>) | `/youth/channel/song` | 概念版频道审核通过歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_channel_song.js:2>) | 静态未定位直接引用 |
| [youth_channel_song_detail.js](<D:/Project/MoeKoeMusic/api/module/youth_channel_song_detail.js>) | `/youth/channel/song/detail` | 概念版歌曲帖子详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_channel_song_detail.js:2>) | 静态未定位直接引用 |
| [youth_channel_sub.js](<D:/Project/MoeKoeMusic/api/module/youth_channel_sub.js>) | `/youth/channel/sub` | 概念版频道订阅/取消订阅 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_channel_sub.js:1>) | 静态未定位直接引用 |
| [youth_day_vip.js](<D:/Project/MoeKoeMusic/api/module/youth_day_vip.js>) | `/youth/day/vip` | 领取当天听歌VIP奖励 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_day_vip.js:4>) | [Helpers.js](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js>)、[Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [youth_day_vip_upgrade.js](<D:/Project/MoeKoeMusic/api/module/youth_day_vip_upgrade.js>) | `/youth/day/vip/upgrade` | 升级听歌VIP奖励 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_day_vip_upgrade.js:4>) | [Helpers.js](<D:/Project/MoeKoeMusic/src/components/player/Helpers.js>)、[Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [youth_dynamic.js](<D:/Project/MoeKoeMusic/api/module/youth_dynamic.js>) | `/youth/dynamic` | 概念版用户动态 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_dynamic.js:2>) | 静态未定位直接引用 |
| [youth_dynamic_recent.js](<D:/Project/MoeKoeMusic/api/module/youth_dynamic_recent.js>) | `/youth/dynamic/recent` | 概念版最近动态 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_dynamic_recent.js:2>) | 静态未定位直接引用 |
| [youth_listen_song.js](<D:/Project/MoeKoeMusic/api/module/youth_listen_song.js>) | `/youth/listen/song` | 概念版听歌上报/VIP活动 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_listen_song.js:2>) | 静态未定位直接引用 |
| [youth_month_vip_record.js](<D:/Project/MoeKoeMusic/api/module/youth_month_vip_record.js>) | `/youth/month/vip/record` | 概念版月VIP活动记录 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_month_vip_record.js:2>) | 静态未定位直接引用 |
| [youth_union_vip.js](<D:/Project/MoeKoeMusic/api/module/youth_union_vip.js>) | `/youth/union/vip` | 概念版联合VIP详情 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_union_vip.js:2>) | 静态未定位直接引用 |
| [youth_user_song.js](<D:/Project/MoeKoeMusic/api/module/youth_user_song.js>) | `/youth/user/song` | 概念版用户公开歌曲 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_user_song.js:2>) | 静态未定位直接引用 |
| [youth_vip.js](<D:/Project/MoeKoeMusic/api/module/youth_vip.js>) | `/youth/vip` | 概念版VIP活动上报/领取 | [module.exports](<D:/Project/MoeKoeMusic/api/module/youth_vip.js:2>) | [Library.vue](<D:/Project/MoeKoeMusic/src/views/Library.vue>) |
| [yueku.js](<D:/Project/MoeKoeMusic/api/module/yueku.js>) | `/yueku` | 音乐库内容推荐 | [module.exports](<D:/Project/MoeKoeMusic/api/module/yueku.js:3>) | 静态未定位直接引用 |
| [yueku_banner.js](<D:/Project/MoeKoeMusic/api/module/yueku_banner.js>) | `/yueku/banner` | 音乐库banner | [module.exports](<D:/Project/MoeKoeMusic/api/module/yueku_banner.js:3>) | 静态未定位直接引用 |
| [yueku_fm.js](<D:/Project/MoeKoeMusic/api/module/yueku_fm.js>) | `/yueku/fm` | 音乐库FM信息 | [module.exports](<D:/Project/MoeKoeMusic/api/module/yueku_fm.js:3>) | 静态未定位直接引用 |

上表覆盖全部模块。参数类型/响应示例见 [API文档](<D:/Project/MoeKoeMusic/api/docs/README.md>) 和 [类型声明](<D:/Project/MoeKoeMusic/api/interface.d.ts>)；少数声明可能与运行模块不同步，最终以模块执行代码为准。

## 界面语言与样式

| 文件 | 作用 |
| --- | --- |
| [src/assets/images/tray/tray-icon.png](<D:/Project/MoeKoeMusic/src/assets/images/tray/tray-icon.png>) | 界面源码引用的图片资源，主要供托盘/状态栏标志使用。 |
| [src/assets/images/tray/tray-icon@2x.png](<D:/Project/MoeKoeMusic/src/assets/images/tray/tray-icon@2x.png>) | 界面源码引用的图片资源，主要供托盘/状态栏标志使用。 |
| [src/assets/style/PlayerControl.scss](<D:/Project/MoeKoeMusic/src/assets/style/PlayerControl.scss>) | 播放器与全屏歌词界面样式，集中处理播放器布局和视觉状态。 |
| [src/assets/themes/dark.scss](<D:/Project/MoeKoeMusic/src/assets/themes/dark.scss>) | 深色主题全局覆盖样式，按暗色类调整各页面组件颜色。 |
| [src/language/en.json](<D:/Project/MoeKoeMusic/src/language/en.json>) | Vue界面语言文案：en，由 utils/i18n.js载入。 |
| [src/language/ja.json](<D:/Project/MoeKoeMusic/src/language/ja.json>) | Vue界面语言文案：ja，由 utils/i18n.js载入。 |
| [src/language/ko.json](<D:/Project/MoeKoeMusic/src/language/ko.json>) | Vue界面语言文案：ko，由 utils/i18n.js载入。 |
| [src/language/ru.json](<D:/Project/MoeKoeMusic/src/language/ru.json>) | Vue界面语言文案：ru，由 utils/i18n.js载入。 |
| [src/language/zh-CN.json](<D:/Project/MoeKoeMusic/src/language/zh-CN.json>) | Vue界面语言文案：zh-CN，由 utils/i18n.js载入。 |
| [src/language/zh-TW.json](<D:/Project/MoeKoeMusic/src/language/zh-TW.json>) | Vue界面语言文案：zh-TW，由 utils/i18n.js载入。 |

## 公开静态资源

| 文件 | 作用 |
| --- | --- |
| [public/assets/font-awesome/css/all.min.css](<D:/Project/MoeKoeMusic/public/assets/font-awesome/css/all.min.css>) | Font Awesome第三方图标素材：CSS图标类定义。 |
| [public/assets/font-awesome/webfonts/fa-brands-400.ttf](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-brands-400.ttf>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/font-awesome/webfonts/fa-brands-400.woff2](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-brands-400.woff2>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/font-awesome/webfonts/fa-regular-400.ttf](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-regular-400.ttf>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/font-awesome/webfonts/fa-regular-400.woff2](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-regular-400.woff2>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/font-awesome/webfonts/fa-solid-900.ttf](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-solid-900.ttf>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/font-awesome/webfonts/fa-solid-900.woff2](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-solid-900.woff2>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/font-awesome/webfonts/fa-v4compatibility.ttf](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-v4compatibility.ttf>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/font-awesome/webfonts/fa-v4compatibility.woff2](<D:/Project/MoeKoeMusic/public/assets/font-awesome/webfonts/fa-v4compatibility.woff2>) | Font Awesome第三方图标素材：图标字体文件；与 CSS类名配套。 |
| [public/assets/images/!.png](<D:/Project/MoeKoeMusic/public/assets/images/!.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/arona.png](<D:/Project/MoeKoeMusic/public/assets/images/arona.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/banner.png](<D:/Project/MoeKoeMusic/public/assets/images/banner.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/banners.png](<D:/Project/MoeKoeMusic/public/assets/images/banners.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/cloud-disk.png](<D:/Project/MoeKoeMusic/public/assets/images/cloud-disk.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/cloud.png](<D:/Project/MoeKoeMusic/public/assets/images/cloud.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/empty.png](<D:/Project/MoeKoeMusic/public/assets/images/empty.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/empty1.png](<D:/Project/MoeKoeMusic/public/assets/images/empty1.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/head.png](<D:/Project/MoeKoeMusic/public/assets/images/head.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/home/hutao.png](<D:/Project/MoeKoeMusic/public/assets/images/home/hutao.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/home/hutao1.png](<D:/Project/MoeKoeMusic/public/assets/images/home/hutao1.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/home/hutao2.png](<D:/Project/MoeKoeMusic/public/assets/images/home/hutao2.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/home/mama.png](<D:/Project/MoeKoeMusic/public/assets/images/home/mama.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/ico.png](<D:/Project/MoeKoeMusic/public/assets/images/ico.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/live.png](<D:/Project/MoeKoeMusic/public/assets/images/live.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/local-music.png](<D:/Project/MoeKoeMusic/public/assets/images/local-music.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/local.png](<D:/Project/MoeKoeMusic/public/assets/images/local.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/logo.png](<D:/Project/MoeKoeMusic/public/assets/images/logo.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/mascotGirl.png](<D:/Project/MoeKoeMusic/public/assets/images/mascotGirl.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/miku.png](<D:/Project/MoeKoeMusic/public/assets/images/miku.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/miku2.png](<D:/Project/MoeKoeMusic/public/assets/images/miku2.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/miku3.png](<D:/Project/MoeKoeMusic/public/assets/images/miku3.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/profile.jpg](<D:/Project/MoeKoeMusic/public/assets/images/profile.jpg>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/recognize-bg.png](<D:/Project/MoeKoeMusic/public/assets/images/recognize-bg.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/ti111mg.png](<D:/Project/MoeKoeMusic/public/assets/images/ti111mg.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/vip.png](<D:/Project/MoeKoeMusic/public/assets/images/vip.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/images/vip2.png](<D:/Project/MoeKoeMusic/public/assets/images/vip2.png>) | 直接复制的前端静态资源：界面图片。 |
| [public/assets/sound/qiqi-jp.mp3](<D:/Project/MoeKoeMusic/public/assets/sound/qiqi-jp.mp3>) | 直接复制的前端静态资源：音效/音乐。 |
| [public/assets/sound/qiqi-zh.mp3](<D:/Project/MoeKoeMusic/public/assets/sound/qiqi-zh.mp3>) | 直接复制的前端静态资源：音效/音乐。 |
| [public/assets/sound/yise-jp.mp3](<D:/Project/MoeKoeMusic/public/assets/sound/yise-jp.mp3>) | 直接复制的前端静态资源：音效/音乐。 |
| [public/favicon.ico](<D:/Project/MoeKoeMusic/public/favicon.ico>) | 直接复制的前端静态资源：网页图标。 |

## 桌面打包素材

| 文件 | 作用 |
| --- | --- |
| [build/icons/festival/autumn.ico](<D:/Project/MoeKoeMusic/build/icons/festival/autumn.ico>) | 桌面/安装构建素材：节日/生日快捷方式图标。 |
| [build/icons/festival/christmas.ico](<D:/Project/MoeKoeMusic/build/icons/festival/christmas.ico>) | 桌面/安装构建素材：节日/生日快捷方式图标。 |
| [build/icons/festival/ghost.ico](<D:/Project/MoeKoeMusic/build/icons/festival/ghost.ico>) | 桌面/安装构建素材：节日/生日快捷方式图标。 |
| [build/icons/festival/halloween.ico](<D:/Project/MoeKoeMusic/build/icons/festival/halloween.ico>) | 桌面/安装构建素材：节日/生日快捷方式图标。 |
| [build/icons/festival/newyear.ico](<D:/Project/MoeKoeMusic/build/icons/festival/newyear.ico>) | 桌面/安装构建素材：节日/生日快捷方式图标。 |
| [build/icons/festival/shopping.ico](<D:/Project/MoeKoeMusic/build/icons/festival/shopping.ico>) | 桌面/安装构建素材：节日/生日快捷方式图标。 |
| [build/icons/festival/springfest.ico](<D:/Project/MoeKoeMusic/build/icons/festival/springfest.ico>) | 桌面/安装构建素材：节日/生日快捷方式图标。 |
| [build/icons/icon.icns](<D:/Project/MoeKoeMusic/build/icons/icon.icns>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/icon.ico](<D:/Project/MoeKoeMusic/build/icons/icon.ico>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/linux-icon.png](<D:/Project/MoeKoeMusic/build/icons/linux-icon.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/linux/128x128.png](<D:/Project/MoeKoeMusic/build/icons/linux/128x128.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/linux/16x16.png](<D:/Project/MoeKoeMusic/build/icons/linux/16x16.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/linux/24x24.png](<D:/Project/MoeKoeMusic/build/icons/linux/24x24.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/linux/256x256.png](<D:/Project/MoeKoeMusic/build/icons/linux/256x256.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/linux/32x32.png](<D:/Project/MoeKoeMusic/build/icons/linux/32x32.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/linux/48x48.png](<D:/Project/MoeKoeMusic/build/icons/linux/48x48.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/linux/512x512.png](<D:/Project/MoeKoeMusic/build/icons/linux/512x512.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/linux/64x64.png](<D:/Project/MoeKoeMusic/build/icons/linux/64x64.png>) | 桌面/安装构建素材：Linux桌面图标各尺寸。 |
| [build/icons/logo.png](<D:/Project/MoeKoeMusic/build/icons/logo.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/mac-ico.png](<D:/Project/MoeKoeMusic/build/icons/mac-ico.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/menu/bug.png](<D:/Project/MoeKoeMusic/build/icons/menu/bug.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/home.png](<D:/Project/MoeKoeMusic/build/icons/menu/home.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/next.png](<D:/Project/MoeKoeMusic/build/icons/menu/next.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/play.png](<D:/Project/MoeKoeMusic/build/icons/menu/play.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/prev.png](<D:/Project/MoeKoeMusic/build/icons/menu/prev.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/quit.png](<D:/Project/MoeKoeMusic/build/icons/menu/quit.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/restart.png](<D:/Project/MoeKoeMusic/build/icons/menu/restart.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/show.png](<D:/Project/MoeKoeMusic/build/icons/menu/show.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/menu/update.png](<D:/Project/MoeKoeMusic/build/icons/menu/update.png>) | 桌面/安装构建素材：原生菜单动作图标。 |
| [build/icons/next.png](<D:/Project/MoeKoeMusic/build/icons/next.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/pause.png](<D:/Project/MoeKoeMusic/build/icons/pause.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/play.png](<D:/Project/MoeKoeMusic/build/icons/play.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/prev.png](<D:/Project/MoeKoeMusic/build/icons/prev.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/tray-icon.ico](<D:/Project/MoeKoeMusic/build/icons/tray-icon.ico>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/tray-icon.png](<D:/Project/MoeKoeMusic/build/icons/tray-icon.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/icons/tray-icon@2x.png](<D:/Project/MoeKoeMusic/build/icons/tray-icon@2x.png>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/installer.nsh](<D:/Project/MoeKoeMusic/build/installer.nsh>) | NSIS自定义安装宏：欢迎页、链接、moekoe协议注册和快捷方式处理。 |
| [build/installerSidebar.bmp](<D:/Project/MoeKoeMusic/build/installerSidebar.bmp>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |
| [build/license.txt](<D:/Project/MoeKoeMusic/build/license.txt>) | 安装器展示的许可证/说明文本。 |
| [build/uninstallerSidebar.bmp](<D:/Project/MoeKoeMusic/build/uninstallerSidebar.bmp>) | 桌面/安装构建素材：应用、托盘或安装器图片/图标，实际用途由打包配置和图标选择代码决定。 |

## 项目展示图片

| 文件 | 作用 |
| --- | --- |
| [images/1.png](<D:/Project/MoeKoeMusic/images/1.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/10.png](<D:/Project/MoeKoeMusic/images/10.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/11.png](<D:/Project/MoeKoeMusic/images/11.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/2.png](<D:/Project/MoeKoeMusic/images/2.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/3.png](<D:/Project/MoeKoeMusic/images/3.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/4.png](<D:/Project/MoeKoeMusic/images/4.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/5.png](<D:/Project/MoeKoeMusic/images/5.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/6.png](<D:/Project/MoeKoeMusic/images/6.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/7.png](<D:/Project/MoeKoeMusic/images/7.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/8.png](<D:/Project/MoeKoeMusic/images/8.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/9.png](<D:/Project/MoeKoeMusic/images/9.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |
| [images/hero.png](<D:/Project/MoeKoeMusic/images/hero.png>) | 项目介绍/README展示图片，不是歌曲数据处理模块。 |

## 插件目录文档

| 文件 | 作用 |
| --- | --- |
| [plugins/extensions/README.md](<D:/Project/MoeKoeMusic/plugins/extensions/README.md>) | 开发环境 Chrome扩展目录结构、Manifest与插件开发/安装指导。 |

## GitHub模板、治理和发布流程

| 文件 | 作用 |
| --- | --- |
| [.github/ISSUE_TEMPLATE/bug_report.yml](<D:/Project/MoeKoeMusic/.github/ISSUE_TEMPLATE/bug_report.yml>) | Bug反馈表单：复现、平台、版本等资料。 |
| [.github/ISSUE_TEMPLATE/config.yml](<D:/Project/MoeKoeMusic/.github/ISSUE_TEMPLATE/config.yml>) | GitHub Issue创建页的模板与联系入口配置。 |
| [.github/ISSUE_TEMPLATE/discussion.yml](<D:/Project/MoeKoeMusic/.github/ISSUE_TEMPLATE/discussion.yml>) | 项目讨论的 Issue表单。 |
| [.github/ISSUE_TEMPLATE/feature_request.yml](<D:/Project/MoeKoeMusic/.github/ISSUE_TEMPLATE/feature_request.yml>) | 功能建议的 Issue表单。 |
| [.github/PULL_REQUEST_TEMPLATE.md](<D:/Project/MoeKoeMusic/.github/PULL_REQUEST_TEMPLATE.md>) | 默认 PR描述清单与模板。 |
| [.github/PULL_REQUEST_TEMPLATE/bug_fix.md](<D:/Project/MoeKoeMusic/.github/PULL_REQUEST_TEMPLATE/bug_fix.md>) | Bug修复 PR模板。 |
| [.github/PULL_REQUEST_TEMPLATE/docs_update.md](<D:/Project/MoeKoeMusic/.github/PULL_REQUEST_TEMPLATE/docs_update.md>) | 文档改动 PR模板。 |
| [.github/PULL_REQUEST_TEMPLATE/feature_request.md](<D:/Project/MoeKoeMusic/.github/PULL_REQUEST_TEMPLATE/feature_request.md>) | 功能 PR模板。 |
| [.github/SECURITY.md](<D:/Project/MoeKoeMusic/.github/SECURITY.md>) | 安全问题报告和维护版本说明，供维护者/贡献者使用。 |
| [.github/workflows/AiIssueCheck.yml](<D:/Project/MoeKoeMusic/.github/workflows/AiIssueCheck.yml>) | 在 Issue创建/指定编辑时调用配置的模型服务判断资料是否完整，评论并调整标签。 |
| [.github/workflows/AutoCloseIssues.yml](<D:/Project/MoeKoeMusic/.github/workflows/AutoCloseIssues.yml>) | 定时处理超过24小时未更新的 invalid Issue，修改机器人评论并关闭。 |
| [.github/workflows/release.yml](<D:/Project/MoeKoeMusic/.github/workflows/release.yml>) | 主项目跨平台 Release发布；上一轮同步构建版本、独立测试步骤和最终统一公开草稿。 |
| [.github/workflows/version.yml](<D:/Project/MoeKoeMusic/.github/workflows/version.yml>) | 手动计算并展示下一个版本和变更；不构建或自动安装应用。 |

## API子仓库文档与CI

| 文件 | 作用 |
| --- | --- |
| [api/.github/workflows/build.yml](<D:/Project/MoeKoeMusic/api/.github/workflows/build.yml>) | API子仓库自身的 CI构建，独立于主项目 Release流程。 |
| [api/docs/.nojekyll](<D:/Project/MoeKoeMusic/api/docs/.nojekyll>) | 文档静态站关闭 Jekyll处理的标记文件。 |
| [api/docs/README.md](<D:/Project/MoeKoeMusic/api/docs/README.md>) | API公开路由、参数和响应的详细使用手册。 |
| [api/docs/_coverpage.md](<D:/Project/MoeKoeMusic/api/docs/_coverpage.md>) | API文档站封面内容。 |
| [api/docs/index.html](<D:/Project/MoeKoeMusic/api/docs/index.html>) | API文档站 HTML入口，加载文档渲染与配置。 |
| [api/module/.gitignore](<D:/Project/MoeKoeMusic/api/module/.gitignore>) | API模块目录的忽略规则。 |

## 项目文档与更新测试

| 文件 | 作用 |
| --- | --- |
| [docs/AUTO_UPDATE_REVIEW.md](<D:/Project/MoeKoeMusic/docs/AUTO_UPDATE_REVIEW.md>) | 上一轮新增：自动更新原逻辑分析、逐文件修改说明、平台限制、测试结果和真实安装验收步骤。 |
| [docs/PROJECT_FILE_REFERENCE.md](<D:/Project/MoeKoeMusic/docs/PROJECT_FILE_REFERENCE.md>) | 本轮新增：逐文件职责、函数位置和 API路由索引。 |
| [docs/PROJECT_GUIDE.md](<D:/Project/MoeKoeMusic/docs/PROJECT_GUIDE.md>) | 本轮新增：整体项目架构、执行链路和推荐阅读路线。 |
| [docs/README_en.md](<D:/Project/MoeKoeMusic/docs/README_en.md>) | 主项目 README的对应语言译本：en。 |
| [docs/README_ja.md](<D:/Project/MoeKoeMusic/docs/README_ja.md>) | 主项目 README的对应语言译本：ja。 |
| [docs/README_ko.md](<D:/Project/MoeKoeMusic/docs/README_ko.md>) | 主项目 README的对应语言译本：ko。 |
| [docs/README_ru.md](<D:/Project/MoeKoeMusic/docs/README_ru.md>) | 主项目 README的对应语言译本：ru。 |
| [docs/README_tw.md](<D:/Project/MoeKoeMusic/docs/README_tw.md>) | 主项目 README的对应语言译本：tw。 |
| [tests/updateDialog.test.js](<D:/Project/MoeKoeMusic/tests/updateDialog.test.js>) | 上一轮新增：实际编译/挂载Vue更新SFC，验证状态竞争、重建恢复和 preload监听解绑。 |
| [tests/updater.test.js](<D:/Project/MoeKoeMusic/tests/updater.test.js>) | 上一轮新增：模拟更新器，验证支持环境、状态、并发、下载/校验失败重试、安装门槛和版本比较。 |

## 如何使用这份索引

查功能先读职责，再打开具名函数。看到 imports只表示静态依赖，不表示调用顺序；异步顺序应结合 Promise、生命周期钩子和事件订阅阅读。看到 localStorage键不表示那是全部持久化数据，Pinia、IndexedDB和 electron-store另有链路。

API模块大量共用同一模板：读取params/cookie → 构造上游data/params → 调统一useAxios → 返回/转换answer。理解 server.js和 util/request.js后，再按需要阅读单个模块，通常比逐个重复阅读更清晰。

上一轮涉及的业务修改保持待审查状态。本轮仅提供说明和导航，不把静态阅读结论当成真实运行/真实安装验收结果。

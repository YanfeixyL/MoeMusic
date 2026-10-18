import { ref } from 'vue';


export function useHelpers() {
  const isInputFocused = ref(false);
  
  // 环境检测
  const isElectron = () => {
    return typeof window !== 'undefined' && typeof window.electron !== 'undefined';
  };
  
  // 音量滚轮处理
  const handleVolumeScroll = (event, volume, changeVolume) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY) * -1;
    volume.value = Math.min(Math.max(volume.value + delta * 10, 0), 100);
    changeVolume();
  };
  
  // 检查输入框焦点
  const checkFocus = () => {
    isInputFocused.value = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
  };
  
  // 键盘快捷键处理
  const handleKeyDown = (event, handlers, isInputFocused) => {
    if(isInputFocused) return;
    
    switch (event.code) {
      case 'Space':
        event.preventDefault();
        handlers.togglePlayPause();
        break;
      case 'ArrowLeft':
        handlers.playSongFromQueue('previous');
        break;
      case 'ArrowRight':
        handlers.playSongFromQueue('next');
        break;
      case 'Escape':
        if(handlers.showLyrics){
          handlers.toggleLyrics();
        }
        break;
    }
  };
  
  // 桌面歌词控制
  const desktopLyrics = () => {
    if (!isElectron()) return;
    
    let savedConfig = JSON.parse(localStorage.getItem('settings')) || {};
    if(!savedConfig?.desktopLyrics) savedConfig.desktopLyrics = 'off';
    let action = savedConfig?.desktopLyrics === 'off' ? 'display-lyrics' : 'close-lyrics';
    window.electron.ipcRenderer.send('desktop-lyrics-action', action);
    savedConfig.desktopLyrics = action === 'display-lyrics' ? 'on' : 'off';
    localStorage.setItem('settings', JSON.stringify(savedConfig));
    window.electron.ipcRenderer.send('save-settings', JSON.parse(JSON.stringify(savedConfig)));
  };
  
  // 节流函数
  const throttle = (func, delay) => {
    let lastTime = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastTime >= delay) {
        lastTime = now;
        func.apply(this, args);
      }
    };
  };
  
  return {
    isInputFocused,
    isElectron,
    handleVolumeScroll,
    checkFocus,
    handleKeyDown,
    desktopLyrics,
    throttle
  };
}

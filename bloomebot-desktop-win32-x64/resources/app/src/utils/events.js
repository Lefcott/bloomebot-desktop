const { ipcRenderer } = window;

delete window.ipcRenderer;

export const sendEvent = (name, ...args) => ipcRenderer.sendSync(name, ...args);

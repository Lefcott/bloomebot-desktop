import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
import './listener';
import './updater';

let mainWindow;

function createWindow() {
  try {
    mainWindow = new BrowserWindow({
      // icon: `${__dirname}\\favicon.ico`,
      width: 852,
      height: 480,
      center: true,
      hasShadow: true,
      webPreferences: { nodeIntegration: true, preload: `${__dirname}/preload.js`, devTools: isDev }
    });
  } catch (e) {
    console.error(e);
  }
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../index.html')}`);
  if (isDev) mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => mainWindow === null && createWindow());

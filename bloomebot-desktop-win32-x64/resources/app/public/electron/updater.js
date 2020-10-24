import isDev from 'electron-is-dev';

import startUpdater from 'update-electron-app';

if (!isDev) startUpdater({ repo: 'lefcott/bloomebot-desktop' });

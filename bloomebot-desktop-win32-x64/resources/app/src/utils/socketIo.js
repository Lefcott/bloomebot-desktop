import socketIo from 'socket.io-client';

import env from '../env.json';

export const socket = socketIo(env.API_URL_BASE);

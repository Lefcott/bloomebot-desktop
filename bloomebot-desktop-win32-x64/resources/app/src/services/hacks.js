import { request } from '../utils/request';
import env from '../env.json';

export const getHacks = () =>
  request.axios({
    options: {
      url: `${env.API_URL_BASE}/api/hacks`,
      method: 'get'
    }
  });

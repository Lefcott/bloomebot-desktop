import { request } from '../utils/request';
import env from '../env';

export const logout = () =>
  request.axios({
    options: {
      url: `${env.API_URL_BASE}/api/logout`,
      method: 'post'
    }
  });

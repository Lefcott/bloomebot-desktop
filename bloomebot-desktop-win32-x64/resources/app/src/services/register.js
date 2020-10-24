import { request } from '../utils/request';
import env from '../env.json';

export const register = (email, password, name, surname) =>
  request.axios({
    options: {
      url: `${env.API_URL_BASE}/api/register`,
      method: 'post',
      data: { email, password, name, surname }
    }
  });

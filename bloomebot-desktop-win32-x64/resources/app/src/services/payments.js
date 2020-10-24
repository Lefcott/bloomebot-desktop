import { request } from '../utils/request';
import env from '../env';

export const getHackOrder = (platform, hack, licenceID) =>
  request.axios({
    options: {
      url: `${env.API_URL_BASE}/api/payment_order`,
      method: 'get',
      params: { platform, type: 'hack', hack_code: hack.code, licence_id: licenceID }
    }
  });

export const activatePayment = order_id =>
  request.axios({
    options: {
      url: `${env.API_URL_BASE}/api/activate_payment`,
      method: 'post',
      data: { order_id }
    }
  });

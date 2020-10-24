import { SET_CURRENT_USER } from './constants';

export const setUser = user => ({ type: SET_CURRENT_USER, payload: user });

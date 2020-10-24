import * as SCREEN_ACTIONS from '../actions/screen/constants';
import { SCREENS } from '../constants';

export default (state = SCREENS.LOGIN, action = {}) => {
  switch (action.type) {
    case SCREEN_ACTIONS.SET_SCREEN: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

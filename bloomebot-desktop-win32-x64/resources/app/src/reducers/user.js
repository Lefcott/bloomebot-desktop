import * as USER_ACTIONS from '../actions/user/constants';

export default (state = null, action = {}) => {
  switch (action.type) {
    case USER_ACTIONS.SET_CURRENT_USER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

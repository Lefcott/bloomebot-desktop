import * as HACK_ACTIONS from '../actions/hacks/constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case HACK_ACTIONS.SET_HACKS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

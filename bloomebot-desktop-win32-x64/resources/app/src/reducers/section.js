import * as SECTION_ACTIONS from '../actions/section/constants';
import { SECTIONS } from '../constants';

export default (state = SECTIONS.HACK_LIST, action = {}) => {
  switch (action.type) {
    case SECTION_ACTIONS.SET_SECTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

import * as LANGUAGE_ACTIONS from '../actions/language/constants';
import { LANGUAGES } from '../components/LanguageSelector/constants';

export default (state = LANGUAGES.EN, action = {}) => {
  switch (action.type) {
    case LANGUAGE_ACTIONS.SET_LANGUAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

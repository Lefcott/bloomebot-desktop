import { combineReducers } from 'redux';

import user from './user';
import language from './language';
import screen from './screen';
import section from './section';
import hacks from './hacks';

export default combineReducers({
  user,
  language,
  screen,
  section,
  hacks
});

import { combineReducers } from 'redux';

import me from './me';
import match from './match';
import users from './users';

export default combineReducers({
  me,
  match,
  users,
});

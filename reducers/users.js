import { handleActions } from 'redux-actions';
import * as USERS from '../actions/users';

export const INITIAL_STATE = [];

export default handleActions({
  [USERS.GET_NEXT.FULFILLED]: (state, action) => action.payload.data,
}, INITIAL_STATE);

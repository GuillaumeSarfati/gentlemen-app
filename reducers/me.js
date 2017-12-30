import { handleActions } from 'redux-actions';
import * as ME from '../actions/me';

export const INITIAL_STATE = {
  member: null,
  token: null,
};

export default handleActions({
  [ME.FACEBOOK_CONNECT.FULFILLED]: (state, { payload }) => payload.data,
}, INITIAL_STATE);

import { handleActions } from 'redux-actions';
import * as USERS from '../actions/users';
import * as ME from '../actions/me';

export const INITIAL_STATE = {
  done: null,
  data: [],
};

export default handleActions({
  [ME.NEAR.PENDING]: state => ({
    ...state,
    done: null,
  }),
  [ME.NEAR.FULFILLED]: (state, { payload }) => ({
    ...state,
    done: true,
    data: payload.data,
  }),
}, INITIAL_STATE);

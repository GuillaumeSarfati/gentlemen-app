import { handleActions } from 'redux-actions';
import * as PERSIST from 'redux-persist/constants';
import * as ME from '../actions/me';

export const INITIAL_STATE = {
  member: null,
  location: null,
  token: null,
  rehydrated: false,
};

export default handleActions({
  [PERSIST.REHYDRATE]: (state, action) => ({
    ...action.payload.me,
    rehydrated: true,
  }),
  [ME.FACEBOOK_CONNECT.FULFILLED]: (state, { payload }) => payload.data,
  [ME.GET_CURRENT_LOCATION.FULFILLED]: (state, { payload }) => ({
    ...state,
    location: payload,
  }),
}, INITIAL_STATE);

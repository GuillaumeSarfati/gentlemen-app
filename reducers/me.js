import { handleActions } from 'redux-actions';
import * as PERSIST from 'redux-persist/constants';
import * as ME from '../actions/me';

export const INITIAL_STATE = {
  member: null,
  location: null,
  token: null,
};

export default handleActions({
  [PERSIST.REHYDRATE]: (state, action) => {
    console.log('persist rehydrate', action.payload);
    return ({
      ...action.payload.me,
    });
  },
  [ME.FACEBOOK_CONNECT.FULFILLED]: (state, { payload }) => payload.data,
  [ME.GET_CURRENT_LOCATION.FULFILLED]: (state, { payload }) => {
    console.log(ME.GET_CURRENT_LOCATION.FULFILLED);
    console.log(payload);
    return {
      ...state,
      location: payload,
    };
  },
}, INITIAL_STATE);

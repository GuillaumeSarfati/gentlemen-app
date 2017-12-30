import { handleActions } from 'redux-actions';
import * as MATCH from '../actions/match';
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
    data: [
      ...state.data,
      ...payload.data,
    ],
  }),
  [MATCH.UPSERT.FULFILLED]: (state, { payload }) => {
    state.data.forEach((user, i) => {
      if (user.id === payload.data.destId) {
        state.data.splice(i, 1);
      }
    });
    return { ...state };
  },
}, INITIAL_STATE);

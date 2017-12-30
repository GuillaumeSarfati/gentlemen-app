import { handleActions } from 'redux-actions';
import * as MATCH from '../actions/match';
import * as ME from '../actions/me';

export const INITIAL_STATE = {
  data: [],
  status: 'empty',
  rehydrated: false,
};

export default handleActions({
  [ME.NEAR.PENDING]: state => ({
    ...state,
    status: 'pending',
  }),
  [ME.NEAR.FULFILLED]: (state, { payload }) => {
    console.log(ME.NEAR.FULFILLED, payload.data.length);
    return {
      ...state,
      data: payload.data,
      status: payload.data.length < 10
        ? 'done'
        : 'success',
    };
  },
  [MATCH.UPSERT.FULFILLED]: (state, { payload }) => {
    const newData = state.data.filter(data => data.id !== payload.data.destId);
    console.log('After Match', newData.length);
    return {
      ...state,
      data: [...newData],
      status: newData.length === 0
        ? 'empty'
        : state.status,
    };
  },
}, INITIAL_STATE);

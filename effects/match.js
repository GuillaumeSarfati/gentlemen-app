import Api from '../utils/api';
import MatchActions from '../actions/match';

const upsert = params => (dispatch, getState) => {
  console.log('upsert match : ', getState().me.token.userId);
  return dispatch(MatchActions.upsert(Api.put('/Matchs', {
    ...params,
    ownerId: getState().me.token.userId,
  })));
};

export default {
  upsert,
};

import Api from '../utils/api';
import MatchActions from '../actions/match';

const upsert = params => (dispatch, getState) =>
  dispatch(MatchActions.upsert(Api.put('/Matchs', {
    ...params,
    ownerId: getState().me.cookie.userId,
  })));

export default {
  upsert,
};

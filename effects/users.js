import Api from '../utils/api';
import UsersActions from '../actions/users';

export const getNext = params => dispatch => dispatch(UsersActions.getNext(Api.get('/Users', params)));

export default {
  getNext,
};

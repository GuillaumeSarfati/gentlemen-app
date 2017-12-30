import Api from '../utils/api';
import UsersActions from '../actions/users';

export const getNext = () => dispatch => dispatch(UsersActions.getNext(Api.get('/Users/near')));

export default {
  getNext,
};

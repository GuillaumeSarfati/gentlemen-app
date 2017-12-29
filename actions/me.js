import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const LOGIN = generateApiAction('LOGIN');

export const login = createApiAction(LOGIN);

export default {
  login,
};

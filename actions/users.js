import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const GET_NEXT = generateApiAction('USERS_GET_NEXT');

const getNext = createApiAction(GET_NEXT);

export default {
  getNext,
};

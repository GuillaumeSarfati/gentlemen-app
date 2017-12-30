import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const FACEBOOK_CONNECT = generateApiAction('ME_FACEBOOK_CONNECT');
export const NEAR = generateApiAction('ME_NEAR');

const facebookConnect = createApiAction(FACEBOOK_CONNECT);
const near = createApiAction(NEAR);

export default {
  facebookConnect,
  near,
};

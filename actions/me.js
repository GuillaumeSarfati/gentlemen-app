import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const FACEBOOK_CONNECT = generateApiAction('ME_FACEBOOK_CONNECT');
export const GET_CURRENT_LOCATION = generateApiAction('GET_CURRENT_LOCATION');
export const NEAR = generateApiAction('ME_NEAR');

const facebookConnect = createApiAction(FACEBOOK_CONNECT);
const getCurrentLocation = createApiAction(GET_CURRENT_LOCATION);
const near = createApiAction(NEAR);

export default {
  facebookConnect,
  getCurrentLocation,
  near,
};

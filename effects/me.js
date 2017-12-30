import Expo from 'expo';
import Api from '../utils/api';
import MeActions from '../actions/me';


const facebookConnectAsync = async (dispatch) => {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('162154747848108', {
    permissions: [
      'email',
      'public_profile',
      'user_about_me',
      'user_birthday',
    ],
  });
  if (type === 'success') {
    return dispatch(MeActions.facebookConnect(Api.post(`/Members/facebook/${token}`)));
  }
};

const facebookConnect = () => dispatch => facebookConnectAsync(dispatch);

const near = () => dispatch => dispatch(MeActions.near(Api.get('/Members/near')));

export default {
  near,
  facebookConnect,
};

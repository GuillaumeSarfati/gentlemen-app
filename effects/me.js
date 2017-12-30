import { Facebook, Constants, Location, Permissions } from 'expo';
import { Platform } from 'react-native';
import Api from '../utils/api';
import MeActions from '../actions/me';


const facebookConnectAsync = async (dispatch) => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('162154747848108', {
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

const getCurrentLocationAsync = async (dispatch) => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (Platform.OS === 'android' && !Constants.isDevice) {
    return console.warn('Oops, getLocationAsync will not work on Sketch in an Android emulator. Try it on your device!');
  }
  if (status !== 'granted') {
    // TODO Check global denied perms with redux action
    return console.warn('Permission to access location was denied');
  }

  // const location = await ;
  return dispatch(MeActions.getCurrentLocation(Location.getCurrentPositionAsync({})));
};

export const facebookConnect = () => dispatch => facebookConnectAsync(dispatch);
export const getCurrentLocation = () => dispatch => getCurrentLocationAsync(dispatch);


const near = location => dispatch => dispatch(MeActions.near(Api.get(`/Members/near/${location.coords.latitude}/${location.coords.longitude}`)));

export default {
  near,
  facebookConnect,
  getCurrentLocation,
};

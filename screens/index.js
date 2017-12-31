import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
import AppSettings from './AppSettings';
import Explanation from './Explanation';
import MemberSettings from './MemberSettings';

export const defaultNavigator = StackNavigator({
  Home: { screen: Home, path: '/Home' },
  Explanation: { screen: Explanation, path: '/Explanation' },
}, {
  initialRouteName: 'Home',
  cardStyle: {
    shadowColor: 'transparent',
  },
  navigationOptions: {
    header: null,
    loggingEnabled: false,
  },
});

const modalNavigator = StackNavigator({
  Signup: { screen: Signup, path: '/Signup' },
  AppSettings: { screen: AppSettings, path: '/AppSettings' },
  MemberSettings: { screen: MemberSettings, path: '/MemberSettings' },
  Profile: { screen: Profile, path: '/Profile' },
  defaultNavigator: { screen: defaultNavigator, path: '/Home' },
}, {
  initialRouteName: 'Signup',
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    header: null,
    loggingEnabled: false,
  },
});

export default modalNavigator;

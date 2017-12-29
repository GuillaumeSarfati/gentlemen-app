import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Signup from './Signup';
import Explanation from './Explanation';

export const defaultNavigator = StackNavigator({
  Home: { screen: Home, path: '/Home' },
  Signup: { screen: Signup, path: '/Signup' },
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
  Settings: { screen: Settings, path: '/Settings' },
  Profile: { screen: Profile, path: '/Profile' },
  defaultNavigator: { screen: defaultNavigator, path: '/Home' },
}, {
  initialRouteName: 'defaultNavigator',
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    header: null,
    loggingEnabled: false,
  },
});

export default modalNavigator;

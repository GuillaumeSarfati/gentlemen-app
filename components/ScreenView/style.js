import {
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {
  Constants,
} from 'expo';

export const IPHONE_STATUS_BAR_HEIGHT = 20;
export const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export default StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? IPHONE_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT,
    paddingBottom: Constants.platform && (Constants.platform.ios.model === 'iPhone10,6'
      || Constants.platform.ios.model === 'iPhone10,3')
      ? 20
      : 0,
  },
});

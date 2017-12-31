import {
  StyleSheet,
  Platform,
} from 'react-native';
import {
  Constants,
} from 'expo';

import {
  IPHONE_STATUS_BAR_HEIGHT,
  ANDROID_STATUS_BAR_HEIGHT,
} from '../../styles/helpers';

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingTop: (Platform.OS === 'ios' ? IPHONE_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT),
    paddingBottom: Constants.platform && (Constants.platform.ios.model === 'iPhone10,6'
      || Constants.platform.ios.model === 'iPhone10,3')
      ? 20
      : 0,
  },
});

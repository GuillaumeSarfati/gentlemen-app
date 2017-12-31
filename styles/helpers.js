import {
  StatusBar,
  Dimensions,
} from 'react-native';

export const HEADER_NAV_HEIGHT = 42;

export const IPHONE_STATUS_BAR_HEIGHT = 20;
export const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

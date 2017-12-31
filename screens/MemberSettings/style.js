import { StyleSheet } from 'react-native';
import { screenWidth } from '../../styles/helpers';

const PAGE_MARGIN = 4;
const PICTURE_MARGIN = 6;
const DEFAULT_PADDING = 10;

const tmp = (screenWidth - (PICTURE_MARGIN * 2) - (PAGE_MARGIN * 4));
const MAIN_PICTURE_SIZE = tmp - (tmp / 4) - (PICTURE_MARGIN * 4) - PAGE_MARGIN;
const ALT_PICTURE_SIZE = (MAIN_PICTURE_SIZE / 2) - PICTURE_MARGIN;

export const SLIDER_LENGTH = screenWidth - 20;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: PAGE_MARGIN,
  },
  mainPicture: {
    margin: PICTURE_MARGIN,
    width: MAIN_PICTURE_SIZE,
    height: MAIN_PICTURE_SIZE,
  },
  altPicture: {
    margin: PICTURE_MARGIN,
    backgroundColor: 'grey',
    width: ALT_PICTURE_SIZE,
    height: ALT_PICTURE_SIZE,
  },
  picturesContainer: {
    marginTop: 0,
    margin: PAGE_MARGIN,
    flexDirection: 'row',
  },
  titleContainer: {
    padding: DEFAULT_PADDING,
  },
  inputContainer: {
    padding: DEFAULT_PADDING,
    backgroundColor: 'white',
  },
  footer: {
    height: 42,
  },
});

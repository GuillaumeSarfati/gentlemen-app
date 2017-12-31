import { StyleSheet } from 'react-native';

import { screenWidth } from '../../styles/helpers';

export const SWIPER_HEIGHT = screenWidth;

export const ICON_SIZE = 20;
export const ICON_COLOR = 'white';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  informationContainer: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  descriptionContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: screenWidth,
    width: screenWidth,
  },
  textTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  textDefault: {
    fontSize: 12,
    marginBottom: 2,
    color: '#9b9b9b',
  },
  actionsContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    height: 50,
    left: 0,
    position: 'absolute',
    zIndex: 10,
  },
  actionButton: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fd267d',
  },
});

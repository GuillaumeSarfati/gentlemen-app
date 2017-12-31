import {
  StyleSheet,
} from 'react-native';

import {
  HEADER_NAV_HEIGHT,
} from '../../styles/helpers';

export default StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(242, 242, 242)',
    height: HEADER_NAV_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 4,
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  action: {
    height: '100%',
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  actionTitle: {
    fontSize: 14,
    color: 'rgb(242, 42, 142)',
  },
});

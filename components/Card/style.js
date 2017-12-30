import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as helpers from '../../styles/helpers';
import * as colors from '../../styles/colors';

export const ACTIONS_HEIGHT = helpers.screenHeight / 5;

export default StyleSheet.create({
  card: {
    ...mixins.border(1, 'solid', colors.border, 10),
    ...mixins.flex('column', 'center', 'center'),
    width: helpers.screenWidth - 30,
    height: helpers.screenHeight - 150,
    overflow: 'hidden',
  },
  profile: {
    ...mixins.flex('column', 'center', 'center'),
    flex: 1,
    alignSelf: 'stretch',
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  actions: {
    ...mixins.flex('row', 'space-around', 'center'),
    width: helpers.screenWidth,
    height: ACTIONS_HEIGHT,
  },
});

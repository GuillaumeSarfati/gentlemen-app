import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as helpers from '../../styles/helpers';
import * as colors from '../../styles/colors';

export const LIKE_SIZE = 60;

export default StyleSheet.create({
  like: {
    ...mixins.flex('row', 'center', 'center'),
    width: LIKE_SIZE,
    height: LIKE_SIZE,
    borderRadius: LIKE_SIZE / 2,
    backgroundColor: colors.red,
  },
  likeText: {
    backgroundColor: 'transparent',
    color: 'white',

  },
});

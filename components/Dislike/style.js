import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as helpers from '../../styles/helpers';
import * as colors from '../../styles/colors';

export const DISLIKE_SIZE = 60;

export default StyleSheet.create({
  dislike: {
    ...mixins.flex('row', 'center', 'center'),
    width: DISLIKE_SIZE,
    height: DISLIKE_SIZE,
    borderRadius: DISLIKE_SIZE / 2,
    backgroundColor: colors.grey,
  },
  dislikeText: {
    backgroundColor: 'transparent',
    color: 'black',
  },
});

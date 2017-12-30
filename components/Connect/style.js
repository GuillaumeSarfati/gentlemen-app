import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as helpers from '../../styles/helpers';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  connect: {
    backgroundColor: colors.facebook,
    borderRadius: 30,
    padding: 15,
    margin: 15,
  },
  connectText: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});

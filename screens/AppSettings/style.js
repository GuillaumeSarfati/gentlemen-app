import { StyleSheet } from 'react-native';
import * as screen from '../../styles/screen';
import * as mixins from '../../styles/mixins';

export default StyleSheet.create({
  screen: {
    flex: 1,
    ...screen.background,
    ...mixins.flex('column', 'center', 'center'),
  },
});

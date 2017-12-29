import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as helpers from '../../styles/helpers';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  header: {
    ...mixins.borderBottom(1, 'solid', colors.border),
    ...mixins.flex('row', 'space-between', 'center'),
    ...mixins.padding(47, 15, 15, 15),
    width: helpers.screenWidth,

  },
});

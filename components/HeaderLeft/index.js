import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};
const defaultProps = {};

import style from './style';

const HeaderLeft = props => (
  <TouchableOpacity
    style={style.headerLeft}
    onPress={props.onPress}
  >
    <Text> Profile </Text>
  </TouchableOpacity>
);

HeaderLeft.propTypes = propTypes;
HeaderLeft.defaultProps = defaultProps;

export default HeaderLeft;

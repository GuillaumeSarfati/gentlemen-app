import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};
const defaultProps = {};

import style from './style';

const HeaderRight = props => (
  <TouchableOpacity
    style={style.headerRight}
    onPress={props.onPress}
  >
    <Text> Settings </Text>
  </TouchableOpacity>
);

HeaderRight.propTypes = propTypes;
HeaderRight.defaultProps = defaultProps;

export default HeaderRight;

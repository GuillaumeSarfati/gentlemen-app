import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import style from './style';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {};

const HeaderRight = props => (
  <TouchableOpacity
    style={style.headerRight}
    onPress={props.onPress}
  >
    <Ionicons name="ios-wine" size={42} />
  </TouchableOpacity>
);

HeaderRight.propTypes = propTypes;
HeaderRight.defaultProps = defaultProps;

export default HeaderRight;

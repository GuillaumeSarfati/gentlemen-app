import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};
const defaultProps = {};

import style from './style';

const Connect = props => (
  <TouchableOpacity
    style={style.connect}
    onPress={props.onPress}
  >
    <Text style={style.connectText}> Connect with Facebook </Text>
  </TouchableOpacity>
);

Connect.propTypes = propTypes;
Connect.defaultProps = defaultProps;

export default Connect;

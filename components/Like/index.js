import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};
const defaultProps = {};

import style from './style';

const Like = props => (
  <TouchableOpacity
    style={style.like}
    onPress={props.onPress}
  >
    <Text style={style.likeText}> Like </Text>
  </TouchableOpacity>
);

Like.propTypes = propTypes;
Like.defaultProps = defaultProps;

export default Like;

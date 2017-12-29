import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};
const defaultProps = {};

import style from './style';

const Dislike = props => (
  <TouchableOpacity
    style={style.dislike}
    onPress={props.onPress}
  >
    <Text style={style.dislikeText}> Dislike </Text>
  </TouchableOpacity>
);

Dislike.propTypes = propTypes;
Dislike.defaultProps = defaultProps;

export default Dislike;

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const propTypes = {};
const defaultProps = {};

import style from './style';

const NoMoreCards = props => (
  <View style={style.noMoreCards}>
    <Text> No More Profile </Text>
  </View>
);

NoMoreCards.propTypes = propTypes;
NoMoreCards.defaultProps = defaultProps;

export default NoMoreCards;

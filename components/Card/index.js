import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Dislike from '../../components/Dislike';
import Like from '../../components/Like';

const propTypes = {};
const defaultProps = {};

import style from './style';

const Card = props => (
  <View style={style.card}>
    <View style={style.profile}>
      <Text> {props.text} </Text>
    </View>
    <View style={style.actions}>
      <Dislike onPress={() => console.warn('dislike')} />
      <Like onPress={() => console.warn('like')} />
    </View>
  </View>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;

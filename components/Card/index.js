import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';

import Dislike from '../../components/Dislike';
import Like from '../../components/Like';

const propTypes = {};
const defaultProps = {};

import style from './style';

const Card = props => (
  <View style={style.card}>
    <ImageBackground
      style={style.background}
      source={{ uri: props.pictures[0] }}
    >
      <View style={style.profile}>
        <Text> {props.firstname} </Text>
      </View>
      <View style={style.actions}>
        <Dislike onPress={() => console.warn('dislike')} />
        <Like onPress={() => console.warn('like')} />
      </View>
    </ImageBackground>
  </View>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;

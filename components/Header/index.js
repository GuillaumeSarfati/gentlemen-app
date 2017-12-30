import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const propTypes = {};
const defaultProps = {};

import style from './style';

const Header = props => (
  <View style={style.header}>
    {props.renderIconLeft()}
    <Text> MEETEAT </Text>
    {props.renderIconRight()}
  </View>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

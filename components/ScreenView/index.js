import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import style from './style';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const defaultProps = {
  children: null,
};

const ScreenView = props => (
  <View style={style.view}>
    { props.children }
  </View>
);

ScreenView.propTypes = propTypes;
ScreenView.defaultProps = defaultProps;

export default ScreenView;

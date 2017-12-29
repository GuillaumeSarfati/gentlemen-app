import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './style';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={style.screen}>
        <Text> Settings </Text>
      </View>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({}),
)(SettingsScreen);

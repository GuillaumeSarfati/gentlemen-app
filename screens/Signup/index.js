import React from 'react';
import PropTypes from 'prop-types';
import Expo from 'expo';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Api from '../../utils/api';

import Connect from '../../components/Connect';

import MeEffects from '../../effects/me';

import style from './style';


class SignupScreen extends React.Component {
  componentDidMount = () => this.authenticate()
  componentDidUpdate = () => this.authenticate()

  authenticate = () => {
    if (this.props.me.token && this.props.me.token && this.props.me.token.id) {
      Api.defaults.headers = {
        Authorization: this.props.me.token.id,
      };
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <View style={style.screen}>
        <Connect onPress={this.props.facebookConnect} />
      </View>
    );
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  dispatch => ({
    facebookConnect: bindActionCreators(MeEffects.facebookConnect, dispatch),
  }),
)(SignupScreen);

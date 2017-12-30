import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Slider,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ScreenView from '../../components/ScreenView';

import style from './style';

class ProfileScreen extends React.Component {
  render() {
    return (
      <ScreenView>
        <View style={{
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          height: 40,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 4,
        }}
        >
          <View style={{
            flex: 4,
            height: 42,
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}
          >
            <Text>Réglages</Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: 'pink',
                }}
              >Terminé
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>Distance maximal</Text>
          <Slider />
        </View>
      </ScreenView>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({}),
)(ProfileScreen);

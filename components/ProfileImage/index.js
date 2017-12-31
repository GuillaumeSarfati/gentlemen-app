import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import style from './style';

const ProfileImage = props => (
  <View style={style.container}>
    <ImageBackground
      style={[style.image, props.style]}
      source={{
        uri: props.uri,
      }}
    >
      <View style={style.view}>
        <View>
          <Text style={style.text}>{props.number}</Text>
        </View>
        <View style={style.actionContainer}>
          <TouchableOpacity>
            <Entypo
              size={20}
              name={props.uri ? 'cross' : 'plus'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
);

export default ProfileImage;

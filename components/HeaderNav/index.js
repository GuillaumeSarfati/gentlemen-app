import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import style from './style';

const HeaderNav = () => (
  <View style={style.container}>
    <View style={style.titleContainer}>
      <Text style={style.title}>Réglages</Text>
    </View>
    <View style={style.actionContainer}>
      <TouchableOpacity style={style.action} >
        <Text
          style={style.actionTitle}
        >Terminé
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default HeaderNav;

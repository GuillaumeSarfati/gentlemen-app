import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swiper from 'react-native-swiper';

import ScreenView from '../../components/ScreenView';

import style, {
  ICON_SIZE,
  ICON_COLOR,
  SWIPER_HEIGHT,
} from './style';

class ProfileScreen extends React.Component {
  Pictures = () => this.props.me.member.pictures
    .map((picture, i) => (
      <Image
        key={i.toString()}
        style={style.image}
        source={{ uri: picture }}
        resizeMode="cover"
        resizeMethod="scale"
      />
    ));

  render() {
    return (
      <ScreenView>
        <ScrollView style={style.scrollView} >
          <Swiper
            autoplay={false}
            style={style.swiper}
            height={SWIPER_HEIGHT}
            activeDotColor="white"
          >
            { this.Pictures() }
          </Swiper>
          <View style={style.informationContainer}>
            <Text style={style.textTitle}>{this.props.me.member.firstname}</Text>
            <Text style={style.textDefault}>Engineer</Text>
            <Text style={style.textDefault}>42</Text>
          </View>
          <View style={style.descriptionContainer}>
            <Text style={style.textDefault}>
              1337 i never message first !
            </Text>
          </View>
        </ScrollView>
        <View style={style.actionsContainer}>
          <TouchableOpacity
            style={style.actionButton}
          >
            <Ionicons
              name="md-settings"
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.actionButton}
            onPress={() => this.props.navigation.navigate('MemberSettings')}
          >
            <FontAwesome
              name="pencil"
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </TouchableOpacity>
        </View>
      </ScreenView>
    );
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  dispatch => ({}),
)(ProfileScreen);

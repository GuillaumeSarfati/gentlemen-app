import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Slider,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import HeaderNav from '../../components/HeaderNav';
import ProfileImage from '../../components/ProfileImage';
import ScreenView from '../../components/ScreenView';

import style, {
  SLIDER_LENGTH,
} from './style';

class ProfileScreen extends React.Component {
  state = {
    ageRange: 18,
    maxDistance: 1,
  }

  onSilderChange = name => (value) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <ScreenView>
        <HeaderNav />
        <ScrollView>
          <View style={style.container}>
            <ProfileImage
              style={style.mainPicture}
              uri={this.props.me.member.pictures[0]}
            />
            <View>
              <ProfileImage style={style.altPicture} />
              <ProfileImage style={style.altPicture} />
            </View>
          </View>
          <View style={style.picturesContainer}>
            <ProfileImage style={style.altPicture} />
            <ProfileImage style={style.altPicture} />
            <ProfileImage style={style.altPicture} />
          </View>
          <View style={style.titleContainer}>
            <Text>À propos de {this.props.me.member.firstname}</Text>
          </View>
          <View style={style.inputContainer}>
            <TextInput
              multiline
              placeholder="Description"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={style.titleContainer}>
            <Text>Emploi actuel</Text>
          </View>
          <View style={style.inputContainer}>
            <Text>Engineer</Text>
          </View>
          <View style={style.titleContainer}>
            <Text>Établissement scolaire</Text>
          </View>
          <View style={style.inputContainer}>
            <Text>42</Text>
          </View>
          <View style={style.titleContainer}>
            <Text>Genre</Text>
          </View>
          <View style={style.inputContainer}>
            <Text>{this.props.me.member.gender}</Text>
          </View>
          <View style={style.footer} />
          {/* <View style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
          >
            <View style={{
            padding: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            height: 60,
            borderBottomColor: 'grey',
          }}
            >
              <View style={{
              flexDirection: 'row',
            }}
              >
                <Text style={{
                flex: 2,
              }}
                >Distance maximal
                </Text>
                <Text style={{ flex: 0 }}>{this.state.maxDistance.toFixed(0)}</Text>
              </View>
              <View style={{
                paddingTop: 10,
              }}
              >
                <MultiSlider
                  values={[3]}
                  sliderLength={SLIDER_LENGTH}
                />
              </View>
            </View>
            <View style={{
            padding: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}
            >
              <TouchableOpacity>
                <View style={{
                flexDirection: 'row',
              }}
                >
                  <Text style={{
                  flex: 2,
                }}
                  >Je cherche
                  </Text>
                  <Text style={{ flex: 0 }}>Homme</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{
            padding: 10,
            height: 60,
            backgroundColor: 'white',
          }}
            >
              <View style={{
              flexDirection: 'row',
            }}
              >
                <Text style={{
                flex: 1,
              }}
                >Tranche dage
                </Text>
                <Text style={{ flex: 0 }}>{this.state.ageRange.toFixed(0)}</Text>
              </View>
              <View style={{
                paddingTop: 10,
              }}
              >
                <MultiSlider
                  values={[3, 7]}
                  sliderLength={SLIDER_LENGTH}
                />
              </View>
            </View>
          </View> */}
        </ScrollView>
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

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SwipeCards from 'react-native-swipe-cards';

import Header from '../../components/Header';
import HeaderLeft from '../../components/HeaderLeft';
import HeaderRight from '../../components/HeaderRight';

import Card from '../../components/Card';
import NoMoreCards from '../../components/NoMoreCards';

import MeEffects from '../../effects/me';

import style from './style';

class HomeScreen extends React.Component {
  componentDidMount = () => {
    this.props.near();
  }

  handleYup = (card) => {
    console.log(`Yup for ${card.text}`);
  }

  handleNope = (card) => {
    console.log(`Nope for ${card.text}`);
  }

  handleMaybe = (card) => {
    console.log(`Maybe for ${card.text}`);
  }

  renderIconLeft = () => (
    <HeaderLeft onPress={() => this.props.navigation.navigate('Profile')} />
  )

  renderIconRight = () => (
    <HeaderRight onPress={() => this.props.navigation.navigate('Settings')} />
  )

  render() {
    return (
      <View style={style.screen}>
        <Header
          renderIconLeft={this.renderIconLeft}
          renderIconRight={this.renderIconRight}
        />
        <SwipeCards
          cards={this.props.users.data}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => (this.props.users.done && !this.props.users.data.length ? <NoMoreCards /> : null)}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
          showYup={false}
          showNope={false}
          showMaybe={false}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    users: state.users,
  }),
  dispatch => ({
    near: bindActionCreators(MeEffects.near, dispatch),
  }),
)(HomeScreen);

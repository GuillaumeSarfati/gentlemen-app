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

import UsersEffects from '../../effects/users';

import style from './style';

class HomeScreen extends React.Component {
  state = {
    cards: [
      { text: 'Tomato', backgroundColor: 'red' },
      { text: 'Aubergine', backgroundColor: 'purple' },
      { text: 'Courgette', backgroundColor: 'green' },
      { text: 'Blueberry', backgroundColor: 'blue' },
      { text: 'Umm...', backgroundColor: 'cyan' },
      { text: 'orange', backgroundColor: 'orange' },
    ],
  }

  componentWillMount = () => {
    this.props.getNext();
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
          cards={this.state.cards}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}

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
    getNext: bindActionCreators(UsersEffects.getNext, dispatch),
  }),
)(HomeScreen);

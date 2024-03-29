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
import MatchEffects from '../../effects/match';

import style from './style';

class HomeScreen extends React.Component {
  componentDidMount = () => {
    if (this.props.location) {
      this.props.near(location);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('componentWillReceiveProps', nextProps.location);
  }

  componentDidUpdate() {
    if (this.props.users.data.length === 2 && this.props.users.done) {
      this.props.near();
    }
  }

  handleYup = (card) => {
    this.props.match({
      destId: card.id,
      status: 'like',
    });
  }

  handleNope = (card) => {
    this.props.match({
      destId: card.id,
      status: 'unlike',
    });
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
          cardKey="id"
          cards={this.props.users.data}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => (
            this.props.users.done && !this.props.users.data.length
              ? <NoMoreCards />
              : null
          )}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    users: state.users,
    location: state.me.location,
  }),
  dispatch => ({
    near: bindActionCreators(MeEffects.near, dispatch),
    match: bindActionCreators(MatchEffects.upsert, dispatch),
    getCurrentLocation: bindActionCreators(MeEffects.getCurrentLocation, dispatch),
  }),
)(HomeScreen);

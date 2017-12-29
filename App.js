import React from 'react';
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import Screens from './screens'
import Reducers from './reducers';

export const store = createStore(
  Reducers,
  undefined,
  compose(
    applyMiddleware(
      thunk,
      promise(),
    ),
  ),
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}

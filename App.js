import React from 'react';
import { AsyncStorage } from 'react-native';
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import Screens from './screens';
import Reducers from './reducers';

export const store = createStore(
  Reducers,
  undefined,
  compose(
    applyMiddleware(
      thunk,
      promise(),
    ),
    autoRehydrate(),
  ),
);

// AsyncStorage.clear();

persistStore(store, {
  storage: AsyncStorage,
  whitelist: [
    'me',
  ],
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}

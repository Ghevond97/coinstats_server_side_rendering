import React from 'react';
import { hydrate } from 'react-dom';

import { Provider } from 'react-redux';

import Loadable from 'react-loadable';

import App from './App';
import configureStore from './store/configStore';

const store = configureStore(window.__REDUX_STATE__);

const AppBundle = (
  <Provider store={store}>
    <App />
  </Provider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    hydrate(AppBundle, document.getElementById('root'));
  });
};

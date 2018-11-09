import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';



import App from './App';

// import registerServiceWorker from './registerServiceWorker';



const AppBundle = (
  
  <App />

);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      AppBundle,
      document.getElementById('root')
    );
  });
};
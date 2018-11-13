import React, { Component } from 'react';

import Loadable from 'react-loadable';

import './App.css';

const AsyncComponent = Loadable({
  loader: () => import('./containers/TableOfStats'),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk']
});

class App extends Component {
  render() {
    return (
      <div>
        <AsyncComponent />
      </div>
    );
  }
}

export default App;

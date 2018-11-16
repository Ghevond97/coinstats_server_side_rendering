import React, { Component } from 'react';

import Loadable from 'react-loadable';

import './App.css';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`;

const AsyncComponent = Loadable({
  loader: () => import('./containers/TableOfStats'),
  loading: () => (
    <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
      Loading...
    </div>
  ),
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

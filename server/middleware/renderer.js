import { readFile } from 'fs';
import { resolve } from 'path';

import React from 'react';
import { Provider } from 'react-redux';

import { renderToString } from 'react-dom/server';

import Loadable from 'react-loadable';

import { ServerStyleSheet } from 'styled-components';

import App from '../../src/App';

export default store => (req, res) => {
  const filePath = resolve(__dirname, '..', '..', 'build', 'index.html');

  readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const sheet = new ServerStyleSheet();

    const modules = [];

    const html = renderToString(
      sheet.collectStyles(
        <Loadable.Capture report={m => modules.push(m)}>
          <Provider store={store}>
            <App />
          </Provider>
        </Loadable.Capture>
      )
    );
    const reduxState = JSON.stringify(store.getState());

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
    );
  });
};

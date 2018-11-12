import React from 'react';
import path, { resolve } from 'path';
import fs, { readFile } from 'fs';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';

import App from '../../src/App';

export default store => (req, res, next) => {
  const filePath = resolve(__dirname, '..', '..', 'build', 'index.html');

  readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const modules = [];

    const html = renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <Provider store={store}>
          <App />
        </Provider>
      </Loadable.Capture>
    );
    const reduxState = JSON.stringify(store.getState());

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
    );
  });
};

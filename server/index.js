import express from 'express';

import Loadable from 'react-loadable';

import indexController from './controllers/index';

import { PORT } from './config';

const app = express();

app.use(indexController);

Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      return console.log(`something bad happened`, error);
    }

    console.log(`listening on ${PORT} ...`);
  });
});

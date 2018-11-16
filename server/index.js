import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Loadable from 'react-loadable';

import indexController from './controllers/';

import { PORT, HOST } from './config';

import '@babel/polyfill';

const app = express();

mongoose
  .connect(HOST)
  .then(() => console.log(`db connected`))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexController);

Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      return console.log(`something bad happened`, error);
    }

    console.log(`listening on ${PORT} ...`);
  });
});

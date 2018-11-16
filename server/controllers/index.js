import express from 'express';
import { resolve } from 'path';

import { getStats } from '../../src/actions';
import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/store/configStore';
import TableOfStats  from  '../../src/components/TableOfStats';
const router = express.Router();

const actionIndex = (req, res) => {
  const store = configureStore({});
  
  store.dispatch(getStats()).then(() => {
    serverRenderer(store)(req, res);
  });
};

router.use('^/$', actionIndex);

router.use(
  express.static(resolve(__dirname, '..', '..', 'build'), { maxAge: '30d' })
);

router.use('*', actionIndex);

export default router;

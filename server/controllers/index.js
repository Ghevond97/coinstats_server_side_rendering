import express from 'express';
import path, { resolve } from 'path';

import serverRenderer from '../middleware/renderer';

const router = express.Router();

router.use('^/$', serverRenderer());

router.use(
  express.static(resolve(__dirname, '..', '..', 'build'), { maxAge: '30d' })
);

router.use('*', serverRenderer());

export default router;

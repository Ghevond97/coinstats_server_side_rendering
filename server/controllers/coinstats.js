import express from 'express';

import {
  getCoinstats,
  createCoinstats,
  removeCoinstats
} from '../services/coinstats';

const router = express.Router();

router.get('/coinstats', (req, res) => {
  getCoinstats()
    .then(data => res.send(data))
    .catch(err => res.send(err.message));
});

router.post('/coinstats',(req, res) => {
  createCoinstats(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err.message));
});

router.delete('/coinstats',(req, res) => {
  removeCoinstats()
    .then(data => res.send(data))
    .catch(err => res.send(err.message));
});

export default router;

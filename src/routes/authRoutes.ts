import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
  res.send('you just made a post request');
})

export default router;

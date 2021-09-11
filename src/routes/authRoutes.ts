import express from 'express';
import { model } from 'mongoose';

const newUser = model('User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new newUser({ email, password });
    await user.save();
    res.send('you just made a post request');
  }
  catch (err) {
    console.log(err);
  }
})

export default router;

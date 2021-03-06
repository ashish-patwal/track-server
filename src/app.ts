import './models/user';
import express from 'express';
import mongoose from 'mongoose';
import authroutes from './routes/authRoutes';

const port = 3000;
const mongoUri = 'mongodb+srv://lucifer:lucifer147@cluster0.niibo.mongodb.net/TRACK-SERVER?retryWrites=true&w=majority';
const app = express();

app.use(express.json());
app.use(authroutes);

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongoose');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to Mongoose', err);
});

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});


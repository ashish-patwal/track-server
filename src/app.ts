import express from 'express';
import mongoose from 'mongoose';
import authroutes from './routes/authRoutes';


const app = express();
const port = 3000;
const mongoUri = 'mongodb+srv://lucifer:lucifer147@cluster0.niibo.mongodb.net/TRACK-SERVER?retryWrites=true&w=majority';

app.use(authroutes);

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongoose');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to Mongoose', err);
});

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});


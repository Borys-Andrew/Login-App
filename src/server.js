import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router as loginRouter } from './routes/login.js';
import { router as authRouter } from './routes/protected.js';

dotenv.config();

const PORT = 8080;
const { DB_HOST } = process.env;
const app = express();

app.use(cors());
app.use('/login', express.json(), loginRouter);
app.use('/protected', authRouter);

mongoose
  .connect(DB_HOST)
  .then(() => console.log('db conected successfully'))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    }))
  .catch((error) => console.log(error.message));

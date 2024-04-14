import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';

dotenv.config();


mongoose
  .connect(process.env.MONGO, )
  .then(()=>{
    console.log('Connected to MongoDB');
  }
)
  .catch((err)=> {
    console.log(err);
  });

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} `);
});


app.use("/user", userRoute);
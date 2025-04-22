import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error connecting to database:", err));

// CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)
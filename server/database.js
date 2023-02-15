import mongoose from 'mongoose';
import { URI } from './config.js';

export async function connectDB() {  
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB!!');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
}


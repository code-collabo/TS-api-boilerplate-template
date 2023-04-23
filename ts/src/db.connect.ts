import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function mongooseConnect() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log('\nConnection to local mongoDB successful!!!');
  } catch (err) {
    console.log(`\nError in DB connection: ${err.message} \n`);
  }
}

export default mongooseConnect;

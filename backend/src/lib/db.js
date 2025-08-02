import mongoose from 'mongoose';
import colors from 'colors'

const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully'.green.bold);
  }catch(error){
    console.error('❌ MongoDB connection error:'.red.bold, error.message.red);
    process.exit(1);
  }
  
}

export default connectDB

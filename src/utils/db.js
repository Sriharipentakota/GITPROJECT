import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Automatically convert old mongodb:// to mongodb+srv:// if needed
    let connStr = process.env.DB_CONNECTION_STRING;
    if (connStr && connStr.startsWith('mongodb://')) {
      connStr = connStr.replace('mongodb://', 'mongodb+srv://');
    }
    await mongoose.connect(connStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
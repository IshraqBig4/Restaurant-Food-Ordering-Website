import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Optional debug log to check the URI
console.log('Connecting to MongoDB:', process.env.MONGODB_URI);

const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
        throw new Error('MONGODB_URI is not defined in the .env file');
    }

    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import menuRouter from './routes/menuRoutes.js';

// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Define allowed origins
const allowedOrigins = [
    process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : 'http://localhost:3000',
    'http://localhost:3000' // Explicitly allow for development
].filter(Boolean);

// Middleware
app.use(helmet()); // Secure HTTP headers
app.use(morgan('dev')); // Request logging
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: (origin, callback) => {
            console.log(`CORS Request Origin: ${origin}`); // Debug origin
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`CORS error: Origin ${origin} not allowed`));
            }
        },
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS'], // Explicitly allow methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
    })
);

// Rate limiting
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests
        message: 'Too many requests from this IP, please try again later.',
    })
);

// Connect to MongoDB
connectDB().catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
});

// API Routes
app.get('/', (req, res) => res.send('API Working'));
app.use('/api/auth', authRouter);
app.use('/api/menu', menuRouter);
app.use('/api/order', orderRouter);

// Global error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err.message.includes('CORS error')) {
        return res.status(403).json({ success: false, message: err.message });
    }
    res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`CORS allowed origins: ${allowedOrigins.join(', ')}`);
});
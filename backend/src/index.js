import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';


dotenv.config();

const app = express();

// CORS configuration
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src 'self' https://sih-2-12.onrender.com");
    next();
  });
  
app.use(cors({
    origin: 'https://nexcarrier.onrender.com/', // Ensure this matches your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json());

// Middleware for handling errors (Marked Change)
app.use(errorHandler);

// Connect to the database
connectDB();

// Ensure routes are correctly prefixed
app.use('/api/users', userRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message); // Log error message
    console.error('Stack trace:', err.stack); // Log stack trace
    res.status(err.status || 500).json({
        error: err.message || 'Something went wrong!'
    });
});

// Ensure the server is running
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
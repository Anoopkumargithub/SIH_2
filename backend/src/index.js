import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import helmet from 'helmet';


dotenv.config();

const app = express();

// CORS configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", " http://localhost:5174"], // Allow fonts from your domain
      styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles if needed
      scriptSrc: ["'self'", "https://trusted-source.com"], // Allow scripts from trusted sources
      connectSrc: ["'self'", "https://api.example.com"], // Allow connections to specific APIs
      imgSrc: ["'self'", "data:", "https://example.com"], // Allow images from specific sources
    },
  },
}));
app.use(cors({
    // origin: 'https://nexcarrier.onrender.com/', // Ensure this matches your frontend URL
    origin: 'https://sih-d2.onrender.com',
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
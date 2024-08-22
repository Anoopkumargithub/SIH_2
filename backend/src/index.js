import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors middleware
import connectDB from './db/index.js';
import userRoutes from './routes/user.js'; // Correct import

dotenv.config({
    path: './env'
}); // Load environment variables from .env file

const app = express(); // Initialize Express app

app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from this origin
})); // Use CORS middleware

app.use(express.json()); // Middleware to parse JSON

app.use('/api', userRoutes); // Use the user routes

connectDB() // Connect to MongoDB
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    });
})
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
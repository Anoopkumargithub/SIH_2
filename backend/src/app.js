import express from 'express';
import cors from 'cors';

const app = express();
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src 'self' https://sih-2-12.onrender.com");
    next();
  });

  app.use(cors({
    origin: 'https://nexcarrier.onrender.com', // Ensure this matches your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

export default app; 
import express from 'express';
import cors from 'cors';

const app = express();
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src 'self' https://sih-2-12.onrender.com");
    next();
  });

  const allowedOrigins = ['https://nexcarrier.onrender.com', 'https://sih-2-12.onrender.com'];

  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
  

export default app; 
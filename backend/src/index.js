import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/index.js';
import User from './models/user.models.js';

dotenv.config({
    path: './.env'
});

const app = express();
app.use(express.json());
app.use(cors());

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    });
})
.catch((error) => {
    console.error("MongoDB connection failed: ", error);
});

app.post('/Signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        console.log('Received data:', { name, email, password });
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json('User added!');
    } catch (err) {
        console.error('Failed to add user:', err);
        res.status(400).json('Error: ' + err.message);
    }
});

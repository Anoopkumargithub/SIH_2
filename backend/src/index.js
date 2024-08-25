import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'; // Import user routes
import cors from 'cors';

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Connect to the database
connectDB();

// Ensure routes are correctly prefixed
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.post('/Signup', async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         console.log('Received data:', { name, email, password });
//         const newUser = new User({ name, email, password });
//         await newUser.save();
//         res.status(201).json('User added!');
//     } catch (err) {
//         console.error('Failed to add user:', err);
//         res.status(400).json('Error: ' + err.message);
//     }
// });

// app.post('/Login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         const user = await User.findOne({ email });

//         if (!user || user.password !== password) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         res.status(200).json('Login successful!');
//     } catch (err) {
//         console.error('Login failed:', err);
//         res.status(500).json('Error: ' + err.message);
//     }
// });

import express from 'express';
import User from '../models/User.js'; // Assuming you have a User model

const router = express.Router();

// POST /api/users
router.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default router;
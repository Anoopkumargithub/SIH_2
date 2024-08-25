import User from '../models/user.models.js'; 
import jwt from 'jsonwebtoken';

// Signup controller
export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json('User added!');
    } catch (err) {
        console.error('Failed to add user:', err);
        res.status(400).json('Error: ' + err.message);
    }
};

// Login controller
export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const isMatch = await user.isPasswordCorrect(password);
      console.log('Password Match:', isMatch); // Log password match status
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
      res.cookie('refreshToken', refreshToken, { httpOnly: true });
      res.status(200).json({ accessToken, user: { name: user.name, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
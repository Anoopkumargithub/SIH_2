import jwt from 'jsonwebtoken';
import User from '../models/user.models.js'; // Ensure the path is correct

export const protect = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('authHeader:', authHeader); // Debugging line
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Access denied, token missing!' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token:', token); // Debugging
    if (!token) return res.status(401).json({ error: 'Access denied, token missing!' });

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log('Decoded:', decoded); // Debugging line
        const user = await User.findById(decoded._id).select('-password');
        console.log('User:', user); // Debugging line
        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error('Token verification error:', err);
        return res.status(403).json({ error: 'Token verification failed!' });
    }
};

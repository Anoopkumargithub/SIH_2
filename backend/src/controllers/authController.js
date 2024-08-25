import User from '../models/user.models.js';

export const signup = async (req, res) => {
    const { name, email, password, avatar } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = new User({ name, email, password, avatar });
        await newUser.save();
        res.status(201).json('User added!');
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isMatch = await user.isPasswordCorrect(password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save();

        res.status(200).json({
            message: 'Login successful!',
            accessToken,
            refreshToken
        });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

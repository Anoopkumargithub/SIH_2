import express from 'express';
const router = express.Router();

router.post('/create-account', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Assume createUser is a function that handles account creation
        const newUser = await createUser(username, password);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
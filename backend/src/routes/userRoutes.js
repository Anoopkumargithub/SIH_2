import express from 'express';
import { signup, login } from '../controllers/userController.js';

const router = express.Router();

// Define routes correctly
router.post('/signup', signup); // Ensure this matches the frontend URL
router.post('/login', login);

export default router;

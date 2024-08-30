import express from 'express';
import { signup, login, getUserProfile, createOrUpdateProfile, getPrivateJobs, getGovernmentJobs,getOverseasJobs,getJobById } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.post('/signup', asyncHandler(signup));
router.post('/login', asyncHandler(login));
router.get('/profile', protect, asyncHandler(getUserProfile)); // Route to get user profile
// router.post('/profile', protect, asyncHandler(createOrUpdateProfile)); // Route to create or update a profile
router.put('/profile/:id', protect, asyncHandler(createOrUpdateProfile)); // Route to update a profile
router.post('/jobs/private', protect, asyncHandler(getPrivateJobs)); // Route to get private jobs
router.post('/jobs/government', protect, asyncHandler(getGovernmentJobs)); // Route to get Government jobs
router.post('/jobs/overseas', protect, asyncHandler(getOverseasJobs)); // Route to get Overseas jobs
router.get('/jobs/:id', protect, getJobById); // Route to get job details


// Catch-all route for undefined routes
router.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

export default router;

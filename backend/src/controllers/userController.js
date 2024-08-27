// controllers/userController.js
import User from '../models/user.models.js'; 
import Profile from '../models/profile.models.js';
import jwt from 'jsonwebtoken';

// Signup controller
export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        const accessToken = newUser.generateAccessToken();
        const refreshToken = newUser.generateRefreshToken();

        res.status(201).json({
            message: 'User created successfully',
            accessToken,
            refreshToken,
            user: { name: newUser.name, email: newUser.email },
        });
    } catch (err) {
        console.error('Failed to add user:', err);
        res.status(400).json({ error: err.message });
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
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save();

        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });

        res.status(200).json({
            accessToken,
            user: { name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

// Create User Profile
// export const createUserProfile = async (req, res) => {
//     try {
//         const { gender, phone_no, current_city, role, area_of_interest, currently_looking, skills } = req.body;

//         // Create a new profile
//         const newProfile = new Profile({
//             gender,
//             phone_no,
//             current_city,
//             role,
//             area_of_interest,
//             currently_looking,
//             skills
//         });

//         // Save the profile to the database
//         const savedProfile = await newProfile.save();
//         res.status(201).json(savedProfile);
//     } catch (error) {
//         console.error('Error creating profile:', error);
//         res.status(500).json({ message: 'Failed to create profile. Please try again.' });
//     }
// };

// Update User Profile
// export const updateUserProfile = async (req, res) => {
//     try {
//          const { userId } = req.User; // Marked Change: Accessing userId from token
//         const { gender, phone_no, current_city, role, area_of_interest, currently_looking, skills } = req.body;

//         // Find and update the profile
//         const updatedProfile = await Profile.findByIdAndUpdate(id, {
//             gender,
//             phone_no,
//             current_city,
//             role,
//             area_of_interest,
//             currently_looking,
//             skills
//         }, { new: true });

//         if (!updatedProfile) {
//             return res.status(404).json({ message: 'Profile not found.' });
//         }

//         res.status(200).json(updatedProfile);
//     } catch (error) {
//         console.error('Error updating profile:', error);
//         res.status(500).json({ message: 'Failed to update profile. Please try again.' });
//     }
// };
// export const updateUserProfile = async (req, res) => {
//     const { userId } = req.user; // Marked Change: Accessing userId from token
//     const updateData = req.body;

//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             userId,  // Marked Change: Finding by userId
//             { $set: updateData },
//             { new: true, runValidators: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({
//             message: 'Profile updated successfully',
//             profile: updatedUser
//         });
//     } catch (error) {
//         res.status(400).json({ message: 'Failed to update profile', error: error.message });
//     }
// };

// Get User Profile
export const getUserProfile = async (req, res) => {
    // const user = await User.findById(req.user.userId);
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create or Update User Profile
export const createOrUpdateProfile = async (req, res) => {
    // const userId = req.user._id; // Access userId from the token

    const userId = req.params.id;

    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const profileData = req.body;

    try {
        let profile = await Profile.findOne({ userId });

        if (profile) {
            // Update existing profile
            profile = await Profile.findOneAndUpdate(
                { userId },
                { $set: profileData },
                { new: true }
            );
        } else {
            // Create new profile
            profile = new Profile({ userId, ...profileData });
            await profile.save();
        }

        res.json(profile);
    } catch (error) {
        console.error('Error creating or updating profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
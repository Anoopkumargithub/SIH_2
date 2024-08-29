// controllers/userController.js
import User from '../models/user.models.js'; 
import Profile from '../models/profile.models.js';
import jwt from 'jsonwebtoken';
import company from '../models/company.models.js';
import Question from '../models/question.models.js';

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
            user: { name: user.name, email: user.email, accessToken : accessToken }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

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

export const getPrivateJobs = async (req, res) => {
    try{
        // fetch user role and skill

        const profile = await Profile.findOne({userId : req.user._id});
        console.log(profile.skills)
        const skill = profile.skills;



        // fetch jobs based on user role and skill
        
        // fetch all company

        const jobs = await company.find({skills : {$in : skill} , sector : "private"});
        console.log(jobs);
    
        

        res.status(200).json(jobs);

    }
    catch(err){
        console.log(err);
    }
}

export const getGovernmentJobs = async (req, res) => {
    try{
        // fetch user role and skill

        const profile = await Profile.findOne({userId : req.user._id});
        console.log(profile.skills)
        const skill = profile.skills;

        const jobs = await company.find({skills : {$in : skill} , sector : "government"});

        res.status(200).json(jobs);

    }
    catch(err){
        console.log(err);
    }
}


export const getOverseasJobs = async (req, res) => {
    try{
        // fetch user role and skill

        const profile = await Profile.findOne({userId : req.user._id});
        console.log(profile.skills)
        const skill = profile.skills;

        const jobs = await company.find({skills : {$in : skill} , sector : "overseas"});

        res.status(200).json(jobs);

    }
    catch(err){
        console.log(err);
    }
}

// Function to get job details by ID
export const getJobById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Fetch job details from the database
      const job = await company.findById(id);
  
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
  
      res.json(job);
    } catch (error) {
      console.error('Error fetching job details:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
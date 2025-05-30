import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// Use UUID for userId generation const { v4: uuidv4 } = require('uuid');
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema(
  {
    userId: {
        type: String,
        default: uuidv4, // Automatically generate UUID for userId
        unique: true,    // Ensure userId is unique
        required: true,  // Make it required
    },name: { 
        type: String, 
        required: true,
        lowercase: true,
        index: true,
    },
    email: { 
        type: String, 
        required: true,
        lowercase: true,
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'],
        min :8,
    },
    avatar: { 
        type: String, //cloudinary url
    },
    refreshToken:{
        type: String,
    }
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) { 
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    console.log('Hashed Password:', this.password); // Log hashed password remove before SIH
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
        _id: this._id,
        email: this.email,
        name: this.name,
    },
    process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });
};

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    });
};

const User = mongoose.model('User', userSchema, 'nexcarrer');

export default User;

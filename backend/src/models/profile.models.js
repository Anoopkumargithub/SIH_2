import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true
        },
        gender: { 
            type: String, 
            enum: ['male', 'female', 'others'], 
            required: true 
        },
        phone_no: { 
            type: String, 
            required: true 
        },
        current_city: { 
            type: String, 
            required: true 
        },
        role: { 
            type: String, 
            enum: ['Frontend Engineer', 'Backend Engineer', 'Full Stack Engineer', 'Data Scientist', 'DevOps Engineer', 'AI Engineer'], 
            required: true 
        },
        area_of_interest: { 
            type: String, 
            enum: ['AI', 'Cloud', 'Data Analytics', 'Machine Learning', 'Web Development', 'Mobile Development'], 
            required: true 
        },
        currently_looking: { 
            type: String, 
            enum: ['Job', 'Internship'], 
            required: true 
        },
        skills: { 
            type: [String], 
            enum: ['React.js', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'Python', 'Machine Learning', 'Cloud', 'JavaScript', 'TypeScript'], 
            required: true 
        },
    },
    { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

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
            enum: ['Software Engineer','Frontend Developer','Backend Developer','AI Engineer','Cloud Engineer','Full Stack Developer','AI Engineer', 'Data Analyst', 'Data Scientist', 'Machine Learning Engineer', 'Mobile Developer'], 
            required: true 
        },
        courses: { 
            type: [String], 
            enum: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'BSc', 'MSc', 'BBA', 'MBA'], 
            required: true 
        },
        currently_looking: { 
            type: String, 
            enum: ['Job', 'Internship'], 
            required: true 
        },
        skills: { 
            type: [String], 
            enum: ['Java','Spring','SQL','React','JavaScript','Node.js','Python','Docker'], 
            required: true 
        },
    },
    { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

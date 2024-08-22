import mongoose, { Schema } from "mongoose";


const profileSchema = new mongoose.Schema(
    {
        gender: { 
            type: String, 
            required: true 
        },phone_no: { 
            type: Number, 
            required: true 
        },current_city: { 
            type: String, 
            required: true 
        },tech_lang: { 
            type: String, 
            required: true 
        },job_type: { 
            type: String, 
            required: true 
        },area_of_interest: { 
            type: String, 
            required: true 
        },currently_looking: { 
            type: String, 
            required: true 
        },skills: { 
            type: String, 
            required: true 
        },
    },
    { timestamps: true }
);



export const Profile = mongoose.model("Profile", profileSchema);

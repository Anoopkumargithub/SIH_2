import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    designation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    },
    companyName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    }
}, { timestamps: true });

const Result = mongoose.model('Result', interviewSchema);

// export default Result;



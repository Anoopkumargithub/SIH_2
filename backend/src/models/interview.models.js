import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
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

const Result = mongoose.model('Result', resultSchema);


const interviewQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    designation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    },
    userAnswer: {
        type: String,
        required: true
    },
    expectedAnswer: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    whatWentWell: {
        type: String,
        required: true
    },
    whatCanBeBetter: {
        type: String,
        required: true
    },
    technicalScore: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const InterviewQuestion = mongoose.model('InterviewQuestion', interviewQuestionSchema);
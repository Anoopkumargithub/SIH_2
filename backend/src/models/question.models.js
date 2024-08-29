import mongoose from 'mongoose';

// Define the sub-schema for questions
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    expectedAnswer: {
        type: String,
        required: true
    }
});

// Define the main schema
const companyQuestionSchema = new mongoose.Schema({
    companyName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
        required: true
    },
    role: {
        type: String,
        required: true
    },
    questions: [questionSchema]
});

const companyQuestion = mongoose.model('Company', companyQuestionSchema);

export default companyQuestion;
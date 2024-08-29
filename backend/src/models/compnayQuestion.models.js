import mongoose, { Schema } from 'mongoose';

// Define the schema
const patryQuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    expectedAnswer: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create the model
const pQuestion = mongoose.model('pQuestion', patryQuestionSchema);// 'Question' will auto-map to 'questions'

export default pQuestion;

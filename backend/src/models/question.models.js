import mongoose from 'mongoose';

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

// const companyQuestionSchema = new mongoose.Schema({
//     companyName: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'company',
//         required: true
//     },
//     role: {
//         type: String,
//         required: true
//     },
//     questions: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Question",
//         required: true,
//     }
// });

const Question = mongoose.model('Question', questionSchema);

export default Question;
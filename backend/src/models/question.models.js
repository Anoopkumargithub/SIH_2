import mongoose , {Schema} from 'mongoose';

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    expectedAnswer: {
        type: String,
        required: true
    }
}, {timestamps : true});

const Question = mongoose.model('Question', questionSchema); // 'Question' will auto-map to 'questions'

export default Question;
import mongoose , {Schema} from 'mongoose';

const questionSchema = new Schema({
    role:{
        type: String, 
        required: true,
    },
    question: {
        type: String,
        required: true
    },
    expectedAnswer: {
        type: String,
        required: true
    }
});


const NQuestion = mongoose.model('NQuestion', questionSchema);

export default NQuestion;
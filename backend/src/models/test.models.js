import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  companyName:{
    type: String,
    required: true
  },
  courseBranch:{
    type: String,
    required: true
  },
  designation:{
    type: String,
    required: true
  },
  jobDescription:{
    type: String,
    required: true
  },jobLocation:{
    type: String,
    required: true 
  },
  salary:{
    type: String,
    required: true
  },termAndConditions:{
    type: String,
    required: true
  },skills:{
    type: ["String"],
    required: true
  },role:{
    type: String,
    required: true
  },recruitmentProcedure:{ 
    type: ["String"],
    required: true
  },description:{
    type: String,
    required: true
  },sector:{
    type: String,
    required: true,
  },
  lastDateToApply:{
    type: Date,
    required: true
  },
  }
       );

const test = mongoose.model('test', testSchema);

// export default test;
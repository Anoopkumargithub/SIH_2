import mongoose, { Schema } from "mongoose";

const resultSchema = new Schema(
    {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        marks: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
        role: {
          type: String,
          required: true,
        },
        designation: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "company",
        },
        companyName: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "company",
        },
      },
      { timestamps: true }
);

const Result = mongoose.model("Result", resultSchema, "nexcarrer");

// export default Result;

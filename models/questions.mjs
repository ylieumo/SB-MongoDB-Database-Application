import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;


const questionsSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
          },
        answerChoises: {
            type: String,
            required: true,
          },
          answerChoises: {
            type: String,
            required: true,
          },
        Author: {
            type: String,
            required: true,
          },
        
        },
        { timestamps: true }
        )
const Question = model('Question', questionsSchema);


export default Question;

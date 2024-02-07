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
          answer: {
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

//indexes schemas.
questionsSchema.index({  question: 1 });
questionsSchema.index({ answerChoises: 1 });
questionsSchema.index({ answer: 1 });
questionsSchema.index({ Author: 1 });


export default Question;

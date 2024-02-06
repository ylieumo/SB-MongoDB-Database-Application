import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
const questionsSchema = new Schema(
    {
        Question: String,
        AnswerChoises: String,
        Answer: String,
        scores: [],
        Author: String 
    }
)
const Question = model('Question', questionsSchema);






export default Question;

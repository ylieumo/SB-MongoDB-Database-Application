import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
const reviewsSchema = new Schema(
    {
        body: String,
        Author: String,
        text: String,
        date: String,
       review_id:Number
    }
)
const Review = model('Reviews', reviewsSchema);

export default Review;
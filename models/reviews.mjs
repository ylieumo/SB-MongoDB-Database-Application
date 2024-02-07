import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
const reviewsSchema = new Schema(
    {
       userId: Number,
       title: String,
       text: String,
       review_id:Number
    }
)
const Review = model('Reviews', reviewsSchema);

export default Review;
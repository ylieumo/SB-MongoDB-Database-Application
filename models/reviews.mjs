import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
const reviewsSchema = new Schema(
    {
       userId: Number,
       title: String,
       text: String,
       review_id: Number
    },
    { timestamps: true }
)

//indexes schemas.
reviewsSchema.index({ userId: 1 });
reviewsSchema.index({ title: 1 });
reviewsSchema.index({ text: 1 });
reviewsSchema.index({ review_id: 1 });

const Review = model('Reviews', reviewsSchema);

export default Review;
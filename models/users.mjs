import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
const userSchema = new Schema(
    {
        user_id:Number,
        name: String,
        email: String,
        password: String
    }
)
const User = model('User', userSchema);
export default User;
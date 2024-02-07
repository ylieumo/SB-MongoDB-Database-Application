import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
const userSchema = new Schema(
    {
      userId: Number,
      name: String,
      username: String,
      email: String,
    },
    { timestamps: true }
)
const Users = model('Users', userSchema);
export default Users;
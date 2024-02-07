import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;
const usersSchema = new Schema(
    {
      userId: Number,
      name: String,
      username: String,
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(email) {
            // Custom email validation using regular expression
            return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
          },
          message: 'Please enter a valid email address',
        },
      },
    },
    { timestamps: true }
)

//indexes schemas.
usersSchema.index({  userId: 1 });
usersSchema.index({ name: 1 });
usersSchema.index({ username: 1 });
usersSchema.index({ email: 1 });

const Users = model('Users', usersSchema);
export default Users;
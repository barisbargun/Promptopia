import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
  },
  image: {
    type: String,
  }
});

// If a model named User in the database it returns User model
// Instead of writing models.User it recreates and this leads an error.
const User = models.User || model("User", UserSchema);

export default User;
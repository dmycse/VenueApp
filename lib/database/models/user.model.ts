import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, minLength: 5, lowercase: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true, default: 'firstName' },
  lastName: { type: String, required: true, default: 'lasttName' },
  photo: { type: String, required: true }
});

const User = models.User || model('User', UserSchema);

export default User;
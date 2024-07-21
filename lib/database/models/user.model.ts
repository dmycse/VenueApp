import { model, models, Schema } from "mongoose";
import mongoose from "mongoose";

console.log('mongoose', mongoose)
console.log('Schema', Schema);
console.log('Model', model);

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, minLength: 5, lowercase: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true }
});
console.log('Models ->', models);
const User = models.User || model('User', UserSchema);

export default User;
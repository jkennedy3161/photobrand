import mongoose from 'mongoose';
import bcrypt from bcrypt;

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', UserSchema);
import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let ProfileSchema = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  firstName: String,
  lastName: String,
  email: String,
  avatar: {
    type: String,
    required: true
  },
  studioName: String
});

module.exports = mongoose.model('profile', ProfileSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  comments: [{ body: String, date: Date }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

let userModel = mongoose.model('User', userSchema);

exports.UserModel = userModel;
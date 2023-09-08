const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlenght: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: { type: String, required: true, minlenght: 6 },
  avatar: {
    type: String,
  },
  bio: { type: String, required: true, maxlength: 160 },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("Users", userSchema);

module.exports = User;

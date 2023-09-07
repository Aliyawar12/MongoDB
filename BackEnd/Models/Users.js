
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,  unique: true,},
  role: { type: String,
    enum: {
      values: ['Farmer', 'Buyer', 'farmer', 'buyer'],
      message: '{VALUE} is not a valid role', 
    },
     required: true,},
  password: { type: String, required: true },
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
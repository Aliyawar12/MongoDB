const mongoose = require('mongoose');

const cropsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discription: { type: String, required: true,},
  price: { type: Number, required: true,},
  quantity: { type: String, required: true },
  location: { type: String, required: true },
  
});

const Crops = mongoose.model('Crops', cropsSchema);

module.exports = Crops;
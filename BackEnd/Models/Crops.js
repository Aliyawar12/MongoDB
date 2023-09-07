const mongoose = require('mongoose');

const cropsSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please add a Name"] },
  discription: { type: String, required: [true, "Please add a description"]},
  price: { type: Number, required: [true, "Please add a Price"]},
  quantity: { type: String, required: [true, "Please add a quantity"] },
  location: { type: String, 
    enum: {
      values : ['Okara',  'Sahiwal', 'Pakpattan'],
      message : `{location} no valid`,
    },
    required: [true, "Please add a Location"] }
}, 
{ 
  timestamps: true 
});

const Crops = mongoose.model('Crops', cropsSchema);

module.exports = Crops;

const Crops = require('../Models/Crops.js');


exports.createCrops = async (req, res) => {
  try {

    const newCrops = new Crops({
      name: req.body.name,
      discription: req.body.discription,
      price: req.body.price,
      quantity: req.body.quantity,
      location: req.body.location,
    });

    const savedCrops = await newCrops.save();
    res.status(201).json(savedCrops);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create Crop data' });
  }
};
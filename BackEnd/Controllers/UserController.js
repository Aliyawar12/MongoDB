const User = require('../Models/Users.js');

// Create a new task
exports.createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      city: req.body.city,
      password: req.body.password,
      // You can set other fields here
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user/ Email Already Registered' });
  }
};

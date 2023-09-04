const bcrypt = require('bcrypt');
const User = require('../Models/Users');

exports.createUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10); 

  
    const newUser = new User({
      name: name,
      email: email,
      role: role,
      password: hashedPassword, 
    });

    
    const savedUser = await newUser.save();

    
    res.status(201).json(savedUser);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ message: 'Failed to create user / Email Already Registered' });
  }
};





        
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.post('/', UserController.createUser);

module.exports = router;

const User = require('../Models/Users.js');

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

module.exports = router;

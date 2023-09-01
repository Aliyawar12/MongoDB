const express = require('express');
const router = express.Router();
const taskUserController = require('../Controllers/TaskUserController');

// Create a new task
router.post('/taskuser', taskUserController.createTaskUser);
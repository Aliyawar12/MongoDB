// controllers/taskController.js
const Task = require('../Models/TaskUser.js');

// Create a new task
exports.createTaskUser = async (req, res) => {
    try {
      const newTask = new TaskUser({
        task_id: req.body.task_id,
        user_id: req.body.user_id,
        assigned_date: req.body.assigned_date
        // You can set other fields here
      });
  
      const savedTaskUser = await newTaskUser.save();
      res.status(201).json(savedTaskUser);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create taskUser' });
    }
  };
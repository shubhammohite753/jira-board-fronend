import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all tasks for the logged-in user
router.get('/', protect, getTasks);

// Create a new task
router.post('/', protect, createTask);

// Update a task
router.put('/:id', protect, updateTask);

// Delete a task
router.delete('/:id', protect, deleteTask);

export default router;

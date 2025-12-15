import express from 'express';
import { loginUser, registerUser } from '../Controllers/authController.js';


const router = express.Router();

// Register route
router.post("/register", registerUser);
// Login route
router.post("/login", loginUser);

export default router;
import express from 'express';
import { loginUser, registerUser, forgotPassword, resetPassword } from '../Controllers/authController.js';


const router = express.Router();

// Register route
router.post("/register", registerUser);
// Login route
router.post("/login", loginUser);
//forgot password route
router.post("/forgot-password", forgotPassword);
// reset password route
router.post("/reset-password/:id/:token", resetPassword)

export default router;
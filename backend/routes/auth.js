import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { signup, login, getMe } from "../controllers/authController.js";


const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.get('/me', authMiddleware, getMe);

export default router;
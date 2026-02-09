import express from "express";
import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// Public routes - no arcjet to prevent blocking legitimate auth attempts
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Protected routes - with arcjet protection
router.put("/update-profile", arcjetProtection, protectRoute, updateProfile);

router.get("/check", arcjetProtection, protectRoute, (req, res) => res.status(200).json(req.user));

export default router;

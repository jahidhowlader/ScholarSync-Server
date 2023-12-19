import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

// POST | USER CREATION
router.post("/register", register)

// POST | USER CREDENTIAL
router.post("/login", login)

export default router
import express from "express";
import { googleSignin, login, register } from "../controllers/auth.js";

const router = express.Router();

// POST | USER CREATION
router.post("/register", register)

// POST | USER CREDENTIAL
router.post("/login", login)

// POST | GOOGLE SIGNIN
router.post("/googleSignin", googleSignin)

export default router
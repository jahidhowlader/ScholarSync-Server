import express from "express";
import { createToken } from "../controllers/jwt.js";

const router = express.Router();

// POST | POST ACCESS TOKEN WITH JWT
router.post("/", createToken)

export default router
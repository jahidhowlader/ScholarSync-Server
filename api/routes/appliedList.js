import express from "express";
import { applyCourse, getApplyCourse } from "../controllers/appliedList.js";

const router = express.Router();

router.post("/", applyCourse)

router.get("/:email", getApplyCourse)


export default router
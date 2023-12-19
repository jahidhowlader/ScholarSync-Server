import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { addCourse, allCourses } from "../controllers/courses.js";

const router = express.Router();

// POST | ADD COURSE BY ADMIN
router.post("/", verifyAdmin, addCourse)

// GET | GET ALL COURSES
router.get("/", allCourses)

export default router
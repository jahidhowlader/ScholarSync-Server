import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { addCourse, allCourses } from "../controllers/courses.js";

const router = express.Router();

router.post("/", verifyAdmin, addCourse)

router.get("/", allCourses)

export default router
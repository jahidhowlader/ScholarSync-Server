import express from "express";
import { addCourseByClient, allUser, singleUser } from "../controllers/users.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/:email", singleUser)

router.get("/", verifyAdmin, allUser)

router.patch('/addCourses', addCourseByClient)

export default router
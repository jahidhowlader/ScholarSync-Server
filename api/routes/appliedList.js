import express from "express";
import { applyCourse, approveApplyCourse, getAllApplyCourse, getApplyCourse, rejectApplyCourse } from "../controllers/appliedList.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// POST 
router.post("/", applyCourse)

// GET | GET USER ADMISION LIST
router.get("/:email", verifyUser, getApplyCourse)

// GET | GET ALL ADMISSION REQUEST FOR ADMIN
router.get("/", verifyAdmin, getAllApplyCourse)

// DELETE | REJECT ADMISSION REQUEST
router.delete("/:id", verifyAdmin, rejectApplyCourse)

// PATCH | APRROVE ADMISSION REQUEST
router.patch("/:id", verifyAdmin, approveApplyCourse)


export default router
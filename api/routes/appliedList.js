import express from "express";
import { applyCourse, approveApplyCourse, getAllApplyCourse, getApplyCourse, rejectApplyCourse } from "../controllers/appliedList.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", applyCourse)

router.get("/:email", verifyUser, getApplyCourse)

router.get("/", verifyAdmin, getAllApplyCourse)

router.delete("/:id", verifyAdmin, rejectApplyCourse)

router.patch("/:id", verifyAdmin, approveApplyCourse)


export default router
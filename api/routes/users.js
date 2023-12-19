import express from "express";
import { allUser, singleUser } from "../controllers/users.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// GET | SINGLE USER
router.get("/:email", singleUser)

// GET | ALL USER FOR ADMIN
router.get("/", verifyAdmin, allUser)


export default router
import express from "express";
import { allUser, singleUser } from "../controllers/users.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/:email", singleUser)

router.get("/", verifyAdmin, allUser)

export default router
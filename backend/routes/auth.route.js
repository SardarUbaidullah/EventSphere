import express from "express";
import { getUser, registerUser } from "../controllers/auth.controller";
const router = express.Router();


router.get("/users",getUser)
router.post("/register",registerUser)
export default router;
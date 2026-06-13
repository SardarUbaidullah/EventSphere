import express from "express";
import { getUser, registration } from "../controllers/auth.controller.js";
import { authMiddleware,adminMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();


router.get("/users",getUser)
router.post("/register",registration)
router.post("/",authMiddleware,(req,res)=>{
    res.json({
        message : "Auth Route"
    })
})  
router.post("/admin",authMiddleware,adminMiddleware,(req,res)=>{
    res.json({
        message : "Admin Route"
    })
})
export default router;
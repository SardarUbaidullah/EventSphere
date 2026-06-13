import express from "express";
import "dotenv/config"
import { connectDB } from "./config/db.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser())

connectDB();

app.use(express.json())

app.use(express.urlencoded({ extended:true}))

const PORT = process.env.PORT;



app.use("/api/auth",authRoute)

app.listen(PORT, () => {
    console.log(`Server is Runnig on Port ${PORT}`);
})
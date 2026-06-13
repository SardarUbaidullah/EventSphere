import express from "express";
import "dotenv/config"
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use(express.json())

app.use(express.urlencoded({ extended:true}))

const PORT = process.env.PORT;


app.get("/", ()=>{
    console.log("Hello World")
})


app.listen(PORT, () => {
    console.log(`Server is Runnig on Port ${PORT}`);
})
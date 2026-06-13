import { userModel } from "../models/auth.model";


//to get users
export const getUser = async (req,res)=>{
 const {name,email,password,role} = req.body;

   try {
     const users = await userModel.find().sort({createdAt: -1})
     res.json(users) 
   } catch (error) {
    res.status(500).json({
        message : error.message
    })
   }

 }

export const createUser = (req,res)=>{
    const {name,email,password,role}= req.body;
 if(!name||!email||!password||!role){
    return res.status(804).json({
        message : "All Fields are required"
    })}


} 



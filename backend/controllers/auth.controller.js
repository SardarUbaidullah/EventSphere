import { userModel } from "../models/auth.model";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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

export const registration = async (req,res)=>{
  const {name,email,password,role} = req.body;
  try{
  const userExists = await userModel.findOne({email})
  if(userExists){
    return res.status(400).json({
        message : "User already exists"
    })
  }
  if(!name||!email||!password||!role){
    return res.status(400).json({
        message : "All Fields are required"
    })
  }

  const hashedPassword = await bcrypt.hash(password,10)


  const user = await userModel.create({
    name,email,password:hashedPassword,role
  })

const token = jwt.sign({id : user._id},process.env.JWT_SECRET,{
    expiresIn : "1d"
})
res.cookie("token",token)

  res.status(201).json({
    message : "User created successfully",
    user,
    token
  })


  }
  catch(error){
    res.status(500).json({
        message : error.message
    })
}


} 


}
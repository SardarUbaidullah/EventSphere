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




import { Request, Response } from "express";
import { AuthService } from "./auth.service";

 

 const loginUser = async (req:Request, res:Response) =>{
   try {
     const user = await AuthService.loginUserDB(req.body);
    
     return res.status(200).json({
        success:true,
        message: "User Login Succesfull",
        user
     })

    
   } catch (error) {
    console.log(error)
   }
 }


 export const AuthController = {
    loginUser
 }
import { Request, Response } from "express";
import { ProjectService } from "./project.service";

 
const createProject = async (req:Request,res:Response) =>{
try {
    const paylaod = req.body;
    const result = await ProjectService.createProject(paylaod)

    res.status(200).json({
        success:true,
        message:"Project created successfully",
        data:result
    })
    
} catch (error) {
    console.log(error)
}

 }


 const getAllProject = async (req:Request,res:Response) =>{
     try {
        const result = await ProjectService.getAllProject();
        res.status(200).json({
            success:true,
            message: "Project fetched successfully",
            data:result
        })
        
     } catch (error) {
        console.log(error)
     }

 }


 export const ProjectController = {
    createProject,
    getAllProject
 }
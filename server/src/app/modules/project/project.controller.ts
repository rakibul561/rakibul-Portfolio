import { Request, Response } from "express";
import { ProjectService } from "./project.service";

 
const createProject = async (req:Request,res:Response) =>{
try {
    const paylaod = req.body;
    const result = await ProjectService.createProject()
    
} catch (error) {
    console.log(error)
}

 }


 export const ProjectController = {
    createProject
 }
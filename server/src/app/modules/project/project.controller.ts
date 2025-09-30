import { Request, Response } from "express";
import { ProjectService } from "./project.service";

 
const createProject = async (req:Request,res:Response) =>{
try {
    const paylaod = req.body;
    const result = await ProjectService.createProject(paylaod)

    res.status(200).json({
        success:true,
        message:"Project data created successfully",
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
            message: "Project data fetched successfully",
            data:result
        })
        
     } catch (error) {
        console.log(error)
     }

 }

 const updateProject = async (req:Request,res:Response) =>{
    try {
        const id = Number(req.params.id);
        const payload = req.body;

        const result = await ProjectService.updateProject(id, payload)
        res.status(200).json({
            success:true,
            message: "Project data  updated successfully",
            data:result
        })
        
    } catch (error) {
        console.log(error)
    }
   
 }

 
 const deleteProject = async (req:Request,res:Response) =>{
    try {
        const id = Number(req.params.id);
        const payload = req.body;

        const result = await ProjectService.deleteProject(id, payload)
        res.status(200).json({
            success:true,
            message: "Project data deleted  successfully",
            data:result
        })
        
    } catch (error) {
        console.log(error)
    }
   
 }

 

  

 export const ProjectController = {
    createProject,
    getAllProject,
    updateProject,
    deleteProject
 }
import { Prisma, Project } from "@prisma/client"
import { prisma } from "../../../config/db"

const createProject = async (payload:Prisma.ProjectCreateInput):Promise<Project> =>{

    const result = await prisma.project.create({
        data:payload,
        include: {
            owner: {
                select: {
                    id:true,
                    name:true,
                    email:true
                }
            }
        }
    })

    return result

}

const getAllProject = async () =>{
    
    const result = await prisma.project.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return result
}



export const ProjectService = {
    createProject,
    getAllProject
}
import { Request, Response } from "express"
import { BlogService } from "./blog.service";


const createBlog = async (req:Request, res:Response) =>{
    try {
        const data = req.body;
        const blog = await BlogService.createBlogDB(data)

        res.status(200).json({
            success:true,
            message: "blog Created successfull",
            data:blog
        })
        
    } catch (error) {
         console.log( error)
    }

}

const findAllBlogs = async (req:Request, res:Response) =>{
    try {
        
        const blog = await BlogService.findAllBlogDB()

        res.status(201).json({
            success:true,
            message: "blog data recived successfull",
            data:blog
        })
        
    } catch (error) {
         console.log( error)
    }

}

const getSingleBlog = async (req:Request, res:Response) => {
    try {
        const id = Number(req.params.id)
        const result = await BlogService.getSingleBlog(id)
        res.status(201).json({
            success:true,
            message: "single blog recived successfull",
            data:result
        })
        
        
    } catch (error) {
        console.log(error)
    }

}




const updateBlog = async (req:Request, res:Response) =>{
    try {
        const id = Number(req.params.id);
        const payload = req.body;
        
        const result = await BlogService.updateBlog(id, payload);
        res.status(200).json({
            success:true,
            message: "blog updated successfull",
            data:result
        })

    } catch (error) {
        console.log(error)
    }

}

const deleteBlog = async (req:Request, res:Response) =>{
    try {
        const id = Number(req.params.id);
        const result = await BlogService.deleteBlog(id);
        res.status(200).json({
            success:true,
            message: "blog deleted successfull",
            data:result
        })

    } catch (error) {
        console.log(error)
    }

}



export const BlogController = {
    createBlog,
    findAllBlogs,
    updateBlog,
    deleteBlog,
    getSingleBlog
}
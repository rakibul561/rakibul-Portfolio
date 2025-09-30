import { Blog, Prisma } from "@prisma/client"
import { prisma } from "../../../config/db"
 
 const createBlogDB = async ({title, content, thumbnail, authorId}:{title:string, content:string, thumbnail:string, authorId: number }) =>{
    const resutl = await prisma.blog.create({
        data : {
            title,
            content,
            thumbnail,
            authorId
        }
    })
    return resutl

 }

 const findAllBlogDB = async () =>{
    const resutl = await prisma.blog.findMany({
         include: {
            author:true
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return resutl

 }


 const getSingleBlog  = async (id: number)=> {
     
    const result = await prisma.blog.findUnique({
        where: {
            id
        }
    })

    return result
   
     
 } 

 const updateBlog  = async (id: number, payload:Prisma.BlogUpdateInput):Promise<Blog> => {
     
    const result = await prisma.blog.update( {
        where : {
            id
        }, 
        data : {
            ...payload
        }
    });
    return result
     
 } 
 
 const deleteBlog  = async (id: number) => {
     
    const result = await prisma.blog.delete( {
        where : {
            id
        }, 
        
    });
    return result
     
 } 





 export const BlogService = {
    createBlogDB,
    findAllBlogDB,
    updateBlog,
    deleteBlog,
    getSingleBlog
 }
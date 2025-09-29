 
import  express  from 'express';
import { BlogController } from './blog.controller';

 const router = express.Router();

router.post("/", BlogController.createBlog)
router.get("/", BlogController.findAllBlogs)
router.patch("/:id", BlogController.updateBlog)
router.delete("/:id", BlogController.deleteBlog)


export const BlogRouter = router;
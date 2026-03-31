
import BlogTable from "@/components/module/Blogs/BlogTable";
import { fakeBlogs as blogs } from "@/data/fakeBlogs";

const ManageBlog = async () => {

  return <BlogTable blogs={blogs} />;
};

export default ManageBlog;

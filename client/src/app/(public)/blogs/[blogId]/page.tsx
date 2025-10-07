import BlogDetailsCard from "@/components/module/Blogs/BlogDetails";
import { getBlogById } from "@/service";
import React from "react";


const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);
  
 

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
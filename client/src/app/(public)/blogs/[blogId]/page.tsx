import BlogDetailsCard from "@/components/module/Blogs/BlogDetails";
import { fakeBlogs } from "@/data/fakeBlogs";
import React from "react";


const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blogResponse = fakeBlogs.find((b) => b.id.toString() === blogId);
  const blog = blogResponse;

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
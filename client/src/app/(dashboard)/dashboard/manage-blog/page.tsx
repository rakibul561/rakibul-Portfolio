
import BlogTable from "@/components/module/Blogs/BlogTable";

const ManageBlog = async () => {
  
  const res = await fetch(`${process.env.NEXT_BASE_API}/api/blog`, {
    cache: "no-store",
  });
  const { data: blogs } = await res.json();

  return <BlogTable blogs={blogs} />;
};

export default ManageBlog;

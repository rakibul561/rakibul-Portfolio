export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_BASE_API}/api/blog/${blogId}`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();
  console.log(blogs)
  return blogs
};
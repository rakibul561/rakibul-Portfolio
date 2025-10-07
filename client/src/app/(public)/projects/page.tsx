import ProjectCard from "@/components/module/Project/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Next Project",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const AllProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_API}/api/project`, {
    next:{revalidate:20}
  });
  const { data: project } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
  
    
      <div className="my-5">
        <ProjectCard post={project} />
      </div>
    </div>
  );
};

export default AllProjectPage;

import ProjectCard from "@/components/module/Project/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Next Project",
  description:
    "Browse all Project posts on web development.",
};

const AllProject = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_API}/api/project`, {
    cache: "no-store",
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

export default AllProject;

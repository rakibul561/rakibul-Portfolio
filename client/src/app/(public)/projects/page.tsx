import ProjectCard from "@/components/module/Project/ProjectCard";
import { Metadata } from "next";
import { fakeProjects as project } from "@/data/fakeProjects";

export const metadata: Metadata = {
  title: "Project | Next Project",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const AllProjectPage = async () => {

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
  
    
      <div className="my-5">
        <ProjectCard post={project} />
      </div>
    </div>
  );
};

export default AllProjectPage;

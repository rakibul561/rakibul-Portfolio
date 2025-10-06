import ProjectTable from "@/components/module/Project/ProjectTable";
import React from "react";

const ManageProject = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_API}/api/project`, {
    cache: "no-store",
  });

  const { data: projects } = await res.json();

  return <ProjectTable projects={projects} />;
};

export default ManageProject;

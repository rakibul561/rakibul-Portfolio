import ProjectTable from "@/components/module/Project/ProjectTable";
import React from "react";
import { fakeProjects as projects } from "@/data/fakeProjects";

const ManageProject = async () => {
  return <ProjectTable projects={projects} />;
};

export default ManageProject;

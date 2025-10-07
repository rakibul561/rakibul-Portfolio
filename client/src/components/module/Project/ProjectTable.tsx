"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import toast from "react-hot-toast";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  image?: string;
  liveUrl?: string;
};

const ProjectTable = ({ projects }: { projects: Project[] }) => {
  const [projectList, setProjectList] = useState(projects);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`https://protfolio-server-ivory.vercel.app/api/project/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setProjectList(projectList.filter((project) => project.id !== id));
        toast.success("Project deleted successfully");
      } else {
        toast.error("Failed to delete project");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full p-4 mx-auto">
      <Table>
        <TableCaption>Manage your projects here.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-center">Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projectList.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.id}</TableCell>

              <TableCell>
                <div className="relative w-14 h-14">
                  <Image
                    src={project.image ?? "/placeholder.png"}
                    alt={project.title}
                    fill
                    className="rounded object-cover border border-gray-600"
                  />
                </div>
              </TableCell>

              <TableCell>{project.title}</TableCell>

              <TableCell className="max-w-[200px] truncate text-gray-300">
                {project.description}
              </TableCell>

              <TableCell className="text-center">
                {new Date(project.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell className="text-right space-x-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Live
                </a>

                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTable;

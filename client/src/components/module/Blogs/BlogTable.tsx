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

type Blog = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  thumbnail?: string;
};

const BlogTable = ({ blogs }: { blogs: Blog[] }) => {
  const [blogList, setBlogList] = useState(blogs);

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // Delete blog
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:5000/api/blog/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setBlogList(blogList.filter((blog) => blog.id !== id));
        toast.success("Blog deleted successfully");
      } else {
        toast.error("Failed to delete blog");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  // Open modal for update
  const handleUpdate = (blog: Blog) => {
    setEditingBlog(blog);
    setEditTitle(blog.title);
    setEditContent(blog.content);
    setIsOpen(true);
  };

  // Save updated blog
  const handleSave = async () => {
    if (!editingBlog) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/blog/${editingBlog.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: editTitle, content: editContent }),
        }
      );

      if (res.ok) {
        setBlogList(
          blogList.map((b) =>
            b.id === editingBlog.id
              ? { ...b, title: editTitle, content: editContent }
              : b
          )
        );
        toast.success("Blog updated successfully");
        setIsOpen(false);
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full p-4 mx-auto">
      <Table>
        <TableCaption>Manage your blogs here.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead className="text-center">Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogList.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="font-medium">{blog.id}</TableCell>
              <TableCell>
                {blog.title.length > 20
                  ? blog.title.slice(0, 30) + "..."
                  : blog.title}
              </TableCell>

              <TableCell>
                {blog.content.length > 100
                  ? blog.content.slice(0, 60) + "..."
                  : blog.content}
              </TableCell>
              <TableCell className="text-center">
                {new Date(blog.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  onClick={() => handleUpdate(blog)}
                >
                  Update
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Update Modal */}
      {isOpen && editingBlog && (
        <div className="fixed inset-0  bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#112240] p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
            <h2 className="text-2xl font-bold mb-6 text-center border-b pb-3">
              Update Blog
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium  mb-2">Title</label>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-2">
                  Content
                </label>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="border border-gray-300 p-3 w-full h-32 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Write your content here..."
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTable;

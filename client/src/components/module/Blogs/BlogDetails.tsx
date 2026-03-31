/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { User, Calendar, Tag, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BlogDetailsCard({ blog }: { blog: any }) {
  if (!blog?.data && !blog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-slate-300 not-italic">Blog not found</h2>
          <Link href="/blogs" className="text-[#03e9f4] hover:underline not-italic">Return to all blogs</Link>
        </div>
      </div>
    );
  }

  // Handle case where we manually pass the unwrapped object or {data: ...} wrapped object
  const post = blog.data || blog;

  // Format Dates safely
  const formattedDate = post?.createdAt ? new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : "Unknown Date";

  const updatedDate = post?.updatedAt 
    ? new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) 
    : formattedDate;

  return (
    <main className="max-w-4xl mx-auto py-16 px-6 font-sans not-italic text-slate-200">
      
      {/* Back Button */}
      <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#03e9f4] transition-colors mb-12 not-italic group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium tracking-wide">Back to blogs</span>
      </Link>

      <article>
        {/* Header Section */}
        <header className="mb-12 space-y-8">
          <div className="flex items-center gap-3 text-[#03e9f4] font-medium tracking-wider uppercase text-sm not-italic">
            <Tag size={16} />
            <span>Development • Resources</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight not-italic drop-shadow-sm">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3 not-italic">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <User size={18} className="text-[#03e9f4]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Author</p>
                <p className="font-medium text-slate-300">{post.author?.name || "Rakibul Hasan"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 not-italic">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <Calendar size={18} className="text-[#03e9f4]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Published</p>
                <p className="font-medium text-slate-300">{formattedDate}</p>
              </div>
            </div>
          </div>
        </header>

        {/* High Quality Thumbnail Banner */}
        {post.thumbnail && (
          <div className="relative w-full aspect-[21/9] md:aspect-[2/1] mb-16 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-[#010610]/80 via-transparent to-transparent z-10"></div>
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose prose-invert prose-lg max-w-none not-italic">
          <div className="text-slate-300 text-lg md:text-xl leading-relaxed whitespace-pre-wrap font-light tracking-wide">
            {post.content}
          </div>
        </div>

        {/* Footer Meta */}
        <footer className="mt-20 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 not-italic font-medium">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800">ID: {post.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="opacity-70" />
              <span>Last updated: {updatedDate}</span>
            </div>
          </div>
        </footer>
      </article>

    </main>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default function BlogDetailsCard({ blog }: { blog: any }) {
    console.log(blog)
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
        {blog.title}
      </h1>

      {/* Author & Date */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-sm font-medium">Rakibul Hasan</span>
        </div>
        <span className="">•</span>
        <div className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">{formattedDate}</span>
        </div>
      </div>

      {/* Thumbnail */}
      {blog.thumbnail && (
        <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={blog.thumbnail || "image not found"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <div className=" leading-relaxed text-lg whitespace-pre-wrap">
          {blog.content}
        </div>
      </article>

      {/* Footer Info */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm ">
          <span>Article ID: {blog.id}</span>
          <span>
            Last updated:{" "}
            {new Date(blog.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </main>
  );
}
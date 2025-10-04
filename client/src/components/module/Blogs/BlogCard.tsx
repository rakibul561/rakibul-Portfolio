/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }: { post: any }) {
  console.log(post.thumbnail);

  // Safe thumbnail logic
  const thumbnailUrl =
    post.thumbnail && post.thumbnail.startsWith("http")
      ? post.thumbnail // remote URL
      : post.thumbnail?.endsWith(".jpeg") ||
        post.thumbnail?.endsWith(".jpg") ||
        post.thumbnail?.endsWith(".png")
      ? `/images/${post.thumbnail}` // local image inside public/images
      : "https://via.placeholder.com/600x400?text=Blog+Image"; // fallback

  return (
    <Link
      href={`/blogs/${post.id}`}
      className="block group transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Thumbnail Section */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {post.content}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                alt={post.author?.name || "Author"}
                width={36}
                height={36}
                className="rounded-full border-2 border-gray-200 dark:border-gray-700"
              />
              <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
                {post.author?.name || "Unknown Author"}
              </span>
            </div>

            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Read More */}
          <div className="text-right">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { getUserSession } from "@/helpers/getUsersession";
import Link from "next/link";

export default async function DashboardHome() {
  const session = await getUserSession();

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-6 w-full text-white"
      style={{
        background: `linear-gradient(
          to bottom left,
          #05163b,
          #092152,
          #010610,
          #010610,
          #092152,
          #010610
        )`,
      }}
    >
      {/* Welcome Message */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Welcome,{" "}
        <span className="text-blue-400">
          {session?.user?.name || "Guest"}
        </span>
        !
      </h1>

      {/* Email */}
      <p className="text-lg md:text-xl text-gray-300 italic text-center mb-4">
        {session?.user?.email || "No email found"}
      </p>

      {/* Motivational Quote */}
      <p className="text-md md:text-lg text-gray-400 italic text-center max-w-xl mb-8">
        
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        
        <Link href="/dashboard/create-blog"> 
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors rounded-lg shadow-md font-medium">
          Create Blog
        </button>
        
        </Link>
        <Link href="/dashboard/create-project"> 
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg shadow-md font-medium">
          Create Project
        </button>
            </Link>
        
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, ClipboardList } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const { status } = useSession();

  return (
    <aside
      className="flex h-screen w-64 flex-col text-white"
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
      {/* Top navigation */}
      <nav className="flex-1 mt-4  p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SidebarLink
            href="/"
            icon={<Home className="h-4 mt-2 mb-2 w-4" />}
            label="Home"
          />
          <SidebarLink
            href="/dashboard/create-blog"
            icon={<PlusCircle className="h-4 mb-2 w-4" />}
            label="Create Blog"
          />
          <SidebarLink
            href="/dashboard/create-project"
            icon={<PlusCircle className="h-4 mb-2 w-4" />}
            label="Create Project"
          />
          <SidebarLink
            href="/dashboard/manage-blog"
            icon={<ClipboardList className="h-4 mb-2 w-4" />}
            label="Manage Blog"
          />
          <SidebarLink
            href="/dashboard/manage-project"
            icon={<ClipboardList className="h-4 w-4" />}
            label="Manage Project"
          />
        </motion.div>
      </nav>

      {/* Bottom action */}
      <div className="p-4 border-t border-gray-700">
        {status === "authenticated" && (
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 bg-red-600 hover:bg-red-700 text-white transition-all"
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        )}
      </div>
    </aside>
  );
}

/* 🔹 Reusable Sidebar Link Component */
function SidebarLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium 
                 hover:bg-white/10 hover:text-blue-300 transition-all duration-200"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

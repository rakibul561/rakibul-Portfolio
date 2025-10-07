"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  const links = [
    { path: "/", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "/blogs", label: "All-Blogs" },
    { path: "/login", label: "Login" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Smooth scroll for section links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(path);
      section?.scrollIntoView({ behavior: "smooth" });
      setIsToggle(false);
    } else {
      setIsToggle(false);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 ${
        scroll ? "md:py-8 py-6 backdrop-blur-3xl" : "py-3 bg-transparent"
      } transition-all ease-in duration-300 px-3 md:px-0`}
    >
      <div className="flex mt-4 text-2xl justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Rakibul Coder Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* -------- Mobile Menu -------- */}
        <ul
          className={`flex flex-col md:hidden items-center gap-10 uppercase text-sm cursor-pointer text-slate-300 text-[16px] font-medium ${
            isToggle ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <div className="w-32">
            <Image
              src="/logo.png"
              alt="Rakibul Coder Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {links.map((nav, i) => (
            <li key={i}>
              <Link
                href={nav.path}
                onClick={(e) => handleNavClick(e, nav.path)}
              >
                <span
                  className={`nav-link ${
                    pathname === nav.path ? "active" : ""
                  }`}
                >
                  {nav.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* -------- Desktop Menu -------- */}
        <ul className="md:flex hidden items-center gap-7 uppercase cursor-pointer text-slate-300 text-[16px] font-medium">
          {links.map((nav, i) => (
            <li key={i}>
              <Link
                href={nav.path}
                onClick={(e) => handleNavClick(e, nav.path)}
              >
                <span
                  className={`nav-link ${
                    pathname === nav.path ? "active" : ""
                  }`}
                >
                  {nav.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* -------- Mobile Toggle -------- */}
        <button
          className={`md:hidden text-3xl transition-transform duration-300 pr-3 ease-in-out ${
            isToggle ? "transform rotate-45" : ""
          }`}
          onClick={() => setIsToggle(!isToggle)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

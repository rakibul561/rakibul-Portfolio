"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import './Navbar.css';
import Image from "next/image";


const Navber =  () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();



  // navs links
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/login", label: "Login" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 ${scroll ? "md:py-8 py-6 backdrop-blur-3xl" : "py-3 bg-transparent"} transition-all ease-in duration-300 px-3 md:px-0`}
    >
      <div className="flex mt-4 text-2xl justify-between items-center max-w-7xl mx-auto">
        <Image
                src="/logo.png"
                alt="Rakibul Coder Logo"
                width={120} 
                height={40} 
                priority 
            />
        

        {/* Mobile Menu */}
        <ul className={`flex flex-col md:hidden items-center gap-10 uppercase text-sm cursor-pointer font-italic text-slate-300 text-[16px] font-medium ${isToggle ? "sidebar-open" : "sidebar-closed"}`}>
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
              <Link href={nav.path} onClick={() => setIsToggle(false)}>
                <span className={`nav-link ${pathname === nav.path ? "active" : ""}`}>
                  {nav.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Menu */}
        <ul className="md:flex hidden items-center gap-7 uppercase cursor-pointer font-italic text-slate-300 text-[16px] font-medium">
          {links.map((nav, i) => (
            <li key={i}>
              <Link href={nav.path}>
                <span className={`nav-link ${pathname === nav.path ? "active" : ""}`}>
                  {nav.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden text-3xl transition-transform duration-300 pr-3 ease-in-out ${isToggle ? "transform rotate-45" : ""}`}
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

export default Navber;

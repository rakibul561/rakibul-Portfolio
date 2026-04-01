"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check initial theme exactly as rendered
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = (event: React.MouseEvent) => {
    const isDark = theme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (!(document as any).startViewTransition) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(nextTheme);
      setTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (document as any).startViewTransition(() => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(nextTheme);
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: nextTheme === "dark" ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 800,
          easing: "ease-in-out",
          pseudoElement: nextTheme === "dark"
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/#about", label: "Experience" },
    { path: "/#skills", label: "Skills" },
    { path: "/#projects", label: "Projects" },
    { path: "/blogs", label: "All-Blogs" },
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
    if (path.startsWith("/#")) {
      e.preventDefault(); // Always prevent default for custom routing
      setIsToggle(false);
      
      if (pathname === "/") {
        // If already on homepage, just scroll smoothly
        const hash = path.substring(1); // extracts "#about" from "/#about"
        const section = document.querySelector(hash);
        section?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If on another page, navigate via router
        router.push(path);
      }
    } else {
      setIsToggle(false);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 ${scroll ? "md:py-8 py-6 backdrop-blur-3xl" : "py-3 bg-transparent"
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
          className={`flex flex-col md:hidden items-center gap-10 uppercase text-sm cursor-pointer text-slate-300 text-[16px] font-medium ${isToggle ? "sidebar-open" : "sidebar-closed"
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
                  className={`nav-link ${pathname === nav.path ? "active" : ""
                    }`}
                >
                  {nav.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* -------- Desktop Menu & Theme Toggle -------- */}
        <div className="md:flex hidden items-center gap-10">
          <ul className="flex items-center gap-7 uppercase cursor-pointer text-slate-300 text-[16px] font-medium">
            {links.map((nav, i) => (
              <li key={i}>
                <Link
                  href={nav.path}
                  onClick={(e) => handleNavClick(e, nav.path)}
                >
                  <span
                    className={`nav-link ${pathname === nav.path ? "active" : ""
                      }`}
                  >
                    {nav.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-[#03e9f4] transition duration-300 shadow-[0_0_10px_rgba(3,233,244,0.1)] hover:shadow-[0_0_15px_rgba(3,233,244,0.3)] group z-[99999]"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} className="group-hover:rotate-180 transition-transform duration-500" /> : <Moon size={20} className="group-hover:-rotate-12 transition-transform duration-500" />}
          </button>
        </div>

        {/* -------- Mobile Toggle -------- */}
        <div className="md:hidden flex items-center gap-5">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-800/80 text-[#03e9f4] transition duration-300 z-[99999]"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={`text-3xl transition-transform duration-300 pr-3 ease-in-out ${isToggle ? "transform rotate-45" : ""
              }`}
            onClick={() => setIsToggle(!isToggle)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

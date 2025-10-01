"use client";

import { useEffect, useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import './Navbar.css'

const Navber = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  // navs links
  const links = [
    { path: "home", label: "Home" },
    { path: "about", label: "About" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "services", label: "Services" },
    { path: "contact", label: "Contact" },
  ];

  // define a home screen height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 ${scroll ? "md:py-8 py-6 backdrop-blur-3xl" : "py-3 bg-transparent"} transition-all ease-in duration-300 px-3 md:px-0`}
      >
        <div className={`flex mt-4 text-2xl justify-between items-center max-w-7xl mx-auto`}>
          <div className="w-32">
            {/* <img src={logo} alt="" /> */}
            <h1> hello</h1>
          </div>
          {/* mobile device */}
          <ul
            className={`flex flex-col md:hidden items-center gap-10 uppercase text-sm cursor-pointer font-italic  text-slate-300  text-[16px] font-medium  ${ isToggle ? "sidebar-open" : "sidebar-closed"} `}>
            <div className="w-32">
            {/* <img src={logo} alt="" /> */}
            <h1>hello</h1>
          </div>
            {links.map((nav, i) => (
              <li key={i + 1}>
                <ScrollLink
                  onClick={() => setIsToggle(false)}
                  to={nav.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className={`nav-link ${nav.path === "home" && !scroll ? "nav-link active" : "" }`}>
                  {nav.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          {/* laptop device */}
          <ul className={` md:flex hidden items-center  gap-7 uppercase cursor-pointer font-italic  text-slate-300  text-[16px] font-medium`}>
            {links.map((nav, i) => (
              <li key={i + 1}>
                <ScrollLink
                  to={nav.path}
                  spy={true}
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  // offset={-50}
                  className={`nav-link ${nav.path === "home" && !scroll ? "nav-link active" : "" }`}
                >
                  {nav.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          {/* condition bar in mobile device */}
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
    </>
  );
};

export default Navber;
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

        {/* Left Section (Name & Availability) */}
        <div className="flex items-center gap-3 text-[14px] font-bold w-full md:w-1/3 justify-center md:justify-start">
          <span className=" tracking-wider">RAKIBUL</span>
          <span className="text-gray-300">/</span>
          <div className="flex items-center gap-2 text-slate-500 tracking-wider">
            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            AVAILABLE
          </div>
        </div>

        {/* Center Links */}
        <div className="flex items-center justify-center gap-6 md:gap-10 text-[13px] font-semibold tracking-[0.15em] text-slate-500 w-full md:w-1/3">
          <Link href="#about" className="hover:text-gray-900 transition">EXPERIENCE</Link>
          <Link href="/blogs" className="hover:text-gray-900 transition">BLOGS</Link>
          <a href="https://drive.google.com/file/d/1ZLvh1s1SlpAYZvYuubnRvg9tjpmOfM96/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition">RESUME</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-center md:justify-end gap-5 text-slate-400 text-[18px] w-full md:w-1/3 mt-4 md:mt-0">
          <Link href="https://github.com/rakibul561" className="hover:text-gray-700 transition"><FaGithub /></Link>
          <Link href="https://www.linkedin.com/in/rakibul-hasan-b94123271/" className="hover:text-gray-700 transition"><FaLinkedinIn /></Link>
          <a href="mailto:rakibul@example.com" className="hover:text-gray-700 transition"><FaEnvelope /></a>
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-[13px] font-medium text-slate-400 tracking-wide mt-12 md:mt-24">
        <p className="flex-1 text-center md:text-left">
          &copy; {new Date().getFullYear()} — All rights reserved.
        </p>
        <p className="mt-4 md:mt-0 uppercase tracking-widest text-[11px] md:text-[12px] flex-1 text-center md:text-right">
          SOLVING PROBLEMS THROUGH CODE
        </p>
      </div>
    </footer>
  );
};

export default Footer;

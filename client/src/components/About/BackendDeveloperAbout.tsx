/* eslint-disable react/no-unescaped-entities */
"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { SiTypescript, SiNextdotjs, SiReact, SiPrisma, SiMongoose, SiPostgresql, SiVercel, SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useEffect } from "react";

export default function BackendDeveloperAbout() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 font-mono overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        {/* LEFT COLUMN: Editor and Cards */}
        <div data-aos="fade-up" className="lg:col-span-5 space-y-8">
          {/* Beautiful Code Editor Mockup */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0c1322] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Window Controls & Title Bar */}
            <div className="flex items-center px-5 py-4 border-b border-slate-800/80 bg-[#111827]">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_5px_#ff5f5655]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_#ffbd2e55]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_5px_#27c93f55]"></div>
              </div>
              <p className="flex-1 text-center text-[10px] md:text-xs font-mono text-slate-400 tracking-widest uppercase opacity-80 not-italic">
                &lt;/&gt; STACK.TSX - REACT
              </p>
            </div>

            {/* Editor Text Content */}
            <div className="px-6 py-8 font-mono text-[13px] sm:text-sm leading-[2] overflow-x-auto not-italic">
              <div className="flex gap-6">
                <div className="flex flex-col text-slate-700 select-none text-right font-semibold">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                </div>
                <div className="text-slate-300">
                  <p>
                    <span className="text-[#c678dd] font-medium">const</span>{" "}
                    <span className="text-[#e5c07b]">fullStack</span>{" "}
                    <span className="text-[#56b6c2]">=</span>{" "}
                    <span className="text-slate-100">&#123;</span>
                  </p>
                  <p className="pl-6">
                    <span className="text-[#e06c75]">frontend:</span> [
                    <span className="text-[#98c379]">'React'</span>,{" "}
                    <span className="text-[#98c379]">'Next.js'</span>,{" "}
                    <span className="text-[#98c379]">'Tailwind'</span>],
                  </p>
                  <p className="pl-6">
                    <span className="text-[#e06c75]">orm:</span> [
                    <span className="text-[#98c379]">'Prisma'</span>,{" "}
                    <span className="text-[#98c379]">'Mongoose'</span>],
                  </p>
                  <p className="pl-6">
                    <span className="text-[#e06c75]">database:</span> [
                    <span className="text-[#98c379]">'MongoDB'</span>,{" "}
                    <span className="text-[#98c379]">'PostgreSQL'</span>],
                  </p>
                  <p className="pl-6">
                    <span className="text-[#e06c75]">server:</span> [
                    <span className="text-[#98c379]">'VPS'</span>,{" "}
                    <span className="text-[#98c379]">'Nginx'</span>,{" "}
                    <span className="text-[#98c379]">'SSL'</span>],
                  </p>
                  <p className="pl-6">
                    <span className="text-[#e06c75]">deploy:</span>{" "}
                    <span className="text-[#c678dd]">() =&gt;</span>{" "}
                    <span className="text-[#61afef]">ship</span>(
                    <span className="text-[#d19a66]">true</span>)
                  </p>
                  <p className="text-slate-100">&#125;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Glass Effect Stat Cards */}
          <div className="flex gap-5">
            <div className="flex-1 rounded-2xl p-6 text-center border border-slate-800/80 bg-[#0d1525]/80 backdrop-blur hover:bg-[#111a2f] hover:border-[#03e9f4]/30 transition-all duration-300 shadow-xl group">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-[#03e9f4] mb-2 drop-shadow-[0_0_12px_rgba(3,233,244,0.4)] transition-transform group-hover:scale-105 not-italic">
                12+
              </h3>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase not-italic">
                Projects Done
              </p>
            </div>
            <div className="flex-1 rounded-2xl p-6 text-center border border-slate-800/80 bg-[#0d1525]/80 backdrop-blur hover:bg-[#111a2f] hover:border-[#03e9f4]/30 transition-all duration-300 shadow-xl group">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-[#03e9f4] mb-2 drop-shadow-[0_0_12px_rgba(3,233,244,0.4)] transition-transform group-hover:scale-105 not-italic">
                1.0k+
              </h3>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase not-italic">
                Github Commits
              </p>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="pt-8 not-italic">
            <h3 className="text-slate-400 font-medium text-lg mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiTypescript className="text-[#3178C6] text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">TypeScript</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiNextdotjs className="text-black text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">Next.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiReact className="text-[#61DAFB] text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">React</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiPrisma className="text-[#2D3748] text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">Prisma</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiMongoose className="text-[#880000] text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">Mongoose</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiPostgresql className="text-[#4169E1] text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiVercel className="text-black text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">Vercel</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <FaAws className="text-[#FF9900] text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">AWS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-300/80 rounded-lg shadow-sm hover:bg-white transition-all">
                <SiPostman className="text-[#FF6C37] text-lg" />
                <span className="text-slate-800 font-bold text-sm tracking-tight">Postman</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Text content */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:col-span-7 space-y-10"
        >
          <h1 className="text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight not-italic">
            Professional{" "}
            <span className="text-[#03e9f4] drop-shadow-[0_0_10px_rgba(3,233,244,0.3)]">
              Backend Developer
            </span>
            <br className="hidden md:block" /> focused on building scalable
            server architectures.
          </h1>

          <p className="text-slate-400 leading-relaxed text-lg sm:text-xl font-light not-italic max-w-3xl">
            Based in Bangladesh, I am a dedicated Backend Specialist with a deep
            passion for building high-performance server architectures. Since
            embarking on my programming journey in{" "}
            <span className="font-semibold text-white">December 2023</span>, I
            have consistently pushed the boundaries of what's possible, and
            since{" "}
            <span className="font-semibold text-white">December 2025</span>, I
            have been professionally crafting scalable APIs and managing complex
            database systems.
          </p>

          <blockquote className="border-l-[3px] border-[#03e9f4] pl-6 py-1 text-lg sm:text-xl text-slate-300 font-medium italic !leading-snug bg-gradient-to-r from-[#03e9f4]/10 to-transparent">
            "I design rock-solid server architectures that process millions of
            requests with efficiency and security."
          </blockquote>

          {/* Premium Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            {/* Role */}
            <div className="group flex items-center gap-5 bg-[#0f172a]/60 border border-slate-800 hover:border-[#03e9f4]/40 p-5 rounded-2xl transition-all duration-300">
              <div className="p-3.5 bg-slate-900/80 rounded-xl text-[#03e9f4] border border-slate-700/50 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,233,244,0.3)] transition-all">
                <Briefcase size={22} strokeWidth={1.5} />
              </div>
              <div className="not-italic">
                <p className="text-[10px] text-slate-500 tracking-widest uppercase font-semibold mb-1">
                  Role
                </p>
                <p className="text-white font-semibold text-base tracking-wide">
                  Backend Developer
                </p>
              </div>
            </div>

            {/* Company */}
            <div className="group flex items-center gap-5 bg-[#0f172a]/60 border border-slate-800 hover:border-[#03e9f4]/40 p-5 rounded-2xl transition-all duration-300">
              <div className="p-3.5 bg-slate-900/80 rounded-xl text-[#03e9f4] border border-slate-700/50 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,233,244,0.3)] transition-all">
                <CheckCircle2 size={22} strokeWidth={1.5} />
              </div>
              <div className="not-italic">
                <p className="text-[10px] text-slate-500 tracking-widest uppercase font-semibold mb-1">
                  Company
                </p>
                <p className="text-white font-semibold text-base tracking-wide">
                  SM Technology
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="group flex items-center gap-5 bg-[#0f172a]/60 border border-slate-800 hover:border-[#03e9f4]/40 p-5 rounded-2xl transition-all duration-300">
              <div className="p-3.5 bg-slate-900/80 rounded-xl text-[#03e9f4] border border-slate-700/50 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,233,244,0.3)] transition-all">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <div className="not-italic">
                <p className="text-[10px] text-slate-500 tracking-widest uppercase font-semibold mb-1">
                  Location
                </p>
                <p className="text-white font-semibold text-base tracking-wide">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="group flex items-center gap-5 bg-[#0f172a]/60 border border-slate-800 hover:border-[#03e9f4]/40 p-5 rounded-2xl transition-all duration-300">
              <div className="p-3.5 bg-slate-900/80 rounded-xl text-[#03e9f4] border border-slate-700/50 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,233,244,0.3)] transition-all">
                <Calendar size={22} strokeWidth={1.5} />
              </div>
              <div className="not-italic">
                <p className="text-[10px] text-slate-500 tracking-widest uppercase font-semibold mb-1">
                  Experience
                </p>
                <p className="text-white font-semibold text-base tracking-wide">
                  4 Months
                </p>
              </div>
            </div>
          </div>        </div>
      </div>
    </section>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import "./project.css";

import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import projectAnimation from "../../../assets/lottie-animation/project.json";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string[];
  liveUrl: string;
  features: string[];
  technology: string[];
}

const ProjectCard = ({ post }: { post: Project[] }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const handleSlideChange = (swiper: any) => {
    setCurrentProjectIndex(swiper.realIndex);
  };

  return (
    <section id="projects" className="max-w-[1500px] w-full mx-auto py-16 md:py-24 overflow-hidden">

      <h1
        data-aos="fade-down"
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight uppercase"
      >
        Featured <span className="text-[#03e9f4] drop-shadow-[0_0_10px_rgba(3,233,244,0.4)]">Projects</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 px-5 lg:px-16 w-full relative">
        
        {/* Left: Swiper Project Cards */}
        <div data-aos="fade-right" className="w-full lg:w-[50%] xl:w-[55%] flex flex-col order-2 lg:order-1 items-center lg:items-start relative z-20">
          
          <div className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[550px] xl:max-w-[600px]">
            {/* Project Indicator */}
            <div className="flex items-center justify-between mb-4 px-2">
               <h2 className="text-slate-400 text-[13px] uppercase font-bold tracking-widest bg-[#0f172a] px-4 py-1.5 rounded-full border border-slate-800">
                  Project <span className="text-[#03e9f4]">{(currentProjectIndex + 1).toString().padStart(2, '0')}</span> / {post.length.toString().padStart(2, '0')}
               </h2>
            </div>

            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[Autoplay, Pagination, EffectCards]}
              autoplay={{ delay: 6000, disableOnInteraction: true }}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="${className}" style="background-color: #03e9f4; width: 30px; height: 6px; border-radius: 3px; display: inline-block; margin: 0 4px; transition: 0.3s; opacity: 0.3;"></span>`;
                },
              }}
              onSlideChange={handleSlideChange}
              className="mySwiper w-full h-[650px] md:h-[780px] xl:h-[850px] drop-shadow-2xl"
            >
              {post.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="rounded-3xl bg-[#0B1221] border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden h-full group"
                >
                  {/* Aspect Ratio Image Top */}
                  <div className="relative w-full h-48 md:h-[260px] shrink-0 border-b border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] to-transparent z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Live URL Glass Badge Over Image */}
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md border border-[#03e9f4]/40 text-[#03e9f4] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#03e9f4] hover:text-black transition-all">
                      <TbWorld size={16} /> Live Demo
                    </a>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 md:p-8 flex flex-col flex-1 relative z-20 bg-gradient-to-b from-[#0B1221] to-[#040812] overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: 'thin', scrollbarColor: '#03e9f4 #101726' }}>
                    <h1 className="text-xl md:text-3xl text-white font-black uppercase tracking-wide mb-3">
                      {project.title}
                    </h1>

                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features as Tech Tags */}
                    <div className="mb-6 space-y-3 shrink-0">
                      <div className="flex items-center gap-2 text-[#03e9f4] text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-slate-800 pb-2">
                        <GrTechnology size={14} /> Core Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technology.map((tech, i) => (
                           <span key={i} className="bg-[#121B2B] text-slate-300 text-[10px] md:text-xs px-2 md:px-3 py-1.5 rounded-lg border border-slate-800/80 shadow-sm">
                              {tech}
                           </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 shrink-0 mb-4">
                      <div className="flex items-center gap-2 text-[#03e9f4] text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
                        Features Highlights
                      </div>
                      <ul className="text-slate-300 text-xs md:text-[13px] space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#03e9f4] mt-0.5 text-[10px]">✔</span>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Buttons */}
                    <div className="mt-auto shrink-0 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row gap-3 w-full">
                           {project.githubUrl.map((url, i) => (
                              <a
                                 key={i}
                                 href={url}
                                 target="_blank"
                                 rel="noreferrer"
                                 className="flex items-center justify-center gap-2 flex-1 bg-[#121B30] hover:bg-[#1A2642] border border-slate-700 hover:border-[#03e9f4]/50 text-slate-200 text-xs font-semibold py-3 rounded-xl transition-all shadow-md group/btn"
                              >
                                 <FaGithub className="text-lg group-hover/btn:text-[#03e9f4] transition-colors" /> {i === 0 ? "Frontend Code" : "Backend Code"}
                              </a>
                           ))}
                        </div>
                    </div>
                  </div>


                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right: Lottie animation - Beautiful & Large */}
        <div data-aos="fade-left" className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center order-1 lg:order-2">
          <div className="w-[300px] sm:w-[420px] md:w-[480px] lg:w-[550px] xl:w-[650px] relative pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#03e9f4]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <Lottie animationData={projectAnimation} loop />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProjectCard;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./project.css";

import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import projectAnimation from "../../../assets/lottie-animation/project.json";

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
  const [selectedTechnology, setSelectedTechnology] = useState<number | null>(null);
  const [selectedGithub, setSelectedGithub] = useState<number | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const handleTechnologyClick = (index: number) => {
    setSelectedTechnology(selectedTechnology === index ? null : index);
  };

  const handleGithubClick = (index: number) => {
    setSelectedGithub(selectedGithub === index ? null : index);
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentProjectIndex(swiper.realIndex);
  };

  return (
    <section className="max-w-7xl mx-auto py-10 md:py-20 overflow-hidden">
      {/* Section Title */}
      <h1
        data-aos="fade-down"
        className="text-3xl font-bold text-center text-[#03e9f4] uppercase mb-10"
      >
        Projects
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-5">
        {/* Left: Swiper */}
        <div data-aos="fade-up" className="order-2 md:order-1">
          <h2 className="text-slate-300 mb-3 text-lg uppercase font-semibold">
            Project Number:{" "}
            <span className="text-[#03e9f4]">
              {currentProjectIndex + 1} of {post.length}
            </span>
          </h2>

          <Swiper
            effect={"cards"}
            centeredSlides={true}
            slidesPerView={1}
            grabCursor={true}
            modules={[Autoplay, Pagination, Navigation, EffectCards]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: #03e9f4; width: 14px; height: 14px; margin-top: 10px; border-radius: 50%;"></span>`;
              },
            }}
            onSlideChange={handleSlideChange}
            className="mySwiper"
          >
            {post.map((project, index) => (
              <SwiperSlide
                key={project.id}
                className="project-card p-4 rounded-lg bg-gradient-to-br from-[#05163b] via-[#092152] to-[#010610] border border-[#03e9f4]/30 shadow-[0_0_15px_#03e9f477]"
              >
                <div className="h-48 overflow-hidden rounded-md mb-3">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover rounded-md"
                    alt={project.title}
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl text-gray-200 font-semibold uppercase">
                    {project.title}
                  </h1>

                  <div className="relative flex items-center gap-2">
                    {/* Technology */}
                    <button
                      style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                      className="btn btn-circle btn-sm border border-[#03e9f4] bg-transparent hover:bg-[#34c5cd] hover:text-white text-[#03e9f4]"
                      onClick={() => handleTechnologyClick(index)}
                    >
                      {selectedTechnology === index ? <IoMdClose /> : <GrTechnology />}
                    </button>

                    {selectedTechnology === index && (
                      <div className="absolute bg-slate-900 border border-[#03e9f4]/30 p-4 rounded-md right-24 bottom-0 w-[180px] shadow-lg">
                        <p className="text-gray-300 text-sm">
                          Technologies:
                          {project.technology.map((tech, i) => (
                            <span key={i} className="block text-gray-400">
                              {i + 1}. {tech}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}

                    {/* GitHub */}
                    <button
                      style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                      className="btn btn-circle btn-sm border border-[#03e9f4] bg-transparent hover:bg-[#34c5cd] hover:text-white text-[#03e9f4]"
                      onClick={() => handleGithubClick(index)}
                    >
                      {selectedGithub === index ? <IoMdClose /> : <FaGithub />}
                    </button>

                    {selectedGithub === index && (
                      <ul className="absolute bg-slate-800 border border-[#03e9f4]/30 p-3 rounded-md right-10 top-8 w-[180px] shadow-md space-y-2">
                        {project.githubUrl.map((url, i) => (
                          <li key={i}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-cyan-300 hover:text-cyan-100 flex items-center gap-2 text-sm"
                            >
                              Repo {i + 1} <FaGithub />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Live link */}
                    <a
                      style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                      className="btn btn-circle btn-sm border border-[#03e9f4] bg-transparent hover:bg-[#34c5cd] hover:text-white text-[#03e9f4]"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TbWorld />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right: Lottie animation */}
        <div
          data-aos="fade-down-left"
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="w-[320px] md:w-[420px]">
            <Lottie animationData={projectAnimation} loop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;

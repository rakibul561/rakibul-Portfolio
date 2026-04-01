"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImage from '../../assets/image/HappyDog.gif';

const educationData = [
  {
    institution: "Moulvibazar Polytechnic Institute (Sylhet)",
    degree: "Diploma in Engineering (CSE)",
    year: "2022–2026",
    resultValue: "3.30 (last semester)",
  },
  {
    institution: "Mir KandaPara High School (Mymensingh)",
    degree: "Secondary School Certificate (Science)",
    year: "2021-2022"
  },
];

type EducationCardProps = {
  institution: string;
  degree: string;
  year: string;
  resultValue: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  year,
  resultValue,
}) => (
  <div className="flex items-center p-6 sm:p-8 rounded-xl bg-[#092152]/30 border border-[#0592E0]/30 shadow-lg hover:border-[#03e9f4]/60 hover:bg-[#092152]/50 transition-all duration-300">
    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-[#010610] border border-[#0592E0]/40 text-[#03e9f4]">
      <FaUserGraduate size={28} />
    </div>

    <div className="flex-col flex-1 pl-6 text-center sm:text-left">
      <div className="text-sm font-semibold tracking-wider text-[#03e9f4] mb-1">
        {year}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-1">
        {degree}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base">
        {institution}
      </p>
    </div>
  </div>
);

const Education = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);

  return (
    <div data-aos="zoom-out-down">
      <section
        className="mb-20 mt-20 rounded-2xl text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: `linear-gradient(
          to bottom left,
           #010610,
          #05163b,
          #010610,
          #05163b,
          #010610
        )`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="mb-14 px-8 py-2 border border-[#0592E0]/30 rounded-full bg-[#05163b]/50 shadow-lg shadow-[#0592E0]/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Education<span className="text-[#03e9f4]"></span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="max-w-md w-full flex justify-center py-10">
                <motion.img
                  src={bannerImage.src}
                  alt="Education Banner Image"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                  className="w-56 h-auto drop-shadow-[0_0_15px_rgba(5,146,224,0.4)] object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {educationData.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

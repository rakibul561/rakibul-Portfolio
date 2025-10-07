
"use client"
import Aos from "aos";
import React, { useEffect } from "react";

const educationData = [
  {
    institution: "Moulvibazar Polytechnic Institute (Sylhet) ",
    degree: "Diploma in Engineering",
    department: "CSE",
    year: "2022–2026",
    resultLabel: "Result:",
    resultValue: "3.30 (last semester)",
  },
  {
    institution: "Mir KandaPara High School (Mymensingh) ",
    degree: "SSC",
    department: "Science",
    year: "2021",
    resultLabel: "Result:",
    resultValue: "GPA 4.05",
  },
];

type EducationCardProps = {
  institution: string;
  degree: string;
  department: string;
  year: string;
  resultLabel: string;
  resultValue: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  department,
  year,
  resultLabel,
  resultValue,
}) => (
  <div className="p-8 rounded-xl bg-gray-900 shadow-2xl transition-transform transform hover:scale-[1.02] duration-300">
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
      {institution}
    </h3>
    <div className="space-y-2 text-gray-300 text-sm md:text-base">
      <p>
        <span className="font-semibold text-gray-400">Degree:</span> {degree}
      </p>
      <p>
        <span className="font-semibold text-gray-400">Department:</span>{" "}
        {department}
      </p>
      <p>
        <span className="font-semibold text-gray-400">Year:</span> {year}
      </p>
      <p className="pt-2">
        <span className="font-semibold text-gray-400">{resultLabel} </span>
        <span className="text-lg font-bold text-teal-400">{resultValue}</span>
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
    <div  data-aos="zoom-out-down">
      <h1 className="text-center items-center text-3xl font-bold text-[#0592E0] mt-20"> Education</h1>
      <section
        className="mb-20 mt-20 rounded-2xl text-white py-16 px-4 sm:px-6 lg:px-8"
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
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-[#03e9f4] mb-2">
            MY EDUCATION
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-12 md:mb-20">
            Background<span className="text-[#03e9f4]">.</span>
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

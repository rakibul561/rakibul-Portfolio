"use client";
import "./skills.css";


import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SkillsTabs from "./SkillsTab";

const Skils = () => {
  useEffect(() => {
    Aos.init({
      duration: 500, 
      offset: 200,
    });
  }, []);
  return (
    <section id="skills" className=" mb-20 mx-3">
      <div>
       <h1 className="text-center mt-20 font-bold text-3xl text-[#0592E0]">My Skills</h1>
      </div>
     
      <div data-aos="fade-down"
     data-aos-duration="1000" className="mt-10">
       <SkillsTabs/>
      </div>
    </section>
  );
};

export default Skils;
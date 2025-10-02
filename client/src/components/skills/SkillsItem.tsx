/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import "./item.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./item.css";
interface Skill {
  id: string | number;
  side: string;
  logo: string;
  name: string;
}

interface SkillsItemsProps {
  skills: Skill[];
}

const SkillsItems = ({ skills }: SkillsItemsProps) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5 md:gap-10 ">
      {skills?.map((skill) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          key={skill?.id}
          className="tooltip-container">
          <div className="tooltip">
            <div className="side">
              <div className="about font-Georgian">{skill?.side}</div>
            </div>
          </div>
          <div className="text">
            <div className="icon">
              <div className="layer w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="p-2 md:p-3">
                  <img
                    src={skill?.logo}
                    className="w-full img h-full object-cover rounded-full border-2 border-[#11c6cf]"
                    alt=""
                  />
                </span>
              </div>
              <div className="text font-italic">{skill?.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsItems;
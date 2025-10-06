/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
"use client";
import Lottie from "lottie-react";
import codingAnimatoin from "../../assets/lottie-animation/coading.json";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import helloAnimation from "../../assets/lottie-animation/hello.json";
import "./banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      // offset: 200,
    });
  }, []);

  const handleBlog = () => {
    redirect("/blogs");
  };

  return (
    <header className=" relative  px-5 md:px-0 ">
      <div className="flex flex-col-reverse lg:flex-row h-[900px] pt-10 items-center gap-2 md:gap-10 max-w-7xl mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-white flex-1 space-y-3  md:space-y-5"
        >
          <div className=" font-semibold uppercase flex items-center gap-3">
            <div className="w-16 bg-white rounded-md">
              <Lottie animationData={helloAnimation} />
            </div>
            <h2 className="font-Georgian text-slate-300">There,</h2>
          </div>
          {/* name */}
          <h1 className="text-4xl font-medium font-Georgian">
            I'am <span className="text-[#03e9f4]">Rakibul</span>,
          </h1>
          {/* intro */}
          <h1 className=" text-3xl md:text-5xl font-semibold text-white text-color-change font-Georgian">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Full stack Developer.",
                "MERN stack Developer.",
                "Backend Developer.",
                "Web Designer.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              cursorColor="white"
              typeSpeed={200}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h1>
          {/* description */}
          <h1 className=" text-slate-400 font-normal cursive-font md:w-[90%] font-italic text-[16px]">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                `Hi, I'm Rakibul, a Full Stack Developer skilled in Node.js, Express.js, Mongoose, PostgreSQL, Prisma, Next.js, Redux, and TypeScript. Passionate about crafting efficient and scalable web solutions with clean architecture and seamless user experience. Dedicated to delivering innovation and quality in every project.`,
              ]}
              cursor
              cursorColor="white"
              typeSpeed={10}
              cursorStyle="."
            />
          </h1>
          {/* resume and blog buttons */}
          <div className="py-7 md:py-10 w-full relative">
            <a
              href={
                "https://drive.google.com/drive/u/0/folders/1loJdXiXArrnW0ToUtSh_KaC15yVJm3IN"
              }
              target="_blank"
              download
              className="button absolute px-4 py-2 md:px-6 md:py-3 font-Georgian"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Resume
            </a>
            <button
              onClick={handleBlog}
              className="button2 absolute font-Georgian left-[130px] md:left-[150px] px-4 py-[7px] md:px-6 md:py-[11px] cursor-pointer"
            >
              My Blog
            </button>
          </div>
          <div className="flex items-center gap-2 relative">
            <h3
              style={{ letterSpacing: "3px" }}
              className=" uppercase text-[12px] font-medium text-slate-300  z-10 font-italic"
            >
              Find with me
            </h3>
            <div className="find-border"></div>
          </div>
          {/* social media */}
          <div className="flex items-center text-3xl gap-5">
            <Link href={"https://web.facebook.com/maybe.rakib.507367"}> 
            <FaFacebookF />
            </Link>
            <Link href={"https://www.linkedin.com/in/rakibul-hasan-b94123271/"}> 
               <FaLinkedinIn />
            </Link>
            <Link href={"https://github.com/rakibul561"}> 
            <FaGithub />
            </Link>
         
          </div>
        </div>
        {/* coding animation */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full flex-1"
        >
          <Lottie animationData={codingAnimatoin} loop={true} />
        </div>
      </div>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="container_mouse hidden lg:block"
      >
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
      </ScrollLink>
    </header>
  );
};

export default Banner;

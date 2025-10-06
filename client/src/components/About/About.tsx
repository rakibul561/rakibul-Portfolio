// app/components/HeroSection.tsx
"use client";
import Image from "next/image";
import rakib from "../../assets/image/rakib.png";
import { DialogDemo } from "./AboutModal";

export default function HeroSection() {
  return (
    <div>
          <h1 className="text-center items-center text-3xl font-bold text-[#0592E0] mt-20 mb-20"> About <span className="text-white">Me</span></h1>
      <section
        className="py-10 lg:py-16"
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
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                <div className="relative">
                  <Image
                    className="object-cover rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                    src={rakib}
                    alt="Rakibul - MERN Stack Developer"
                    width={350}
                    height={300}
                  />
                  
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-blue-400 animate-pulse"></div>
                  <div
                    className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-purple-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>

                  {/* Glowing corners */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-50 animate-ping"></div>
                  <div
                    className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-400 rounded-full blur-sm opacity-50 animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
                  Introduction:
                </h1>

                <p className="mt-4 text-white leading-relaxed">
                  Hello, I’m Rakibul, a skilled MERN stack web developer. With a
                  passion for creating seamless digital experiences, I
                  specialize in crafting efficient and user-friendly
                  applications. My expertise spans Node.js, Express.js,
                  Mongoose, PostgreSQL, Prisma, Next.js, Redux, and TypeScript,
                  allowing me to deliver end-to-end solutions. I thrive on
                  challenges, continuously learn, and am committed to turning
                  your ideas into powerful online realities. Let’s collaborate
                  and build something extraordinary.
                </p>

                <div className="mt-8">
                 
                   <DialogDemo/>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

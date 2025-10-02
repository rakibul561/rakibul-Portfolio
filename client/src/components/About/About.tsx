// app/components/HeroSection.tsx
"use client";


import Image from "next/image";
import rakib from '../../assets/image/rakib.png'

export default function HeroSection() {
  

  return (
    <section className="bg-white dark:bg-gray-900">
      


      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      
        
        <div className="flex items-center justify-center  h-96 ">
          <Image
            className="object-cover mt-4 rounded-md lg:max-w-2xl"
            src={rakib}
            alt="glasses photo"
            width={350}
            height={300}
          />
        </div>

          <div className="w-full lg:ml-12 ">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Introduction:
            </h1>

            <p className="py-2">Hello, I'm Rakibul, a skilled MERN stack web developer. With a passion for creating seamless digital experiences, I specialize in crafting efficient and user-friendly applications. My expertise spans MongoDB, Express.js, React, and Node.js, allowing me to deliver end-to-end solutions. I thrive on challenges, continuously learn, and am committed to turning your ideas into powerful online realities. Let's collaborate and build something extraordinary</p>
          </div>

           <div className="mt-8">
            <button>hello</button>
           </div>
           
        </div>

      </div>
    </section>
  );
}

// app/components/HeroSection.tsx
"use client";
import Image from "next/image";
import rakib from '../../assets/image/rakib.png'


export default function HeroSection() {
   


  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
      <div className="container px-6 py-10 mx-auto lg:py-16">
        
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Image Section - Left Side */}
          <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
            {/* Animated Gradient Background Blobs */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-tl from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-2xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Animated Border Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 border-4 border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] h-[340px] border-2 border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-32 right-16 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            
            {/* Image Container with Hover Effect */}
            <div className="relative z-10 group animate-float">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative">
                <Image
                  className="object-cover rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                  src={rakib}
                  alt="Rakibul - MERN Stack Developer"
                  width={350}
                  height={300}
                />
                {/* Decorative Corner Elements with Animation */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-blue-400 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Glowing corners */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-50 animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-400 rounded-full blur-sm opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
                Introduction:
              </h1>
              
              <p className="mt-4 text-white leading-relaxed">
               Hello, I'm Rakibul, a skilled MERN stack web developer. With a passion for creating seamless digital experiences, I specialize in crafting efficient and user-friendly applications. My expertise spans Node.js, Express.js, Mongoose, PostgreSQL, Prisma, Next.js, Redux, and TypeScript., allowing me to deliver end-to-end solutions. I thrive on challenges, continuously learn, and am committed to turning your ideas into powerful online realities. Let's collaborate and build something extraordinary
              </p>
              
              <div className="mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-200">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
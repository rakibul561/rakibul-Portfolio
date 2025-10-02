// pages/index.js
'use client';

import HeroSection from '@/components/About/About';
import Banner from '@/components/Home/Hero';
import Loading from '@/components/Loading/Loading';
import ParticlesBackground from '@/components/ParticlesBackground';
import Skils from '@/components/skills/Skills';
import { useEffect, useState } from 'react';



const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Loading />
    </div>
  );
};


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen">
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <ParticlesBackground />
          <Banner/>
               <HeroSection/>
          <Skils/>
     
    
          
        </>
      )}
    </div>
  );
}

import HeroSection from '@/components/About/About';
import Contact from '@/components/Home/Contact';
import Education from '@/components/Home/Education';
import AllProject from '@/components/Home/ExtraProject';
import Banner from '@/components/Home/Hero';
import ParticlesBackground from '@/components/ParticlesBackground';
import Skils from '@/components/skills/Skills';




export default function Home() {


  
  return (
    <div className="relative min-h-screen">
     
          <ParticlesBackground />
          <Banner/>
          <HeroSection/>
               <Education/>
          <Skils/>
          <AllProject/>
     
          <Contact/>
          
     
    
          
        
    </div>
  );
}
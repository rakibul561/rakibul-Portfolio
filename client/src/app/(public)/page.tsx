
import HeroSection from '@/components/About/About';
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
          <Skils/>
          <AllProject/>
          
     
    
          
        
    </div>
  );
}
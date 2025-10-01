// PublicLayout.tsx

import Footer from "@/components/Footer";
import Navber from "@/components/Navbar/Navbar";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navber/>
      
     
      <main className="min-h-dvh pt-24"> 
            
        
        <div className="max-w-7xl mx-auto px-3">
          {children} 
        </div>
        
      </main>
      
      <Footer/>
    </>
  );
}
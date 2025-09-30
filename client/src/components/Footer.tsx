import React from "react";

const Footer = () => {
  return (
  <footer className="w-full bg-black text-white  p-4">
  <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center h-full">
    <div className="text-center sm:text-left">
      <p className="text-xl ">
        Copyright &copy; {new Date().getFullYear()} - All right reserved by Rakibul Hasan
      </p>
    </div>
  </div>
</footer>
    
  );
};

export default Footer;

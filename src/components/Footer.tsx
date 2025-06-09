
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Suriya Ram S</h2>
            <p className="text-white/70 text-sm mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home" 
              className="flex items-center text-sm hover:text-white/80 mb-2"
              aria-label="Back to top"
            >
              <span className="mr-1">Back to top</span>
              <ArrowUp size={14} />
            </a>
            <p className="text-white/70 text-sm">
              &copy; {year} Suriya Ram S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

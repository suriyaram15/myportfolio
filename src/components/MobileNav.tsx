
import { useEffect, useState } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const MobileNav = () => {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the navbar after a small delay to allow for initial page load
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    const handleScroll = () => {
      // Get all section elements
      const sections = document.querySelectorAll("section[id]");
      
      // Find the section that is currently in view
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id") || "";
        
        // If the section is in the viewport (or slightly above)
        if (sectionTop <= 100) {
          current = sectionId;
        }
      });
      
      // Update active section
      if (current !== "") {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on load
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="flex justify-around items-center h-16">
        <a 
          href="#home" 
          className={`flex flex-col items-center justify-center w-1/4 ${
            activeSection === "home" ? "text-black" : "text-gray-500"
          }`}
        >
          <Home size={20} strokeWidth={activeSection === "home" ? 2.5 : 2} />
          <span className={`text-xs mt-1 ${
            activeSection === "home" ? "font-medium" : ""
          }`}>Home</span>
          {activeSection === "home" && (
            <motion.div 
              className="absolute top-0 h-1 w-1/4 bg-black" 
              layoutId="navIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </a>
        <a 
          href="#about" 
          className={`flex flex-col items-center justify-center w-1/4 ${
            activeSection === "about" ? "text-black" : "text-gray-500"
          }`}
        >
          <User size={20} strokeWidth={activeSection === "about" ? 2.5 : 2} />
          <span className={`text-xs mt-1 ${
            activeSection === "about" ? "font-medium" : ""
          }`}>About</span>
          {activeSection === "about" && (
            <motion.div 
              className="absolute top-0 h-1 w-1/4 bg-black" 
              layoutId="navIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </a>
        <a 
          href="#projects" 
          className={`flex flex-col items-center justify-center w-1/4 ${
            activeSection === "projects" ? "text-black" : "text-gray-500"
          }`}
        >
          <Briefcase size={20} strokeWidth={activeSection === "projects" ? 2.5 : 2} />
          <span className={`text-xs mt-1 ${
            activeSection === "projects" ? "font-medium" : ""
          }`}>Projects</span>
          {activeSection === "projects" && (
            <motion.div 
              className="absolute top-0 h-1 w-1/4 bg-black" 
              layoutId="navIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </a>
        <a 
          href="#contact" 
          className={`flex flex-col items-center justify-center w-1/4 ${
            activeSection === "contact" ? "text-black" : "text-gray-500"
          }`}
        >
          <Mail size={20} strokeWidth={activeSection === "contact" ? 2.5 : 2} />
          <span className={`text-xs mt-1 ${
            activeSection === "contact" ? "font-medium" : ""
          }`}>Contact</span>
          {activeSection === "contact" && (
            <motion.div 
              className="absolute top-0 h-1 w-1/4 bg-black" 
              layoutId="navIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </a>
      </nav>
    </motion.div>
  );
};

export default MobileNav;

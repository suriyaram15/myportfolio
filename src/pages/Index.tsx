
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Publications from '../components/sections/Publications';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import MobileNav from '../components/MobileNav';
import Preloader from '../components/Preloader';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = "Suriya Ram S | Full Stack Developer";
    
    // Set loading to false after preloader finishes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // slightly longer than the preloader time to ensure smooth transition
    
    // ScrollReveal implementation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    }
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      <Preloader />
      <motion.div 
        className="antialiased font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Publications />
        <Contact />
        <Footer />
        <ScrollToTop />
        <MobileNav />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;

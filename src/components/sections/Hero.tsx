
import { ArrowDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-2 h-2 bg-black/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-32 right-20 w-1 h-1 bg-black/20 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-3 h-3 bg-black/5 rounded-full"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-black/15 rounded-full"
          animate={{ 
            y: [0, -18, 0],
            x: [0, -8, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 3D Tech Developer Illustration */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* 3D Developer Avatar - Young developer with glasses and beard */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-black/10 shadow-2xl relative overflow-hidden">
                {/* Main face */}
                <div className="relative w-48 h-48 md:w-60 md:h-60">
                  {/* Head */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gradient-to-b from-orange-100 to-orange-200 rounded-full border-2 border-black/20"></div>
                  
                  {/* Hair */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-36 h-20 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-full border-2 border-black/20"></div>
                  
                  {/* Glasses */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex items-center">
                    <div className="w-8 h-8 bg-white border-2 border-black rounded-full mr-1"></div>
                    <div className="w-2 h-1 bg-black"></div>
                    <div className="w-8 h-8 bg-white border-2 border-black rounded-full ml-1"></div>
                  </div>
                  
                  {/* Eyes behind glasses */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <div className="w-2 h-2 bg-black rounded-full ml-3"></div>
                  </div>
                  
                  {/* Beard */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full border-2 border-black/20"></div>
                  
                  {/* Body/Shirt */}
                  <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-lg border-2 border-black/20"></div>
                  
                  {/* Laptop */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-700 rounded-sm border border-black/30"></div>
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-800 rounded-sm border border-black/30"></div>
                  
                  {/* Code symbols floating around */}
                  <motion.div 
                    className="absolute top-0 right-0 text-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💻
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-0 text-xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  >
                    ⚡
                  </motion.div>
                  <motion.div 
                    className="absolute top-1/3 right-2 text-lg"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    🚀
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Suriya Ram S
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-6 text-black/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Turning ideas into interactive, efficient, and modern web solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1JP0siAemw7iAcfRlqdZXYuie68re7iHj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-black text-white font-medium rounded transition-all overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Resume/CV
                <ExternalLink size={16} />
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute inset-0 flex items-center justify-center gap-2 text-black font-medium opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                View Resume/CV
                <ExternalLink size={16} />
              </motion.span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group px-6 py-3 border-2 border-black font-medium rounded transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-black"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown size={24} />
        </a>
      </motion.div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Hero;


import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-32 left-24 w-7 h-7 border border-black/10 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-60 right-20 w-5 h-5 bg-black/5 rounded-lg"
          animate={{ 
            rotate: [0, -180, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-9 h-9 border-2 border-black/5 rounded-lg"
          animate={{ 
            rotate: [0, 270, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 11, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <h2 className="section-title">Experience</h2>
        </ScrollReveal>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Web Developer Intern</h3>
                  <p className="text-black/70 font-medium">Priga Solutions</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm text-black/70">Sep 2023 – Sep 2024</span>
                </div>
              </div>
              
              <div className="space-y-3 text-black/80">
                <p>
                  Designed and developed user-centric digital interfaces and improved UI/UX using web technologies.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Created responsive user interfaces using modern front-end technologies</li>
                  <li>Collaborated with design and back-end teams to implement new features</li>
                  <li>Optimized applications for maximum speed and scalability</li>
                  <li>Participated in code reviews and provided constructive feedback</li>
                </ul>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-secondary text-xs rounded text-black/80">HTML5</span>
                <span className="px-2 py-1 bg-secondary text-xs rounded text-black/80">CSS3</span>
                <span className="px-2 py-1 bg-secondary text-xs rounded text-black/80">JavaScript</span>
                <span className="px-2 py-1 bg-secondary text-xs rounded text-black/80">React.js</span>
                <span className="px-2 py-1 bg-secondary text-xs rounded text-black/80">Responsive Design</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;

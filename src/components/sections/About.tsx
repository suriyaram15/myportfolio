
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";
import { Code, Database, Globe, Brain, Coffee, GitBranch } from "lucide-react";

const About = () => {
  const skillCategories = [
    { 
      name: "Languages", 
      icon: Code, 
      items: ["Java", "Python", "C", "Golang", "JavaScript"],
      color: "bg-black/5 hover:bg-black/10"
    },
    { 
      name: "Frontend", 
      icon: Globe, 
      items: ["HTML", "CSS", "React.js", "Bootstrap"],
      color: "bg-black/5 hover:bg-black/10"
    },
    { 
      name: "Backend & DB", 
      icon: Database, 
      items: ["Node.js", "MongoDB", "MySQL", "SQL"],
      color: "bg-black/5 hover:bg-black/10"
    },
    { 
      name: "Tools", 
      icon: GitBranch, 
      items: ["VS Code", "JIRA", "GitHub", "Postman"],
      color: "bg-black/5 hover:bg-black/10"
    },
    { 
      name: "Others", 
      icon: Brain, 
      items: ["Firebase", "Flutter", "TensorFlow Lite", "Figma"],
      color: "bg-black/5 hover:bg-black/10"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-16 w-8 h-8 border border-black/5 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-24 w-6 h-6 border border-black/10 rounded-lg"
          animate={{ 
            rotate: [0, -360],
            y: [0, -20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-4 h-4 bg-black/5 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <ScrollReveal>
            <h2 className="section-title">About Me</h2>
          </ScrollReveal>
          
          {/* <ScrollReveal delay={100}>
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 mt-6 lg:mt-0">
              <Coffee className="w-6 h-6 md:w-8 md:h-8" />
              Skills
            </h3>
          </ScrollReveal> */}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <ScrollReveal delay={200}>
            <div>
              <p className="text-lg mb-6">
                I'm a detail-oriented <strong>B.Tech Information Technology</strong> graduate, passionate about creating efficient and beautiful digital solutions.
              </p>
              <p className="text-lg mb-6">
                Proficient in Java, Python, React.js, Node.js, MongoDB, Flutter, and SQL, I bring a comprehensive skill set to full-stack development projects.
              </p>
              <p className="text-lg mb-8">
                With strong knowledge in full-stack development, AI integration, and modern design principles, I aim to build applications that are not just functional but also provide exceptional user experiences.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index} 
                  className={`bg-white p-6 rounded-lg shadow-sm border transition-all duration-300 ${category.color}`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <category.icon className="w-5 h-5 mr-2" />
                    <h4 className="font-semibold">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <motion.span 
                        key={idx} 
                        className="text-xs bg-black/10 px-2 py-1 rounded text-black/80"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;

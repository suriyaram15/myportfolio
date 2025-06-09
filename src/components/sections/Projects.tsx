import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Travel Itinerary Planner",
      description: "An AI-based smart planner that uses collaborative and content filtering with APIs like Google Places and OpenRouter for custom travel itineraries.",
      techStack: ["React.js", "Node.js", "MongoDB", "Python"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://travplan-ai-powered-itinerary-planner.vercel.app/"
    },
    {
      id: 2,
      title: "Plant Disease Identification Mobile App",
      description: "Mobile app using a CNN model to detect plant diseases in real-time from uploaded or captured images.",
      techStack: ["Flutter", "TensorFlow Lite", "Python"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      link: "https://github.com/suriyaram15/cotton-disease-identification-cnn"
    },
    {
      id: 3,
      title: "Online Banking Management System",
      description: "A web-based system to manage user accounts, transfer funds, view statements, and pay bills.",
      techStack: ["MySQL", "Java"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      link: "https://github.com/suriyaram15/online-banking-db"
    },
    {
      id: 4,
      title: "Real-time Weather Forecast Web App",
      description: "A responsive weather web application that provides real-time weather updates using OpenWeatherMap API. Users can search for any city and view temperature, humidity, and weather conditions.",
      techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      image: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://weather-application-livid-iota.vercel.app/"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Custom black-and-white themed portfolio showcasing skills, projects, and publications.",
      techStack: ["React.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-24 left-20 w-10 h-10 border border-black/5 rounded-full"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-80 right-16 w-6 h-6 bg-black/5 rounded-lg"
          animate={{ 
            rotate: [0, 270, 0],
            x: [0, 15, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-60 left-24 w-8 h-8 border-2 border-black/10 rounded-lg"
          animate={{ 
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-4 h-4 bg-black/5 rounded-full"
          animate={{ 
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <motion.div 
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-black/70 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-sm rounded text-black/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-black"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
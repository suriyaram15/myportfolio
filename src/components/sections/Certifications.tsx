
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import { ExternalLink, Award, Database, Palette, Code, Globe, Coffee } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Database Fundamentals: Database Concepts",
      organization: "Infosys Springboard",
      icon: Database,
      link: "https://drive.google.com/file/d/1Pp5rsuuFDNxeVIu8yOo9Co80d8SqhBvF/view?usp=drive_link"
    },
    {
      title: "Google UX Design Professional Certificate",
      organization: "Google",
      icon: Palette,
      link: "https://www.coursera.org/account/accomplishments/specialization/C0UQZR4HJX30"
    },
    {
      title: "PCAP: Programming Essentials in Python",
      organization: "Cisco Networking Academy",
      icon: Code,
      link: "https://drive.google.com/file/d/1Gg1s3RcbShulS0DHjGhjn54C0r7ROVNi/view?usp=drive_link"
    },
    {
      title: "Web Development using JSP & Web Services",
      organization: "Silicon Software Services",
      icon: Globe,
      link: "https://drive.google.com/file/d/1ED6AVxvo3DVbCPmLPfQYGd9FCsz5jyxY/view?usp=drive_link"
    },
    {
      title: "Java Fullstack Course",
      organization: "Wipro TalentNext",
      icon: Coffee,
      link: "https://cert.diceid.com/cid/egdfSES26o"
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-16 right-20 w-12 h-12 border-2 border-black/5 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-60 left-16 w-6 h-6 bg-black/5 rounded-lg"
          animate={{ 
            rotate: [0, -180, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-40 right-32 w-8 h-8 border border-black/10 rounded-lg"
          animate={{ 
            rotate: [0, 180, 360],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <h2 className="section-title flex items-center gap-3">
            <Award className="w-8 h-8" />
            Certifications
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <motion.div 
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col"
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
                <div className="flex items-center justify-center w-16 h-16 bg-black/5 rounded-lg mb-4">
                  <cert.icon className="w-8 h-8 text-black/70" />
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 flex-grow">{cert.title}</h3>
                <p className="text-black/70 mb-4 text-sm">
                  {cert.organization}
                </p>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded transition-all relative overflow-hidden mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Certificate
                    <ExternalLink size={14} />
                  </span>
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

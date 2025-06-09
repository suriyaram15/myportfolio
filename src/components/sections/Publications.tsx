
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";
import { Book, ArrowRight } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "CottonGuard: Revolutionizing Agriculture with Smart Disease Management",
      summary: "This research demonstrates the effectiveness of machine learning models in predicting and managing diseases in cotton plants, potentially saving crops worth millions of dollars.",
      date: "June 2023",
      link: "https://goldncloudpublications.com/index.php/irjaem/article/view/774",
    },
    {
      id: 2,
      title: "AI-Powered Travel Planning: A Machine Learning Approach",
      summary: "This paper explores innovative techniques in leveraging artificial intelligence to create personalized travel itineraries based on user preferences and historical data patterns.",
      date: "November 2023",
      link: "https://irjaeh.com/index.php/journal/article/view/53",
    },
  ];

  return (
    <section id="publications" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-24 w-6 h-6 border border-black/5 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-80 left-20 w-8 h-8 bg-black/5 rounded-lg"
          animate={{ 
            rotate: [0, -270, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-40 right-16 w-5 h-5 border-2 border-black/10 rounded-lg"
          animate={{ 
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <h2 className="section-title">Publications</h2>
        </ScrollReveal>
        
        <div className="mt-12 grid gap-8 max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <ScrollReveal key={publication.id} delay={index * 200}>
              <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all card-hover">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary p-3 hidden sm:flex">
                    <Book size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                    <p className="text-sm text-black/60 mb-3">Published: {publication.date}</p>
                    <p className="text-black/80 mb-4">{publication.summary}</p>
                    <a 
                      href={publication.link} 
                      className="inline-flex items-center text-sm font-medium hover:underline"
                    >
                      Read more <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

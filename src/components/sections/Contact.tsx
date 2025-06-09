import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import { Phone, Mail, MapPin, Github, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: Phone,
      title: "Phone",
      value: "+91 9486784602",
      link: "tel:+919486784602",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      value: "thesuriyaram@gmail.com",
      link: "mailto:thesuriyaram@gmail.com",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      value: "Sivakasi, Tamil Nadu",
      link: "https://maps.google.com/?q=Sivakasi,Tamil+Nadu",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: Github,
      title: "GitHub",
      link: "https://github.com/suriyaram15",
    },
    {
      id: 2,
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/suriya-ram-150402-s/",
    },
    {
      id: 3,
      icon: Globe,
      title: "Portfolio",
      link: "#",
    },
  ];

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e4396a9d-8b3b-4102-b3a2-63c9fa5408d2",
          subject: formData.subject || "New Contact Form Message",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="section-title">Contact</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-black/80 mb-8">
                Feel free to contact me for work opportunities or just to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.link}
                    className="flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="rounded-full bg-white p-3 mr-4 shadow-sm group-hover:bg-black group-hover:text-white transition-colors"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <item.icon size={20} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-black/60">{item.title}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Find me on</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.id}
                      href={social.link}
                      className="rounded-full bg-white p-3 shadow-sm hover:bg-black hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <motion.div
                  custom={0}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
                    required
                  />
                </motion.div>
                <motion.div
                  custom={1}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
                    required
                  />
                </motion.div>
                <motion.div
                  custom={2}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-black/70 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
                  />
                </motion.div>
                <motion.div
                  custom={3}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white font-medium rounded transition-all"
                  custom={4}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Doha, Qatar",
      color: "purple",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+974 33846736",
      href: "tel:+97433846736",
      color: "orange",
    },
    {
      icon: Mail,
      label: "Email",
      value: "mozanfu@gmail.com",
      href: "mailto:mozanfu@gmail.com",
      color: "purple",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/mozanfu-art",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mozan-ahmed-13047a327/",
      color: "hover:text-orange-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: item.color === "purple"
                      ? "0 0 30px rgba(168, 85, 247, 0.4)"
                      : "0 0 30px rgba(251, 146, 60, 0.4)",
                  }}
                  className={`bg-gradient-to-br ${
                    item.color === "purple"
                      ? "from-purple-800/30 to-purple-900/20"
                      : "from-orange-800/30 to-orange-900/20"
                  } border ${
                    item.color === "purple" ? "border-purple-400/50" : "border-orange-400/50"
                  } rounded-lg p-6 text-center hover:border-opacity-100 transition-all duration-300`}
                >
                  <motion.div
                    className={`inline-block ${
                      item.color === "purple" ? "bg-purple-500/30" : "bg-orange-500/30"
                    } border ${
                      item.color === "purple" ? "border-purple-300/70" : "border-orange-300/70"
                    } rounded-full p-3 mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon
                      className={`h-6 w-6 ${
                        item.color === "purple" ? "text-purple-300" : "text-orange-300"
                      }`}
                    />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-6 justify-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-2 text-gray-300 ${link.color} transition-colors`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-purple-800/30 to-orange-800/30 border border-gray-600 group-hover:border-purple-400/70 rounded-full p-4 transition-all duration-300"
                      whileHover={{ 
                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                      }}
                    >
                      <link.icon className="h-6 w-6" />
                    </motion.div>
                    <span className="text-sm">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
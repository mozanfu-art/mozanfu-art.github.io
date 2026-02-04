import { motion } from "motion/react";
import { ExternalLink, Github, Smartphone, Globe, Cloud } from "lucide-react";
import { Button } from "./ui/button.js"; // Adjusted the import path to the correct relative path
import { Badge } from "./ui/badge.js"; // Adjusted the import path to the correct relative path

export function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built a responsive personal portfolio website showcasing IT projects and cloud solutions using modern React and Tailwind CSS.",
      type: "Web Application",
      icon: Globe,
      tags: ["React", "Tailwind", "GitHub"],
      liveUrl: "https://mozanfu-art.github.io",
      githubUrl: "https://github.com/mozanfu-art/Portfolio",
      gradient: "from-purple-500/30 to-purple-800/30",
      border: "border-purple-400/50",
      shadow: "hover:shadow-purple-400/50",
    },
    {
      title: "Hotels Portal IT Graduation Project",
      description: "Created a cross-platform hotel portal for IT graduation project, implementing UI and business logic with Firebase backend integration.",
      type: "Mobile Application",
      icon: Smartphone,
      tags: ["Dart", "Python", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/mozanfu-art/Hotels_Portal_IT_GRADUATION_PROJECT",
      gradient: "from-orange-500/30 to-orange-800/30",
      border: "border-orange-400/50",
      shadow: "hover:shadow-orange-400/50",
    },
    {
      title: "Global Hotels Booking Project",
      description: "Developed a comprehensive hotel booking system integrating user management, room availability, and booking workflows with database backend.",
      type: "Web Application",
      icon: Globe,
      tags: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/mozanfu-art/Global_Hotels_Booking_Project",
      gradient: "from-purple-500/30 to-purple-800/30",
      border: "border-purple-400/50",
      shadow: "hover:shadow-purple-400/50",
    },
    {
      title: "Hotels Booking Multimedia Project",
      description: "Built an enhanced hotel booking website with multimedia elements including videos, animations, and interactive features to improve user experience.",
      type: "Web Application",
      icon: Globe,
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/mozanfu-art/Hotels-Booking-MultimediaProject",
      gradient: "from-orange-500/30 to-orange-800/30",
      border: "border-orange-400/50",
      shadow: "hover:shadow-orange-400/50",
    },
    {
      title: "Time Tracker Project",
      description: "Designed a time tracking mobile app to monitor tasks and productivity with database integration for data persistence and analytics.",
      type: "Mobile Application",
      icon: Smartphone,
      tags: ["Dart", "Flutter"],
      liveUrl: "#",
      githubUrl: "https://github.com/mozanfu-art/Time_Tracker_Project",
      gradient: "from-purple-500/30 to-purple-800/30",
      border: "border-purple-400/50",
      shadow: "hover:shadow-purple-400/50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-orange-900/20 to-black relative overflow-hidden">
      {/* Animated particles */}
      <motion.div
        className="absolute top-10 left-20 w-2 h-2 bg-purple-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-40 w-3 h-3 bg-orange-400 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-300 to-purple-300 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            A collection of web applications, mobile apps, and cloud computing solutions showcasing my technical expertise
          </p>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                className={`group relative bg-gradient-to-br ${project.gradient} border ${project.border} rounded-lg p-6 hover:border-opacity-100 transition-all duration-300 ${project.shadow} hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="bg-black/50 border border-gray-600 rounded-lg p-3"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon className="h-6 w-6 text-purple-300" />
                  </motion.div>
                  
                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-300 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-300 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-purple-200 mb-3">{project.type}</p>
                
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-black/50 border-gray-600 text-gray-200 text-xs hover:bg-black/70 hover:border-gray-400 transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="bg-gradient-to-r from-purple-500/30 to-orange-500/30 border-purple-300/70 hover:border-purple-300 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/mozanfu-art" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View More on GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
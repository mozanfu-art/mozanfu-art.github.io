import { motion } from "motion/react";
import { ExternalLink, Github, Smartphone, Globe, Cloud } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Project Title 1",
      description: "A comprehensive web application showcasing modern development practices with React and cloud integration.",
      type: "Web Application",
      icon: Globe,
      tags: ["React", "Node.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500/30 to-purple-800/30",
      border: "border-purple-400/50",
      shadow: "hover:shadow-purple-400/50",
    },
    {
      title: "Project Title 2",
      description: "Mobile application built with Flutter for cross-platform deployment on iOS and Android.",
      type: "Mobile App",
      icon: Smartphone,
      tags: ["Flutter", "Dart", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-500/30 to-orange-800/30",
      border: "border-orange-400/50",
      shadow: "hover:shadow-orange-400/50",
    },
    {
      title: "Project Title 3",
      description: "Cloud computing solution leveraging Azure services for scalable enterprise applications.",
      type: "Cloud Solution",
      icon: Cloud,
      tags: ["Azure", "Python", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500/30 to-purple-800/30",
      border: "border-purple-400/50",
      shadow: "hover:shadow-purple-400/50",
    },
    {
      title: "Project Title 4",
      description: "Full-stack e-commerce platform with payment integration and inventory management.",
      type: "Web Application",
      icon: Globe,
      tags: ["JavaScript", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-500/30 to-orange-800/30",
      border: "border-orange-400/50",
      shadow: "hover:shadow-orange-400/50",
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
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
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
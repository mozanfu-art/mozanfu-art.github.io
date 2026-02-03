import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Cloud & Development Tools",
      skills: ["AWS", "Microsoft Azure", "Firebase", "Git", "GitHub", "Visual Studio", "Android Studio"],
      color: "purple",
    },
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "Dart", "PHP", "HTML/CSS", "SQL", "NoSQL"],
      color: "orange",
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Flutter", "React", "Node.js", "Express"],
      color: "purple",
    },
    {
      category: "Business & Productivity",
      skills: ["Microsoft 365", "Google Workspace", "SAP S/4 HANA", "E-Commerce Systems"],
      color: "orange",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Attention to Detail",
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background accents */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-300 to-purple-300 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: category.color === "purple" 
                    ? "0 0 40px rgba(168, 85, 247, 0.3)"
                    : "0 0 40px rgba(251, 146, 60, 0.3)",
                }}
                className="bg-gradient-to-br from-purple-800/20 to-orange-800/20 border border-gray-700 hover:border-gray-500 rounded-lg p-6 transition-all duration-300"
              >
                <motion.h3 
                  className="text-xl font-semibold text-white mb-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.category}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge
                        variant="outline"
                        className={`${
                          category.color === "purple"
                            ? "bg-purple-500/30 border-purple-300/70 hover:bg-purple-500/50 text-purple-100 hover:shadow-lg hover:shadow-purple-500/50"
                            : "bg-orange-500/30 border-orange-300/70 hover:bg-orange-500/50 text-orange-100 hover:shadow-lg hover:shadow-orange-500/50"
                        } transition-all duration-300`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-white">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 0 20px rgba(192, 132, 252, 0.5)",
                  }}
                >
                  <Badge
                    variant="outline"
                    className="bg-gradient-to-r from-purple-500/30 to-orange-500/30 border-purple-300/70 text-gray-100 px-4 py-2 text-sm hover:shadow-lg transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
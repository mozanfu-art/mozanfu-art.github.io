import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Freelance – Private Tutor",
      period: "2021 – 2025",
      type: "Professional Experience",
      icon: Briefcase,
      points: [
        "Delivered IT, Mathematics, and English lessons to 20+ students, in virtual and in-person settings", 
        "Provided individualized academic and technical support, emphasizing problem solving and digital literacy",
        "Designed structured learning materials, strengthening documentation and reporting skills",
      ],
    },
    {
      title: "Entrepreneur – Home-Based",
      period: "2020 – 2021",
      type: "Professional Experience",
      icon: Briefcase,
      points: [
        "Founded and managed a small enterprise, overseeing workflow coordination, and customer relations",
        "Applied project management skills to handle orders, scheduling, and resource allocation",
        "Processed 50+ customer orders per month ensuring timely delivery and service quality",
      ],
    },
  ];

  const courses = [
    "Microsoft Azure Fundamentals AZ-900 Exam Prep Specialization – Microsoft | Coursera (2026 – In Progress)",
    "Cloud Computing Specialization – University of Illinois Urbana-Champaign | Coursera (2026 – In Progress)",
    "Flutter & Dart: Developing iOS, Android, and Mobile Applications – IBM | Coursera (2025)",
    "Technical Support Fundamentals – Google | Coursera (2025)",
    "Software Engineering – IBM | Coursera (2025)",
    "Getting Started with Cisco Packet Tracer – Networking Academy | Cisco (2024)",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-orange-900/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience & Education
          </motion.h2>
          
          {/* Education */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 40px rgba(251, 146, 60, 0.4)",
              }}
              className="bg-gradient-to-br from-orange-800/30 to-purple-800/30 border border-orange-400/50 rounded-lg p-8 relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative flex items-start gap-4">
                <motion.div 
                  className="bg-orange-500/30 border border-orange-300/70 rounded-full p-3"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="h-6 w-6 text-orange-300" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Bachelor of Science (Hons) in Information Technology
                  </h3>
                  <p className="text-orange-200 mb-2">The Future University, Sudan</p>
                  <p className="text-gray-300 mb-4">2020 – 2025</p>
                  <motion.div 
                    className="inline-block bg-orange-500/40 border border-orange-300/70 rounded-full px-4 py-1 text-orange-100 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    First Class • CGPA: 3.56
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Professional Experience */}
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
                }}
                className="bg-gradient-to-br from-purple-800/30 to-orange-800/30 border border-purple-400/50 rounded-lg p-8 hover:border-purple-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className="bg-purple-500/30 border border-purple-300/70 rounded-full p-3"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <exp.icon className="h-6 w-6 text-purple-300" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-purple-200">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 ml-16">
                  {exp.points.map((point, idx) => (
                    <motion.li 
                      key={idx} 
                      className="text-gray-200 flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <span className="text-purple-300 mt-1.5">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Courses & Certifications */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Certifications & Professional Development
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(192, 132, 252, 0.5)",
                  }}
                  className="bg-gradient-to-br from-purple-800/20 to-orange-800/20 border border-gray-700 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-300"
                >
                  <p className="text-gray-200 text-sm">{course}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
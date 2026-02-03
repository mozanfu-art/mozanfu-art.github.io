import { motion } from "motion/react";
import { Code2, Cloud, Database, Network } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Full-stack development with modern frameworks and languages",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "AWS & Azure cloud solutions and architecture",
    },
    {
      icon: Database,
      title: "Database Systems",
      description: "SQL & NoSQL database design and optimization",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Network design and Cisco certified skills",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-200 text-lg mb-12 text-center leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am an Information Technology valedictorian with a First-Class degree and a strong foundation in IT systems, IT support, and enterprise solutions. Familiar with cloud computing and networking, and actively developing expertise in AWS and Microsoft Azure. Eager to apply technical knowledge and problem-solving skills in innovative IT projects while advancing as a cloud and enterprise solutions professional.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
                }}
                className="group relative bg-gradient-to-br from-purple-800/30 to-orange-800/30 border border-purple-400/50 rounded-lg p-6 hover:border-purple-300 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/20 group-hover:to-orange-500/20 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="h-10 w-10 text-purple-300 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";

export function AdditionalInformation() {
  return (
    <section id="additional-info" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent">
            ADDITIONAL INFORMATION
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-white/5 to-white/5 p-8 shadow-xl shadow-purple-500/10">
              <h3 className="text-xl font-semibold text-white mb-4">Extracurricular Activities</h3>
              <ul className="space-y-3 text-gray-300 text-sm leading-7">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <span>Volunteering at Alsilat Altayba Charity Organization for Women in AD Damer</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <span>03/2026 - Present</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-white/5 to-white/5 p-8 shadow-xl shadow-orange-500/10">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <ul className="space-y-3 text-gray-300 text-sm leading-7">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <span>Arabic: Native</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <span>English: Professional Proficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

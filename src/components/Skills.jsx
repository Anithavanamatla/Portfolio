import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";
import { fadeUp, scaleIn } from "../animation";
import { FiCode } from "react-icons/fi";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <FiCode className="text-indigo-600 text-xl" />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {category.skills.map((skill, sIndex) => (
                  <li
                    key={sIndex}
                    className="px-3 py-1 bg-indigo-50 dark:bg-gray-700 rounded-md text-sm shadow-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

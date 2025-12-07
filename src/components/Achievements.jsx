import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../data/achievements";
import { fadeUp, scaleIn } from "../animation";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Extra-Curricular Activities
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg h-48 w-full object-cover"
                />
              )}

              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-sm text-indigo-600 font-medium">{item.year}</p>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

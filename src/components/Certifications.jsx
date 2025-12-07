import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../data/certifications";
import { fadeUp, scaleIn } from "../animation";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl border border-gray-300 dark:border-gray-700 cursor-pointer transition"
              onClick={() => window.open(cert.img, "_blank")}
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="rounded-lg w-full object-cover h-56"
              />
              <h3 className="text-lg font-semibold mt-4 text-center">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

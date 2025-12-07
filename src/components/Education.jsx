import React from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animation";

// Import your images (you will upload these)
import interImage from "../assets/education/inter-986.jpg";
import schoolAward from "../assets/education/school-award.jpg";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-12">

          {/* ---------------- BTECH ---------------- */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600">
              B.Tech – Computer Science Engineering
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT)
            </p>
            <p className="text-sm mt-1 text-gray-500">CGPA: <b>9.06</b></p>
          </motion.div>


          {/* ---------------- INTERMEDIATE ---------------- */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600">
              Intermediate – MPC
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              SPM Kalasala
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Score: <b>986 / 1000</b>
            </p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Achievement</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Secured <b>College Topper</b> position for academics.
            </p>

        
          </motion.div>


          {/* ---------------- SSC ---------------- */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-indigo-600">
              SSC – SVPM Kairali EM School
            </h3>
            <p className="text-sm mt-1 text-gray-500">
              GPA: <b>9.9</b>
            </p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Achievement</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Awarded <b>Best Performer of the School</b>.
            </p>

          
          </motion.div>

        </div>
      </div>
    </section>
  );
}

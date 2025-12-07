import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { fadeUp, scaleIn } from "../animation";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 backdrop-blur-xl hover:scale-[1.02] transition duration-300"
            >
              {/* Image */}
              <div className="w-full h-44 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-700 dark:text-white rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="text-indigo-600 dark:text-indigo-400 text-2xl hover:scale-125 transition"
    >
      <FiGithub />
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="text-green-600 text-2xl hover:scale-125 transition"
    >
      <FiExternalLink />
    </a>
  )}
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

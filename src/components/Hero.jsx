import React from 'react'
import { motion } from 'framer-motion'
import { PROFILE } from '../data/profile'
import { fadeLeft, scaleIn } from '../animation'
import bg from '../assets/bg.jpg' // put your chosen background here
import anitha from '../assets/anitha.jpg' // your profile photo

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* overlay to dim background for readability */}
      <div className="w-full min-h-screen bg-black/30 dark:bg-black/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center p-8">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Hi, I’m <span className="text-indigo-300">{PROFILE.name}</span>
            </h1>
            <p className="mt-3 text-lg text-gray-100">{PROFILE.title}</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:scale-[1.02] transition">
                View Projects
              </a>

              {/* Make sure you placed resume at public/resume.pdf */}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border border-white text-white rounded-md hover:bg-white/10 transition">
                View Resume
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-200 space-y-2">
              <div>📧 <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
              <div>📞 {PROFILE.phone}</div>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" whileInView="show" className="flex justify-center">
            <div className="photo-frame p-1 rounded-full shadow-xl">
              <div className="w-56 h-56 rounded-full overflow-hidden bg-gray-100">
                <img src={anitha} alt="Anitha" className="object-cover w-full h-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

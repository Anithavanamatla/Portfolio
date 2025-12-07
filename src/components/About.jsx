import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../animation'

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto glass rounded-2xl p-6">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-4 text-gray-700 dark:text-gray-300"
        >
          Hello everyone,
          My name is <strong>Anitha Vanamatla</strong>. The name <em>Anitha</em> means
          <strong> graceful</strong> and <strong>full of joy</strong>, and my parents gave me this
          name hoping I would always spread positivity. I truly try to live by that meaning
          in my day-to-day life.

          <br /><br />
          I am currently in my <strong>final year of B.Tech CSE</strong>. I completed my
          intermediate from <strong>Padmavathi College</strong> and schooling from
          <strong> Kairali School</strong>. Throughout my journey, I stayed disciplined, polite,
          and maintained good communication and collaboration with peers.

          <br /><br />
          One of my biggest strengths is that I <strong>never give up</strong>. I work hard
          until I reach my goals. I am also a <strong>quick learner</strong> who enjoys learning
          new concepts.

          <br /><br />
          Earlier, I had <strong>stage fear</strong>, especially in my first year. I was nervous
          during communication labs and avoided speaking. But by participating in mock sessions
          and speech activities, I gained confidence and improved my public speaking skills.

          <br /><br />
          I am naturally an <strong>extrovert</strong>, which helps me communicate easily. But it also
          taught me when to balance my openness depending on the situation.

          <br /><br />
          I have worked on multiple <strong>projects</strong>, each helping me improve in self-learning,
          time management, and teamwork. These projects strengthened my practical understanding.

          <br /><br />
          Apart from academics, I have been active in <strong>extracurricular activities</strong>.
          I was an <strong>NSS volunteer for 3 years</strong>, gaining experience in event
          coordination. I participated in the <strong>Vijayawada Marathon</strong> and helped with event
          management.

          <br /><br />
          I served as a <strong>Student Council Member</strong> and hosted various college events.
          I also worked as the <strong>Treasurer of the Rotaract Club</strong>, where I learned how
          to manage finances and understand the value of responsibility.

          <br /><br />
          In my free time, I enjoy reading and watching <strong>mythology</strong>, especially the
          Mahabharata, which gives me peace and perspective.

          <br /><br />
          Coming to my family background, my father is a farmer, and my mother is a homemaker.
          I have two siblings—one in intermediate and the other pursuing B.Tech. My parents’
          sacrifices motivate me to succeed.

          <br /><br />
          My short-term goal is to join a good organization where I can gain real-time experience
          and apply my skills.

          <br /><br />
          My long-term goal is to become a responsible and independent software developer who
          can take care of my family and make my parents proud.
        </motion.p>

      </div>
    </section>
  )
}

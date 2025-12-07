import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Certifications from "./components/Certifications"
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <Nav />
      <main className="pt-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education/>
        <Achievements/>
        <Certifications/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

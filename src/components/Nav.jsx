import React, { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header className="fixed w-full z-40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
            AV
          </div>
          <div className="font-semibold">Anitha</div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#education" className="hover:text-indigo-600">Education</a></li>
          <li><a href="#certifications" className="hover:text-indigo-600">Certifications</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">

          {/* LinkedIn Icon Only */}
          <a
            href="https://www.linkedin.com/in/anitha-vanamatla-866865287/"
            target="_blank"
            className="p-2 rounded-full bg-[#E6E6FA] hover:bg-purple-300 transition"
          >
            <FiLinkedin size={20} />
          </a>

          {/* GitHub Icon Only */}
          <a
            href="https://github.com/Anithavanamatla"
            target="_blank"
            className="p-2 rounded-full bg-[#E6E6FA] hover:bg-purple-300 transition"
          >
            <FiGithub size={20} />
          </a>

          {/* Resume Download */}
          <a
            href="/assets/anitha.pdf"
            download
            className="text-white bg-indigo-600 px-3 py-1 rounded-md shadow hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

      </nav>
    </header>
  );
}

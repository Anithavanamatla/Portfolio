import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto">Made with ❤️ by Anitha • {new Date().getFullYear()}</div>
    </footer>
  )
}

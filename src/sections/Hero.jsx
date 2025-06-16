"use client"

import { useState, useEffect } from "react"
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { user } from "../config/user.js"
import { scrollToSection } from "../utils/scrollToSection.js"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = user.tagline

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-max text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">{user.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">{user.title}</h2>

          <div className="h-8 mb-8">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href={user.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
          <button onClick={() => scrollToSection("projects")} className="btn-secondary">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={user.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${user.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"
import Skills from "./sections/Skills.jsx"
import Projects from "./sections/Projects.jsx"
import Featured from "./sections/Featured.jsx"
import Timeline from "./sections/Timeline.jsx"
import Contact from "./sections/Contact.jsx"
import { useThemeMode } from "./utils/useThemeMode.js"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const { theme, toggleTheme } = useThemeMode()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "timeline", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
      <div className="bg-white dark:bg-gray-900">
        <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Featured />
          <Timeline />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App

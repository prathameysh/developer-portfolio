"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import ProjectCard from "../components/ProjectCard.jsx"
import { user } from "../config/user.js"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const allTechs = Array.from(new Set(user.projects.flatMap((project) => project.tech)))

  const regularProjects = user.projects.filter((project) => !project.featured)
  const filteredProjects =
    filter === "All" ? regularProjects : regularProjects.filter((project) => project.tech.includes(filter))

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              filter === "All"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <Filter className="h-4 w-4" />
            All
          </button>
          {allTechs.slice(0, 6).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === tech
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Github, ExternalLink, Star } from "lucide-react"
import { user } from "../config/user.js"

export default function Featured() {
  const featuredProject = user.projects.find((project) => project.featured)

  if (!featuredProject) return null

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <h2 className="section-title mb-0">Featured Project</h2>
            <Star className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My most comprehensive project showcasing full-stack development skills
          </p>
        </div>

        <div className="card max-w-4xl mx-auto overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={featuredProject.image || "/assets/placeholder-project.jpg"}
                alt={featuredProject.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">FEATURED</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{featuredProject.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{featuredProject.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Built with:</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

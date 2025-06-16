import { Github, ExternalLink } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <div className="card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={project.image || "/assets/placeholder-project.jpg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary text-center flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

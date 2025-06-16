import { user } from "../config/user.js"

const techIcons = {
  "C++": "⚡",
  Java: "☕",
  JavaScript: "🟨",
  Python: "🐍",
  React: "⚛️",
  "Node.js": "🟢",
  MongoDB: "🍃",
  MySQL: "🐬",
  Git: "📚",
  AWS: "☁️",
  Docker: "🐳",
  TypeScript: "🔷",
}

export default function About() {
  const allTechs = [
    ...user.skills.languages,
    ...user.skills.frontend,
    ...user.skills.backend,
    ...user.skills.tools.slice(0, 4),
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-blue-600 dark:border-blue-400"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{user.bio}</p>

            <div className="card">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Fun Fact</h3>
                <p className="text-gray-700 dark:text-gray-300">{user.funFact}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies I Work With</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {allTechs.map((tech) => (
                  <div
                    key={tech}
                    className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-2xl mb-2">{techIcons[tech] || "💻"}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 text-center">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

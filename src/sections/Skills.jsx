import { Code, Palette, Server, Wrench } from "lucide-react"
import { user } from "../config/user.js"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: user.skills.languages,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Frontend Development",
    icon: Palette,
    skills: user.skills.frontend,
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: user.skills.backend,
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: user.skills.tools,
    color: "text-orange-600 dark:text-orange-400",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's my technical toolkit that I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="flex items-center gap-3 text-xl font-semibold mb-4">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span className="text-gray-900 dark:text-white">{category.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {user.skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { GraduationCap, Award, Briefcase } from "lucide-react"

const typeIcons = {
  education: GraduationCap,
  certification: Award,
  experience: Briefcase,
}

const typeColors = {
  education: "text-blue-600 dark:text-blue-400",
  certification: "text-green-600 dark:text-green-400",
  experience: "text-purple-600 dark:text-purple-400",
}

export default function TimelineItem({ item, index }) {
  const Icon = typeIcons[item.type]
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>

      <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
        <div className="card hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon className={`h-5 w-5 mt-1 ${typeColors[item.type]}`} />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{item.organization}</p>
              </div>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                {item.period}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

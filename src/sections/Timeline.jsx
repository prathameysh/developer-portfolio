import TimelineItem from "../components/TimelineItem.jsx"
import { user } from "../config/user.js"

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Journey</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Education, certifications, and experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {user.timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

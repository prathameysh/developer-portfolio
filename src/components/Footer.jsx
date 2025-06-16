import { Heart, Github, Linkedin, Mail, Code } from "lucide-react"
import { user } from "../config/user.js"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white section-padding">
      <div className="container-max">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={user.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code className="h-6 w-6" />
            </a>
            <a href={`mailto:${user.email}`} className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {user.name}. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

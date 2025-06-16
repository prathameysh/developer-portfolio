"use client"

import { Home, ArrowLeft } from "lucide-react"
import { scrollToSection } from "../utils/scrollToSection.js"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollToSection("home")} className="btn-primary flex items-center gap-2">
            <Home className="h-4 w-4" />
            Go Home
          </button>
          <button onClick={() => window.history.back()} className="btn-secondary flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  )
}

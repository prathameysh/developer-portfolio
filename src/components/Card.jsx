export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = "" }) {
  return <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>
}

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-light p-6 ${hover ? 'transition-shadow hover:shadow-lg' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

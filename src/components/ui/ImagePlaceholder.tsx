interface ImagePlaceholderProps {
  label: string
  aspectRatio?: string
  className?: string
}

export default function ImagePlaceholder({
  label,
  aspectRatio = 'aspect-video',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-light rounded-lg ${aspectRatio} ${className}`}
    >
      <span className="text-gray-medium text-sm text-center px-4">{label}</span>
    </div>
  )
}

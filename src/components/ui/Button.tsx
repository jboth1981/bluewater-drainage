import { type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps & {
  href: string
  children: React.ReactNode
  className?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-orange text-white hover:bg-orange/90 focus-visible:ring-orange',
  secondary:
    'bg-blue-primary text-white hover:bg-blue-primary/90 focus-visible:ring-blue-primary',
  outline:
    'border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white focus-visible:ring-blue-primary',
  ghost:
    'text-blue-primary hover:bg-blue-primary/10 focus-visible:ring-blue-primary',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if ('href' in props && props.href !== undefined) {
    const { href, children, ...rest } = props
    // External links
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return <button className={classes} {...props} />
}

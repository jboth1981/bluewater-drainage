import { NavLink } from 'react-router'
import { navLinks } from './Header'
import { siteConfig } from '../../data/siteConfig'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-light">
          <span className="text-lg font-bold text-blue-primary uppercase">Menu</span>
          <button
            type="button"
            className="rounded-md p-2 text-gray-dark hover:bg-gray-light"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-blue-primary bg-blue-primary/5'
                    : 'text-gray-dark hover:text-blue-primary hover:bg-blue-primary/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-light space-y-3">
          <a
            href={siteConfig.phoneHref}
            className="block text-center text-sm font-semibold text-gray-dark"
          >
            {siteConfig.phone}
          </a>
          <p className="text-center text-xs text-gray-medium">
            {siteConfig.email}
          </p>
        </div>
      </div>
    </div>
  )
}

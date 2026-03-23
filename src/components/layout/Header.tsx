import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import { siteConfig } from '../../data/siteConfig'
import MobileNav from './MobileNav'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/why-drainage', label: 'Why Drainage' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export { navLinks }

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold tracking-tight text-blue-primary uppercase">
                Bluewater
              </span>
              <span className="text-xs font-medium tracking-widest text-gray-medium uppercase">
                Farm Drainage
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
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

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                className="text-sm font-semibold text-gray-dark hover:text-blue-primary transition-colors"
              >
                {siteConfig.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange/90"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-dark hover:bg-gray-light"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-light safe-area-pb">
        <div className="grid grid-cols-2 divide-x divide-gray-light">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-blue-primary"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Call Us
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-orange"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  )
}

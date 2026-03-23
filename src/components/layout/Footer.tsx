import { Link } from 'react-router'
import { siteConfig } from '../../data/siteConfig'
import { navLinks } from './Header'

export default function Footer() {
  return (
    <footer className="bg-blue-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight uppercase">
                Bluewater
              </span>
              <br />
              <span className="text-xs font-medium tracking-widest uppercase text-white/70">
                Farm Drainage
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70">{siteConfig.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.address.city}, {siteConfig.address.province}
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Service Area
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {siteConfig.serviceArea.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.certifications.map((cert) => (
              <span
                key={cert}
                className="text-xs text-white/50 border border-white/20 px-3 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

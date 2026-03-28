import { Link } from 'react-router'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SEOHead from '../components/seo/SEOHead'
import StructuredData from '../components/seo/StructuredData'
import { siteConfig } from '../data/siteConfig'
import { services } from '../data/services'

const base = import.meta.env.BASE_URL

export default function Home() {
  return (
    <>
      <SEOHead
        title="Tile Drainage Services in Ontario"
        description="Bluewater Farm Drainage provides professional tile drainage, erosion control, and agricultural drainage services across Grey Bruce, Simcoe, Wellington, Huron, and Perth Counties in Ontario."
      />
      <StructuredData />

      {/* Drainage tile banner */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '80px', display: 'block' }}
        >
          <defs>
            {/* Corrugated drainage tile pattern — alternating ribs */}
            <pattern id="tileRibs" x="0" y="0" width="16" height="90" patternUnits="userSpaceOnUse">
              {/* Deep groove */}
              <rect x="0" y="0" width="6" height="90" fill="#1a1a1a" />
              {/* Raised rib with highlight */}
              <rect x="6" y="0" width="10" height="90" fill="#2d2d2d" />
              {/* Subtle shine on rib edge */}
              <rect x="6" y="0" width="2" height="90" fill="#3a3a3a" />
              {/* Perforations — small holes in the grooves */}
              <circle cx="3" cy="30" r="1.2" fill="#111" />
              <circle cx="3" cy="60" r="1.2" fill="#111" />
            </pattern>
            {/* Curved clip for the swooping bottom edge */}
            <clipPath id="swoopClip">
              <path d="M0,0 L1440,0 L1440,55 Q720,100 0,55 Z" />
            </clipPath>
          </defs>
          {/* Black tile background with ribs, clipped to swoop shape */}
          <g clipPath="url(#swoopClip)">
            <rect width="1440" height="90" fill="url(#tileRibs)" />
            {/* Subtle top highlight like light catching the pipe */}
            <rect width="1440" height="2" fill="#444" opacity="0.4" />
            {/* Subtle bottom shadow for depth */}
            <line x1="0" y1="54" x2="1440" y2="54" stroke="#000" strokeWidth="1.5" opacity="0.5" />
          </g>
        </svg>
        {/* Banner text overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '15px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          textShadow: '0 1px 3px rgba(0,0,0,0.8)',
          letterSpacing: '0.5px',
        }}>
          Hello from Byron! Bluewater Drainage site updates coming soon.
        </div>
      </div>

      {/* Hero with video background */}
      <section className="relative bg-blue-primary text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`${base}images/hero-poster.webp`}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${base}images/hero-video.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-primary/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight uppercase md:text-7xl">
              Bluewater
              <span className="block text-orange">Farm Drainage</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl">
              {siteConfig.tagline}. Professional tile drainage and land improvement
              services across Ontario's best farmland.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Request a Free Quote
              </Button>
              <Button href={siteConfig.phoneHref} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-primary">
                Call {siteConfig.phone}
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">{siteConfig.seasonalMessage}</p>
          </div>
        </div>
      </section>

      {/* Problem / Value */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-primary md:text-4xl">
                Are you losing yield to wet fields?
              </h2>
              <p className="mt-6 text-lg text-gray-dark leading-relaxed">
                Excess water costs Ontario farmers thousands of dollars per acre in lost
                yield every year. Tile drainage is the most proven investment in
                agricultural productivity — with typical ROI within 3–5 years and
                benefits lasting decades.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Increase crop yields by 10–30%',
                  'Access fields earlier in spring',
                  'Reduce soil compaction and erosion',
                  'Improve land value long-term',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/why-drainage" variant="secondary">
                  Learn How Drainage Pays for Itself
                </Button>
              </div>
            </div>
            <img
              src={`${base}images/byron-plow.webp`}
              alt="Byron Bothwell with the Bluewater Farm Drainage tile plow and family"
              className="rounded-lg object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="From GPS survey and design through installation and finish work — we handle every step of your drainage project."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.id} to={`/services#${service.id}`}>
                <Card hover className="h-full">
                  <h3 className="text-lg font-bold text-blue-primary">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-medium">{service.shortDescription}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-orange">
                    Learn more &rarr;
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-white border-y border-gray-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '6', label: 'Counties Served' },
              { stat: 'LICO', label: 'Certified Member' },
              { stat: '100%', label: 'GPS-Guided Installation' },
              { stat: 'Certified', label: 'Erosion Control' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-extrabold text-blue-primary">{item.stat}</div>
                <div className="mt-1 text-sm text-gray-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Placeholder — testimonials will be added once Byron collects them from clients."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <p className="text-gray-medium italic">
                  "Testimonial placeholder — real client quotes will go here."
                </p>
                <div className="mt-4 text-sm font-semibold text-gray-dark">
                  — Client Name, {siteConfig.serviceArea[i - 1]}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Service Area" centered={false} />
              <p className="text-gray-dark mb-6">
                We proudly serve farmers and landowners across southwestern and central Ontario.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.serviceArea.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-gray-dark"
                  >
                    <div className="h-2 w-2 rounded-full bg-orange" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <ImagePlaceholder label="Map of Ontario showing service area counties" aspectRatio="aspect-square" />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-blue-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Improve Your Land?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get a free, no-obligation quote for your drainage project. We'll survey
            your land and design a system that maximizes your return.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">
              Request a Free Quote
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-primary">
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

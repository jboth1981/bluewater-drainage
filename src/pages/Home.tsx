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

      {/* 3D Drainage tile pipe divider — realistic side profile with water pouring out */}
      <div style={{ position: 'relative', background: 'transparent', lineHeight: 0, overflow: 'visible' }}>
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: '120px', display: 'block', overflow: 'visible' }}
        >
          <defs>
            {/* 3D cylindrical body gradient — realistic light hitting from above */}
            <linearGradient id="pipeBody3d" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#555" />
              <stop offset="8%" stopColor="#484848" />
              <stop offset="20%" stopColor="#383838" />
              <stop offset="40%" stopColor="#252525" />
              <stop offset="60%" stopColor="#1a1a1a" />
              <stop offset="80%" stopColor="#111" />
              <stop offset="95%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            {/* Glossy highlight strip along the top */}
            <linearGradient id="topGloss" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0.08" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            {/* Corrugated rib pattern — repeating grooves and ridges */}
            <pattern id="ribPattern" x="0" y="0" width="18" height="120" patternUnits="userSpaceOnUse">
              {/* Deep groove */}
              <rect x="0" y="0" width="7" height="120" fill="rgba(0,0,0,0.25)" />
              {/* Rib left edge highlight */}
              <rect x="7" y="0" width="2" height="120" fill="rgba(255,255,255,0.07)" />
              {/* Rib body */}
              <rect x="9" y="0" width="6" height="120" fill="rgba(0,0,0,0.05)" />
              {/* Rib right edge shadow */}
              <rect x="15" y="0" width="3" height="120" fill="rgba(0,0,0,0.12)" />
            </pattern>
            {/* Pipe opening — concentric ring gradient */}
            <radialGradient id="pipeHole" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="40%" stopColor="#0a0a0a" />
              <stop offset="70%" stopColor="#181818" />
              <stop offset="85%" stopColor="#252525" />
              <stop offset="100%" stopColor="#333" />
            </radialGradient>
            {/* Water body gradient */}
            <linearGradient id="waterBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
            </linearGradient>
            {/* Water shine */}
            <linearGradient id="waterShine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            {/* Drop shadow */}
            <filter id="shadow3d" x="-2%" y="-5%" width="104%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
            </filter>
            {/* Soft blur for water mist */}
            <filter id="waterMist">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {/* === PIPE BODY === */}
          <g filter="url(#shadow3d)">
            {/* Main pipe cylinder — extends past left edge, ends at right with opening */}
            <rect x="-20" y="30" width="1340" height="100" rx="50" ry="50" fill="url(#pipeBody3d)" />

            {/* Corrugated rib overlay */}
            <rect x="-20" y="30" width="1340" height="100" rx="50" ry="50" fill="url(#ribPattern)" />

            {/* Top glossy highlight — catches the light */}
            <ellipse cx="660" cy="42" rx="650" ry="12" fill="url(#topGloss)" />

            {/* Subtle bottom reflection */}
            <ellipse cx="660" cy="118" rx="600" ry="6" fill="rgba(255,255,255,0.03)" />
          </g>

          {/* === PIPE OPENING (right end) === */}
          <g>
            {/* Outer pipe wall ring */}
            <ellipse cx="1320" cy="80" rx="52" ry="52" fill="#222" />
            {/* Corrugated outer ring detail */}
            <ellipse cx="1320" cy="80" rx="50" ry="50" fill="#2a2a2a" stroke="#1a1a1a" strokeWidth="3" />
            {/* Inner wall thickness ring */}
            <ellipse cx="1320" cy="80" rx="44" ry="44" fill="#1e1e1e" />
            {/* Dark hollow interior */}
            <ellipse cx="1320" cy="80" rx="38" ry="38" fill="url(#pipeHole)" />
            {/* Concentric corrugation rings inside */}
            <ellipse cx="1320" cy="80" rx="34" ry="34" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
            <ellipse cx="1320" cy="80" rx="28" ry="28" fill="none" stroke="#151515" strokeWidth="1" />
            <ellipse cx="1320" cy="80" rx="22" ry="22" fill="none" stroke="#121212" strokeWidth="0.8" />
            {/* Light catching the top lip of the opening */}
            <path d="M1272,58 Q1320,48 1368,58" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            {/* Shadow on bottom lip */}
            <path d="M1278,104 Q1320,114 1362,104" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          </g>

          {/* === WATER POURING OUT === */}
          <g>
            {/* Water inside the pipe opening — pooled at bottom */}
            <ellipse cx="1320" cy="92" rx="30" ry="12" fill="#2563eb" opacity="0.5" />
            <ellipse cx="1320" cy="90" rx="25" ry="8" fill="#3b82f6" opacity="0.4" />

            {/* Main water stream — pours out and falls down with gravity */}
            <path
              d="M1305,98 Q1310,105 1312,120 Q1314,145 1310,170 Q1308,185 1305,200"
              fill="none" stroke="#2563eb" strokeWidth="12" strokeLinecap="round" opacity="0.7"
            />
            <path
              d="M1320,100 Q1325,115 1325,135 Q1324,160 1320,185 L1318,200"
              fill="none" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" opacity="0.6"
            />
            <path
              d="M1335,96 Q1338,108 1338,125 Q1336,150 1332,175 L1330,200"
              fill="none" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" opacity="0.5"
            />

            {/* Water shine/reflection on streams */}
            <path
              d="M1315,105 Q1318,120 1318,140 Q1316,160 1314,180"
              fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round"
            />
            <path
              d="M1326,108 Q1328,125 1327,145"
              fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"
            />

            {/* Splashing droplets falling */}
            <circle cx="1300" cy="175" r="3" fill="#60a5fa" opacity="0.5" />
            <circle cx="1340" cy="180" r="2.5" fill="#3b82f6" opacity="0.4" />
            <circle cx="1295" cy="190" r="2" fill="#93c5fd" opacity="0.4" />
            <circle cx="1345" cy="195" r="2" fill="#60a5fa" opacity="0.3" />
            <circle cx="1310" cy="192" r="1.5" fill="#93c5fd" opacity="0.3" />

            {/* Misty spray near the opening */}
            <ellipse cx="1320" cy="110" rx="20" ry="8" fill="#93c5fd" opacity="0.1" filter="url(#waterMist)" />
          </g>
        </svg>
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

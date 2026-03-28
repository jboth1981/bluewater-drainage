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

      {/* Black corrugated tile banner — full width */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          background: '#1a1a1a',
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 6px, rgba(60,60,60,0.4) 6px, rgba(60,60,60,0.4) 8px, rgba(40,40,40,0.2) 8px, rgba(40,40,40,0.2) 16px)',
          color: 'white',
          textAlign: 'center',
          padding: '14px 12px',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          letterSpacing: '0.5px',
          textShadow: '0 1px 3px rgba(0,0,0,0.8)',
          borderBottom: '2px solid #111',
          borderTop: '1px solid #333',
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

      {/* How It Works — Steps to Better Drainage */}
      <section className="py-20 bg-blue-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Your Path to Better Yields
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              From first call to finished field — here's how we help you unlock your land's full potential.
            </p>
            <div className="mt-4 h-1 w-16 bg-orange rounded mx-auto" />
          </div>

          <div className="grid gap-0 md:grid-cols-4 relative">
            {/* Connecting line between steps (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-white/20 z-0" />

            {[
              {
                step: '1',
                title: 'Contact Us',
                description: 'Reach out for a free, no-obligation conversation about your land and goals.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                ),
                hasLink: true,
              },
              {
                step: '2',
                title: 'Farm Assessment',
                description: 'We visit your property to evaluate soil conditions, topography, and problem areas — including a precision GPS survey of your fields.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
              },
              {
                step: '3',
                title: 'Quote & Plan',
                description: 'You receive a detailed quote and GPS-guided drainage design tailored to your farm\'s specific needs.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                step: '4',
                title: 'Installation',
                description: 'Our experienced crew installs your tile drainage system with GPS-guided precision.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center px-3 py-4">
                {/* Step circle with icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange text-white shadow-lg mb-4">
                  {item.icon}
                </div>
                {/* Step number */}
                <span className="text-xs font-bold text-orange uppercase tracking-wider mb-1">Step {item.step}</span>
                {/* Title */}
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                {/* Contact link on step 1 */}
                {item.hasLink && (
                  <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-orange/80 transition-colors">
                    Get in touch
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                )}
              </div>
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

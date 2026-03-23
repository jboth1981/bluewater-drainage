import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SEOHead from '../components/seo/SEOHead'
import StructuredData from '../components/seo/StructuredData'
import { useScrollToAnchor } from '../hooks/useScrollToAnchor'
import { services } from '../data/services'

const base = import.meta.env.BASE_URL

export default function Services() {
  useScrollToAnchor()

  return (
    <>
      <SEOHead
        title="Services"
        description="Tile drainage installation, GPS survey & design, erosion control, land clearing, tile repair, and finish discing services across Ontario's Grey Bruce, Simcoe, Wellington, Huron, and Perth Counties."
      />
      <StructuredData
        type="Service"
        additionalData={{
          serviceType: 'Agricultural Drainage Services',
          provider: { '@type': 'LocalBusiness', name: 'Bluewater Farm Drainage' },
        }}
      />

      {/* Page Header */}
      <section className="bg-blue-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            Our <span className="text-orange">Services</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete drainage solutions from survey to finish — everything your land needs
            to perform at its best.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-light/30'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <SectionHeading title={service.title} centered={false} />
                <p className="text-lg text-gray-dark leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-dark">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact">Get a Free Quote</Button>
                </div>
              </div>
              {service.image ? (
                <img
                  src={`${base}${service.image}`}
                  alt={`${service.title} — Bluewater Farm Drainage`}
                  className="rounded-lg object-cover aspect-video w-full"
                />
              ) : (
                <ImagePlaceholder label={`${service.title} — project photo`} />
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-blue-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Not Sure What You Need?</h2>
          <p className="mt-4 text-white/80">
            Contact us for a free consultation. We'll survey your land and recommend
            the right solution for your situation.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Request a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

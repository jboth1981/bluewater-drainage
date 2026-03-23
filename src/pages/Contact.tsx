import ContactForm from '../components/ui/ContactForm'
import SectionHeading from '../components/ui/SectionHeading'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SEOHead from '../components/seo/SEOHead'
import StructuredData from '../components/seo/StructuredData'
import { siteConfig } from '../data/siteConfig'

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact & Request a Quote"
        description="Request a free tile drainage quote from Bluewater Farm Drainage. Serving Grey Bruce, Simcoe, Wellington, Huron, and Perth Counties in Ontario."
      />
      <StructuredData />

      {/* Page Header */}
      <section className="bg-blue-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            Get a <span className="text-orange">Free Quote</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Tell us about your project and we'll get back to you with a no-obligation
            quote. Most quotes are returned within 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeading title="Request a Quote" centered={false} />
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div>
                <h3 className="text-lg font-bold text-blue-primary mb-4">
                  Prefer to Call?
                </h3>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-2xl font-bold text-blue-primary hover:text-orange transition-colors"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block text-gray-dark hover:text-blue-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg font-bold text-blue-primary mb-4">
                  Location
                </h3>
                <p className="text-gray-dark">
                  {siteConfig.address.city}, {siteConfig.address.province}
                </p>
                <p className="text-sm text-gray-medium mt-1">
                  Serving all of {siteConfig.serviceArea.join(', ')}
                </p>
              </div>

              {/* Seasonal Note */}
              <div className="rounded-lg bg-orange/10 border border-orange/20 p-4">
                <h3 className="text-sm font-bold text-orange uppercase tracking-wider">
                  Seasonal Availability
                </h3>
                <p className="mt-2 text-sm text-gray-dark">
                  {siteConfig.seasonalMessage}. Drainage season typically runs spring
                  through fall, weather dependent. Contact us early to secure your spot
                  in the schedule.
                </p>
              </div>

              {/* Service Area Map */}
              <div>
                <h3 className="text-lg font-bold text-blue-primary mb-4">
                  Service Area
                </h3>
                <ImagePlaceholder label="Map showing service area" aspectRatio="aspect-square" />
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {siteConfig.serviceArea.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm text-gray-dark">
                      <div className="h-2 w-2 rounded-full bg-orange" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

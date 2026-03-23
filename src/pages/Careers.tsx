import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import SEOHead from '../components/seo/SEOHead'
import StructuredData from '../components/seo/StructuredData'
import { siteConfig } from '../data/siteConfig'

export default function Careers() {
  return (
    <>
      <SEOHead
        title="Careers"
        description="Join the Bluewater Farm Drainage team. We're looking for skilled operators and labourers who want to build a career in agricultural drainage across Ontario."
      />
      <StructuredData />

      {/* Page Header */}
      <section className="bg-blue-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            <span className="text-orange">Careers</span> at Bluewater
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Work outdoors, operate heavy equipment, and make a real difference for
            Ontario farmers.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Work at Bluewater"
            subtitle="We're a growing team that values hard work, skill, and doing things right."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                title: 'Hands-On Work',
                description: 'Operate GPS-guided tile plows, excavators, and surveying equipment. Every day is different and every project has real, visible results.',
              },
              {
                title: 'Growing Business',
                description: "Bluewater is expanding our team and service area. Join early and grow with us — there's room for advancement as we take on more projects.",
              },
              {
                title: 'Competitive Pay',
                description: 'We pay fairly for skilled work. Seasonal position with potential for year-round employment as the business grows.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-bold text-blue-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-medium">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Current Openings"
            subtitle="Positions available for the upcoming season."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: 'Equipment Operator',
                type: 'Seasonal — Spring through Fall',
                description:
                  "Experienced heavy equipment operator for tile plow, excavator, and bulldozer operation. Must be comfortable with GPS technology and working in agricultural settings. Valid driver's licence required.",
                requirements: [
                  'Experience operating heavy equipment',
                  'Comfortable with GPS guidance systems',
                  "Valid driver's licence (DZ an asset)",
                  'Ability to work long hours during peak season',
                  'Reliable and safety-conscious',
                ],
              },
              {
                title: 'General Labourer',
                type: 'Seasonal — Spring through Fall',
                description:
                  "Hands-on role supporting drainage installation projects. Duties include pipe handling, grade checking, site preparation, and general project support. No experience required — we'll train the right person.",
                requirements: [
                  'Physically fit and able to work outdoors',
                  'Willingness to learn',
                  'Reliable transportation to job sites',
                  'Positive attitude and strong work ethic',
                  "Valid driver's licence an asset",
                ],
              },
            ].map((job) => (
              <Card key={job.title}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-primary">{job.title}</h3>
                    <p className="text-sm text-orange font-medium">{job.type}</p>
                  </div>
                </div>
                <p className="text-gray-dark">{job.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-dark mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-gray-medium">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-blue-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Interested in Joining the Team?</h2>
          <p className="mt-4 text-white/80">
            Send us an email with a bit about yourself and your experience. We'd love to hear from you.
          </p>
          <div className="mt-8">
            <Button href={`mailto:${siteConfig.email}?subject=Career%20Inquiry%20-%20Bluewater%20Farm%20Drainage`} size="lg">
              Email Us to Apply
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Or call us at{' '}
            <a href={siteConfig.phoneHref} className="underline hover:text-white">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SEOHead from '../components/seo/SEOHead'
import StructuredData from '../components/seo/StructuredData'

export default function WhyDrainage() {
  return (
    <>
      <SEOHead
        title="Why Tile Drainage"
        description="Learn how tile drainage improves crop yields, field accessibility, and land value for Ontario farmers. Calculate your ROI and understand the benefits of proper field drainage."
      />
      <StructuredData />

      {/* Page Header */}
      <section className="bg-blue-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            Why <span className="text-orange">Tile Drainage</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            The most proven investment in agricultural productivity. Here's how
            it works and why it pays for itself.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Benefits of Tile Drainage"
            subtitle="Properly drained fields consistently outperform undrained fields — often by a significant margin."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Higher Crop Yields',
                description:
                  'Tile-drained fields typically produce 10–30% higher yields than undrained fields. Excess water is removed from the root zone, allowing crops to establish stronger root systems and access more nutrients.',
              },
              {
                title: 'Earlier Spring Access',
                description:
                  'Drained fields dry out faster in spring, giving you earlier planting windows. Getting seed in the ground on time is one of the biggest factors in maximizing yield potential.',
              },
              {
                title: 'Reduced Soil Compaction',
                description:
                  'Working wet soil causes compaction that restricts root growth for years. Tile drainage keeps fields at proper moisture levels so equipment can work without damaging soil structure.',
              },
              {
                title: 'Better Nutrient Management',
                description:
                  'Well-drained soils allow better fertilizer placement and reduce nutrient loss from surface runoff. Your inputs stay where crops can use them.',
              },
              {
                title: 'Increased Land Value',
                description:
                  'Properly drained farmland is worth significantly more than undrained land. Tile drainage is a capital improvement that pays dividends every season and increases resale value.',
              },
              {
                title: 'Erosion Prevention',
                description:
                  'By moving water below the surface, tile drainage reduces surface runoff and the erosion that comes with it. Keeps your topsoil in your field where it belongs.',
              },
            ].map((benefit) => (
              <Card key={benefit.title}>
                <h3 className="text-lg font-bold text-blue-primary">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-medium leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Tile Drainage Works"
            subtitle="A proven system used across Ontario and worldwide for over a century."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Survey & Design',
                  description:
                    'We use RTK GPS to map your field elevations with centimetre accuracy. This data drives the drainage design — determining tile spacing, depth, and outlet locations for optimal water removal.',
                },
                {
                  step: '2',
                  title: 'Installation',
                  description:
                    'Our GPS-guided tile plow installs perforated plastic drainage pipe at precise depths and grades. The pipe is placed in trenches 2.5–4 feet deep, typically at 30–50 foot spacing depending on soil type.',
                },
                {
                  step: '3',
                  title: 'Water Collection',
                  description:
                    'Excess water in the soil percolates through the perforations in the tile pipe. Gravity carries it along the pipe at a designed grade toward the outlet.',
                },
                {
                  step: '4',
                  title: 'Outlet & Drainage',
                  description:
                    'Water exits through an outlet into a municipal drain, ditch, or waterway. Your field stays at optimal moisture for crop growth, not too wet and not too dry.',
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-primary">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-medium">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <ImagePlaceholder label="Diagram showing how tile drainage works underground" aspectRatio="aspect-square" />
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Numbers: How Drainage Pays for Itself"
            subtitle="A simplified example showing how tile drainage delivers strong ROI for Ontario farmers."
          />
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="divide-y divide-gray-light">
                {[
                  { label: 'Cost of tile drainage installation', value: '~$800–$1,200/acre', note: 'Varies with spacing, soil, and terrain' },
                  { label: 'Average yield improvement', value: '10–30%', note: 'Depending on crop and soil conditions' },
                  { label: 'Additional revenue per acre (corn example)', value: '~$100–$300/year', note: 'Based on $5.50/bu corn, 180 bu/acre base yield' },
                  { label: 'Payback period', value: '3–5 years', note: 'With yields improved, fields are more profitable every year after' },
                  { label: 'System lifespan', value: '50+ years', note: 'Modern plastic tile lasts generations when properly installed' },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-2">
                    <div>
                      <div className="font-medium text-gray-dark">{row.label}</div>
                      <div className="text-xs text-gray-medium">{row.note}</div>
                    </div>
                    <div className="text-lg font-bold text-blue-primary whitespace-nowrap">{row.value}</div>
                  </div>
                ))}
              </div>
            </Card>
            <p className="mt-6 text-sm text-gray-medium text-center">
              These are general estimates based on typical Ontario conditions. Actual
              results vary by soil type, crop, drainage design, and other factors. Contact
              us for a site-specific assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Learn More"
            subtitle="External resources for understanding tile drainage in Ontario."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                title: 'OMAFRA Drainage Guide',
                description: 'Ontario Ministry of Agriculture guide to agricultural drainage.',
              },
              {
                title: 'Land Improvement Contractors of Ontario',
                description: 'LICO — the industry association for drainage contractors in Ontario.',
              },
              {
                title: 'Drainage Act (Ontario)',
                description: 'Provincial legislation governing agricultural drainage rights and processes.',
              },
            ].map((resource) => (
              <Card key={resource.title} hover>
                <h3 className="font-bold text-blue-primary">{resource.title}</h3>
                <p className="mt-2 text-sm text-gray-medium">{resource.description}</p>
                <span className="mt-3 inline-block text-sm text-orange font-semibold">
                  Link coming soon &rarr;
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Ready to Invest in Your Land?</h2>
          <p className="mt-4 text-white/80">
            Let us assess your fields and design a drainage plan that maximizes your return.
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

import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SEOHead from '../components/seo/SEOHead'
import StructuredData from '../components/seo/StructuredData'

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Bluewater Farm Drainage — a family-run tile drainage business serving Ontario farmers with professional, GPS-guided drainage solutions."
      />
      <StructuredData />

      {/* Page Header */}
      <section className="bg-blue-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            About <span className="text-orange">Bluewater</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Family roots in the land. Professional results in the field.
          </p>
        </div>
      </section>

      {/* Byron's Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Story" centered={false} />
              <div className="prose prose-lg text-gray-dark space-y-4">
                <p>
                  <strong>Placeholder — Byron's story will go here.</strong> This section
                  will cover Byron Bothwell's background, how he got into tile drainage,
                  and the family connection to farming and the land.
                </p>
                <p>
                  The Bothwell family has deep roots in Ontario agriculture. George
                  Bothwell originally obtained accreditation and acquired the tile plow
                  that started it all. Today, Bluewater Farm Drainage continues that
                  tradition with modern GPS technology and a commitment to doing the job
                  right.
                </p>
                <p>
                  Based out of the Owen Sound area, we serve farmers across Grey Bruce,
                  Simcoe, Wellington, Huron, and Perth Counties — helping them protect
                  their most valuable asset and improve their bottom line.
                </p>
              </div>
            </div>
            <ImagePlaceholder label="Photo of Byron / the Bluewater team" aspectRatio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-gray-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Equipment"
            subtitle="Professional-grade equipment for precise, efficient drainage installation."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Tile plow in action', desc: 'GPS-guided tile plow for precise installation at grade' },
              { label: 'Excavator on site', desc: 'Heavy excavation for ditches, outlets, and land clearing' },
              { label: 'GPS survey equipment', desc: 'RTK GPS technology for centimetre-accurate surveying' },
            ].map((item) => (
              <div key={item.label}>
                <ImagePlaceholder label={item.label} />
                <p className="mt-3 text-sm text-gray-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Work"
            subtitle="Cost-effective, efficient design that yields the best results."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Cost-Effective',
                description: 'We design systems that maximize drainage performance while keeping your investment reasonable.',
              },
              {
                title: 'Efficient',
                description: 'Modern equipment and GPS technology mean faster installation with less disruption to your operation.',
              },
              {
                title: 'Results-Driven',
                description: 'Every project is designed for measurable improvement — better yields, better field access, better land value.',
              },
              {
                title: 'Family Values',
                description: 'We treat every farm like our own. Honest communication, fair pricing, and work we stand behind.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-primary/10">
                  <div className="h-6 w-6 rounded bg-orange" />
                </div>
                <h3 className="text-lg font-bold text-blue-primary">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Want to Work With Us?</h2>
          <p className="mt-4 text-white/80">
            Get in touch for a free quote on your next drainage project.
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

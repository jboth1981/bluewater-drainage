import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SEOHead from '../components/seo/SEOHead'
import StructuredData from '../components/seo/StructuredData'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'

export default function Projects() {
  return (
    <>
      <SEOHead
        title="Projects & Gallery"
        description="See our completed tile drainage, erosion control, and land improvement projects across Grey Bruce, Simcoe, Wellington, Huron, and Perth Counties in Ontario."
      />
      <StructuredData />

      {/* Page Header */}
      <section className="bg-blue-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            Our <span className="text-orange">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Real work, real results. Browse our completed projects and see the
            difference professional drainage makes.
          </p>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Before & After"
            subtitle="Placeholder — before and after photos will be added as Byron provides project imagery."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="grid grid-cols-2 gap-2">
                  <ImagePlaceholder label="Before" aspectRatio="aspect-[4/3]" />
                  <ImagePlaceholder label="After" aspectRatio="aspect-[4/3]" />
                </div>
                <p className="mt-2 text-sm text-gray-medium text-center">
                  Project {i} — before/after placeholder
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-20 bg-gray-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="A sample of our work across the region."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <ImagePlaceholder label={`${project.title} photo`} aspectRatio="aspect-video" className="mb-4" />
                <h3 className="text-lg font-bold text-blue-primary">{project.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-blue-primary/10 px-3 py-1 text-xs font-medium text-blue-primary">
                    {project.county}
                  </span>
                  <span className="inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">
                    {project.workType}
                  </span>
                  <span className="inline-block rounded-full bg-gray-light px-3 py-1 text-xs font-medium text-gray-dark">
                    {project.acreage}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-medium">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Placeholder — real testimonials will be added once collected from Byron's clients."
          />
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <Card key={i}>
                <p className="text-gray-medium italic leading-relaxed">
                  "Testimonial placeholder — a real client quote about their experience
                  working with Bluewater Farm Drainage will go here."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-light" />
                  <div>
                    <div className="text-sm font-semibold text-gray-dark">Client Name</div>
                    <div className="text-xs text-gray-medium">{siteConfig.serviceArea[i - 1]}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Your Project Could Be Next</h2>
          <p className="mt-4 text-white/80">
            Get a free quote and see what professional drainage can do for your land.
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

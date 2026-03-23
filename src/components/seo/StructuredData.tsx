import { siteConfig } from '../../data/siteConfig'

interface StructuredDataProps {
  type?: 'LocalBusiness' | 'Service'
  additionalData?: Record<string, unknown>
}

export default function StructuredData({ type = 'LocalBusiness', additionalData }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: siteConfig.businessName,
    description: `Professional tile drainage, erosion control, and agricultural drainage services in ${siteConfig.serviceArea.join(', ')}, Ontario.`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceArea.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    ...additionalData,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
    />
  )
}

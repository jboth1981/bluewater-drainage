interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
}

export default function SEOHead({ title, description, canonical }: SEOHeadProps) {
  const fullTitle = `${title} | Bluewater Farm Drainage`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <link rel="canonical" href={canonical} />}
    </>
  )
}

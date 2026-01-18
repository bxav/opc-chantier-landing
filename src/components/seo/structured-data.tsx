export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OptiChantier",
    url: "https://www.optichantier.com",
    logo: "https://www.optichantier.com/icon.svg",
    description:
      "OptiChantier est une application iOS de gestion de chantier pour les professionnels du BTP.",
    foundingDate: "2024",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@optichantier.com",
      availableLanguage: ["French"],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OptiChantier",
    operatingSystem: "iOS",
    applicationCategory: "BusinessApplication",
    description:
      "Application iOS de pilotage de chantier pour les professionnels du BTP. Notes vocales, photos annotees, comptes-rendus IA et mode hors ligne.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/ComingSoon",
    },
    featureList: [
      "Enregistrement audio des reunions",
      "Transcription automatique par IA",
      "Photos annotees",
      "Assistant IA integre",
      "Mode hors ligne",
      "Gestion multi-projets",
    ],
    screenshot: "https://www.optichantier.com/opengraph-image",
    softwareVersion: "1.0",
    author: {
      "@type": "Organization",
      name: "OptiChantier",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  url: string
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  url,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: datePublished,
    url: url,
    author: {
      "@type": "Organization",
      name: "OptiChantier",
      url: "https://www.optichantier.com",
    },
    publisher: {
      "@type": "Organization",
      name: "OptiChantier",
      logo: {
        "@type": "ImageObject",
        url: "https://www.optichantier.com/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BrickNote",
    url: "https://www.bricknote.ai",
    logo: "https://www.bricknote.ai/icon.svg",
    description:
      "BrickNote est une application iOS de gestion de chantier pour les professionnels du BTP.",
    foundingDate: "2024",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@bricknote.ai",
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
    name: "BrickNote",
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
    screenshot: "https://www.bricknote.ai/opengraph-image",
    softwareVersion: "1.0",
    author: {
      "@type": "Organization",
      name: "BrickNote",
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

interface WebApplicationSchemaProps {
  name: string
  description: string
  url: string
  category?: string
}

export function WebApplicationSchema({
  name,
  description,
  url,
  category = "Utility",
}: WebApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: name,
    description: description,
    url: url,
    applicationCategory: category,
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    provider: {
      "@type": "Organization",
      name: "BrickNote",
      url: "https://www.bricknote.ai",
    },
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
      name: "BrickNote",
      url: "https://www.bricknote.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "BrickNote",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bricknote.ai/icon.svg",
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

import { Metadata } from "next"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { ArticleList } from "@/components/blog"

export const metadata: Metadata = {
  title: "Ressources - OptiChantier",
  description: "Guides, conseils et actualites pour optimiser la gestion de vos chantiers. Articles pratiques pour les professionnels du BTP.",
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <div className="grain-overlay" />
      <Navbar />

      <Breadcrumb items={[{ label: "Ressources" }]} />

      <PageHeader
        title="Ressources"
        subtitle="Guides pratiques, conseils d'experts et actualites du secteur pour optimiser la gestion de vos chantiers."
        badge="Blog"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleList />
        </div>
      </section>

      <Footer />
    </main>
  )
}

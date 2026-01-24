import { Metadata } from "next"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { BreadcrumbSchema } from "@/components/seo"

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site BrickNote. Informations sur l'editeur, l'hebergeur et les droits de propriete intellectuelle.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.bricknote.ai" },
          { name: "Mentions legales", url: "https://www.bricknote.ai/mentions-legales" },
        ]}
      />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb items={[{ label: "Mentions legales" }]} />

        <PageHeader
          title="Mentions legales"
          subtitle="Informations legales concernant le site BrickNote"
          badge="Legal"
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Editeur du site</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le site <strong className="text-foreground font-semibold">www.bricknote.ai</strong> est edite par :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">Raison sociale :</strong> APITHINGS</li>
                  <li><strong className="text-foreground font-semibold">Forme juridique :</strong> SAS (Societe par actions simplifiee)</li>
                  <li><strong className="text-foreground font-semibold">SIREN :</strong> 890 251 184</li>
                  <li><strong className="text-foreground font-semibold">Siege social :</strong> France</li>
                  <li><strong className="text-foreground font-semibold">Email :</strong> contact@bricknote.ai</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Directeur de la publication</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le directeur de la publication est le representant legal de la societe APITHINGS.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Hebergement</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le site est heberge par :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">Vercel Inc.</strong></li>
                  <li>340 S Lemon Ave #4133</li>
                  <li>Walnut, CA 91789, USA</li>
                  <li>https://vercel.com</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Propriete intellectuelle</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;ensemble des contenus (textes, images, graphismes, logo, icones, sons, logiciels)
                  du site BrickNote est la propriete exclusive de APITHINGS ou de ses partenaires
                  et est protege par les lois francaises et internationales relatives a la propriete intellectuelle.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Toute reproduction, representation, modification, publication, adaptation de tout ou partie
                  des elements du site, quel que soit le moyen ou le procede utilise, est interdite,
                  sauf autorisation ecrite prealable de APITHINGS.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Donnees personnelles</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute information concernant la collecte et le traitement de vos donnees personnelles,
                  veuillez consulter notre{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:underline">
                    Politique de confidentialite
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le site BrickNote utilise des cookies strictement necessaires au fonctionnement du site.
                  Ces cookies ne collectent aucune donnee personnelle a des fins publicitaires.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Liens hypertextes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le site peut contenir des liens vers d&apos;autres sites. APITHINGS n&apos;exerce aucun controle
                  sur ces sites et decline toute responsabilite quant a leur contenu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Droit applicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les presentes mentions legales sont regies par le droit francais.
                  En cas de litige, les tribunaux francais seront seuls competents.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question concernant ces mentions legales, vous pouvez nous contacter via
                  notre{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    formulaire de contact
                  </a>.
                </p>
              </div>

              <p className="text-sm text-muted-foreground pt-8 border-t">
                Derniere mise a jour : Janvier 2026
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

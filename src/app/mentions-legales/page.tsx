import { Metadata } from "next"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { BreadcrumbSchema } from "@/components/seo"

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site OptiChantier. Informations sur l'editeur, l'hebergeur et les droits de propriete intellectuelle.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.optichantier.com" },
          { name: "Mentions legales", url: "https://www.optichantier.com/mentions-legales" },
        ]}
      />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb items={[{ label: "Mentions legales" }]} />

        <PageHeader
          title="Mentions legales"
          subtitle="Informations legales concernant le site OptiChantier"
          badge="Legal"
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <h2>Editeur du site</h2>
              <p>
                Le site <strong>www.optichantier.com</strong> est edite par :
              </p>
              <ul>
                <li><strong>Raison sociale :</strong> APITHINGS</li>
                <li><strong>Forme juridique :</strong> SAS (Societe par actions simplifiee)</li>
                <li><strong>SIREN :</strong> 890 251 184</li>
                <li><strong>Siege social :</strong> France</li>
                <li><strong>Email :</strong> contact@optichantier.com</li>
              </ul>

              <h2>Directeur de la publication</h2>
              <p>
                Le directeur de la publication est le representant legal de la societe APITHINGS.
              </p>

              <h2>Hebergement</h2>
              <p>
                Le site est heberge par :
              </p>
              <ul>
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133</li>
                <li>Walnut, CA 91789, USA</li>
                <li>https://vercel.com</li>
              </ul>

              <h2>Propriete intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus (textes, images, graphismes, logo, icones, sons, logiciels)
                du site OptiChantier est la propriete exclusive de APITHINGS ou de ses partenaires
                et est protege par les lois francaises et internationales relatives a la propriete intellectuelle.
              </p>
              <p>
                Toute reproduction, representation, modification, publication, adaptation de tout ou partie
                des elements du site, quel que soit le moyen ou le procede utilise, est interdite,
                sauf autorisation ecrite prealable de APITHINGS.
              </p>

              <h2>Donnees personnelles</h2>
              <p>
                Pour toute information concernant la collecte et le traitement de vos donnees personnelles,
                veuillez consulter notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialite</a>.
              </p>

              <h2>Cookies</h2>
              <p>
                Le site OptiChantier utilise des cookies strictement necessaires au fonctionnement du site.
                Ces cookies ne collectent aucune donnee personnelle a des fins publicitaires.
              </p>

              <h2>Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d&apos;autres sites. APITHINGS n&apos;exerce aucun controle
                sur ces sites et decline toute responsabilite quant a leur contenu.
              </p>

              <h2>Droit applicable</h2>
              <p>
                Les presentes mentions legales sont regies par le droit francais.
                En cas de litige, les tribunaux francais seront seuls competents.
              </p>

              <h2>Contact</h2>
              <p>
                Pour toute question concernant ces mentions legales, vous pouvez nous contacter via
                notre <a href="/contact" className="text-primary hover:underline">formulaire de contact</a>.
              </p>

              <p className="text-sm text-muted-foreground mt-8">
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

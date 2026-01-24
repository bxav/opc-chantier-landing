import { Metadata } from "next"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { BreadcrumbSchema } from "@/components/seo"

export const metadata: Metadata = {
  title: "Conditions Generales d'Utilisation",
  description: "CGU de l'application BrickNote. Conditions d'acces, utilisation du service et responsabilites.",
}

export default function CGUPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.bricknote.ai" },
          { name: "CGU", url: "https://www.bricknote.ai/cgu" },
        ]}
      />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb items={[{ label: "CGU" }]} />

        <PageHeader
          title="Conditions Generales d'Utilisation"
          subtitle="Conditions regissant l'utilisation de l'application BrickNote"
          badge="Legal"
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 1 - Objet</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les presentes Conditions Generales d&apos;Utilisation (CGU) regissent l&apos;acces et l&apos;utilisation
                  de l&apos;application mobile BrickNote, editee par APITHINGS (SIREN 890 251 184).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L&apos;utilisation de l&apos;application implique l&apos;acceptation pleine et entiere des presentes CGU.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 2 - Description du service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  BrickNote est une application mobile iOS destinee aux professionnels du BTP
                  (OPC, conducteurs de travaux, chefs de chantier). Elle permet :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>L&apos;enregistrement de notes vocales et leur transcription par IA</li>
                  <li>La prise de photos et leur annotation</li>
                  <li>La generation de comptes-rendus assistes par IA</li>
                  <li>La gestion multi-projets</li>
                  <li>Le fonctionnement hors ligne</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 3 - Acces au service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;application est accessible gratuitement sur l&apos;App Store pour les appareils iOS compatibles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L&apos;utilisateur est responsable de son equipement (smartphone, connexion internet)
                  et des frais eventuels y afferents.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 4 - Inscription</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;utilisation basique de l&apos;application ne necessite pas de creation de compte.
                  Certaines fonctionnalites avancees peuvent necessiter une inscription.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L&apos;utilisateur s&apos;engage a fournir des informations exactes et a les maintenir a jour.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 5 - Utilisation du service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;utilisateur s&apos;engage a :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Utiliser l&apos;application conformement a sa destination</li>
                  <li>Ne pas utiliser l&apos;application a des fins illicites</li>
                  <li>Ne pas tenter de compromettre la securite de l&apos;application</li>
                  <li>Respecter les droits de propriete intellectuelle</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 6 - Donnees utilisateur</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les donnees creees par l&apos;utilisateur (notes, photos, projets) restent sa propriete.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les donnees sont stockees localement sur l&apos;appareil de l&apos;utilisateur.
                  En cas d&apos;activation de la synchronisation, les donnees sont chiffrees et stockees
                  de maniere securisee.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pour plus d&apos;informations, consultez notre{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:underline">
                    Politique de confidentialite
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 7 - Intelligence artificielle</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;application utilise des technologies d&apos;intelligence artificielle pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>La transcription des enregistrements audio</li>
                  <li>La generation de comptes-rendus</li>
                  <li>L&apos;assistance contextuelle</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Les resultats fournis par l&apos;IA sont indicatifs et doivent etre verifies par l&apos;utilisateur.
                  APITHINGS ne garantit pas l&apos;exactitude des contenus generes par IA.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 8 - Propriete intellectuelle</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;application BrickNote, son interface, son code source et tous les elements
                  qui la composent sont la propriete exclusive de APITHINGS.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Toute reproduction, modification ou distribution non autorisee est interdite.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 9 - Responsabilite</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  APITHINGS s&apos;efforce d&apos;assurer la disponibilite et le bon fonctionnement de l&apos;application,
                  mais ne peut garantir un service exempt de toute interruption ou erreur.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  APITHINGS ne saurait etre tenu responsable des dommages directs ou indirects
                  resultant de l&apos;utilisation de l&apos;application.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 10 - Modification des CGU</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  APITHINGS se reserve le droit de modifier les presentes CGU a tout moment.
                  Les utilisateurs seront informes des modifications via l&apos;application.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La poursuite de l&apos;utilisation de l&apos;application apres modification des CGU
                  vaut acceptation des nouvelles conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 11 - Droit applicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les presentes CGU sont soumises au droit francais.
                  En cas de litige, les tribunaux francais seront seuls competents.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Article 12 - Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question relative aux presentes CGU, contactez-nous via
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

import { Metadata } from "next"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { PersonaCard, ScenarioSection } from "@/components/use-cases"
import { ClipboardList, HardHat, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Cas d'utilisation - OptiChantier",
  description: "Decouvrez comment OptiChantier s'adapte a chaque metier du BTP : OPC, Conducteur de travaux, Chef de chantier.",
}

const personas = [
  {
    icon: <ClipboardList className="w-7 h-7" />,
    title: "OPC",
    description: "Ordonnancement, Pilotage, Coordination. Gerez la planification et la coordination de tous les corps de metier.",
    painPoints: [
      "Jongler entre plusieurs chantiers simultanement",
      "Coordonner les interventions de dizaines d'entreprises",
      "Produire des comptes-rendus detailles apres chaque reunion",
      "Suivre les actions et relances en temps reel",
    ],
    features: [
      "Enregistrement audio des reunions avec transcription IA",
      "Generation automatique de comptes-rendus structures",
      "Suivi des actions par entreprise et par lot",
      "Vue multi-projets avec tableau de bord centralise",
    ],
    color: "oklch(0.62 0.24 30)",
  },
  {
    icon: <HardHat className="w-7 h-7" />,
    title: "Conducteur de travaux",
    description: "Supervisez l'avancement du chantier et assurez la liaison entre le bureau et le terrain.",
    painPoints: [
      "Documenter les problemes terrain rapidement",
      "Communiquer efficacement avec le bureau d'etudes",
      "Gerer les imprevis et retards",
      "Compiler les rapports hebdomadaires",
    ],
    features: [
      "Photos annotees pour signaler les defauts",
      "Notes vocales en deplacement",
      "Historique complet par zone ou par lot",
      "Export PDF pour partage avec les parties prenantes",
    ],
    color: "oklch(0.55 0.20 250)",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Chef de chantier",
    description: "Coordonnez les equipes sur le terrain et assurez le respect des delais et de la qualite.",
    painPoints: [
      "Transmettre les consignes aux equipes",
      "Documenter l'avancement quotidien",
      "Signaler les besoins en materiaux",
      "Suivre la securite et la conformite",
    ],
    features: [
      "Interface simple utilisable avec des gants",
      "Mode hors ligne pour les zones sans reseau",
      "Capture photo rapide avec annotation",
      "Assistant IA pour questions techniques",
    ],
    color: "oklch(0.60 0.18 150)",
  },
]

const scenarios = [
  {
    role: "OPC",
    color: "oklch(0.62 0.24 30)",
    workflow: [
      { time: "08:00", action: "Revue du planning et preparation de la reunion de chantier" },
      { time: "09:00", action: "Reunion hebdomadaire - enregistrement audio active" },
      { time: "11:00", action: "L'IA genere le compte-rendu pendant la pause" },
      { time: "14:00", action: "Verification et envoi du CR aux entreprises" },
      { time: "16:00", action: "Suivi des actions et relances automatiques" },
    ],
    benefits: [
      "Gain de 2h par reunion sur la redaction des comptes-rendus",
      "Zero perte d'information grace a l'enregistrement",
      "Tracabilite complete des decisions et engagements",
      "Meilleure coordination inter-entreprises",
    ],
    quote: {
      text: "Avant OptiChantier, je passais mes soirees a rediger les CR. Maintenant, c'est fait en 10 minutes.",
      author: "Marie D.",
      company: "Bureau OPC Ile-de-France",
    },
  },
  {
    role: "Conducteur de travaux",
    color: "oklch(0.55 0.20 250)",
    workflow: [
      { time: "07:30", action: "Tour de chantier matinal avec photos des zones critiques" },
      { time: "10:00", action: "Annotation des defauts constates sur plans" },
      { time: "12:00", action: "Synchronisation avec le bureau depuis la base vie" },
      { time: "15:00", action: "Preparation du rapport hebdomadaire assiste par IA" },
      { time: "17:00", action: "Consultation de l'historique pour la reunion du lendemain" },
    ],
    benefits: [
      "Documentation terrain 3x plus rapide",
      "Preuves photographiques datees et geolocalisees",
      "Rapports professionnels generes automatiquement",
      "Acces instantane a l'historique du chantier",
    ],
    quote: {
      text: "L'annotation sur photo a change ma facon de travailler. Plus besoin de longs emails explicatifs.",
      author: "Thomas L.",
      company: "Bouygues Batiment",
    },
  },
  {
    role: "Chef de chantier",
    color: "oklch(0.60 0.18 150)",
    workflow: [
      { time: "06:30", action: "Verification des taches du jour sur l'app" },
      { time: "08:00", action: "Brief equipe avec partage des photos annotees" },
      { time: "11:00", action: "Note vocale pour signaler un besoin materiel" },
      { time: "14:00", action: "Question technique a l'assistant IA" },
      { time: "16:00", action: "Photo d'avancement pour le conducteur de travaux" },
    ],
    benefits: [
      "Interface intuitive utilisable sur le terrain",
      "Fonctionne meme sans connexion internet",
      "Communication instantanee avec la hierarchie",
      "Reponses techniques immediates via l'IA",
    ],
    quote: {
      text: "Enfin une app qui comprend les contraintes du terrain. Je l'utilise meme avec mes gants.",
      author: "Karim B.",
      company: "Vinci Construction",
    },
  },
]

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      <div className="grain-overlay" />
      <Navbar />

      <Breadcrumb items={[{ label: "Cas d'utilisation" }]} />

      <PageHeader
        title="OptiChantier pour chaque metier"
        subtitle="Decouvrez comment l'application s'adapte a votre role et transforme votre quotidien sur le chantier."
        badge="Pour les pros du BTP"
      />

      {/* Persona Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, i) => (
              <div
                key={persona.title}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 100 + 300}ms`, animationFillMode: "forwards" }}
              >
                <PersonaCard {...persona} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Scenarios */}
      {scenarios.map((scenario) => (
        <ScenarioSection key={scenario.role} {...scenario} />
      ))}

      <Footer />
    </main>
  )
}

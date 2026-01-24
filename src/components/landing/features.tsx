"use client"

import {
  Layers,
  Mic,
  Image,
  MessageSquare,
  Calendar,
  Wifi,
  Sparkles,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"

const features = [
  {
    icon: MessageSquare,
    title: "Assistant IA",
    description:
      "Posez vos questions sur le projet. L'assistant connait toutes vos notes et peut les resumer en un instant.",
    size: "lg" as const,
    gradient: true,
  },
  {
    icon: Mic,
    title: "Enregistrement reunion",
    description:
      "Enregistrez vos reunions de chantier. Transcription et resume automatique par IA.",
    size: "wide" as const,
  },
  {
    icon: Image,
    title: "Photos annotees",
    description:
      "Prenez des photos et annotez-les directement. Cercles, fleches, texte - tout est possible.",
    size: "default" as const,
  },
  {
    icon: Layers,
    title: "Multi-projets",
    description:
      "Gerez plusieurs chantiers en parallele. Basculez d'un projet a l'autre en un tap.",
    size: "default" as const,
  },
  {
    icon: Calendar,
    title: "Journal chronologique",
    description:
      "Retrouvez facilement vos notes par date. Historique complet de chaque chantier.",
    size: "default" as const,
  },
  {
    icon: Wifi,
    title: "Mode hors ligne",
    description:
      "Fonctionne sans connexion. Vos donnees se synchronisent des que le reseau revient.",
    size: "default" as const,
  },
]

export function Features() {
  return (
    <section id="fonctionnalites" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            <span className="font-serif">Tout ce qu&apos;il vous faut,</span>
            <br />
            <span className="font-serif text-gradient-primary">rien de superflu</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des outils penses pour le terrain, accessibles en quelques taps.
          </p>
        </AnimateOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 75} animation="scale-in">
              <BentoCard {...feature} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function BentoCard({
  icon: Icon,
  title,
  description,
  size,
  gradient,
}: {
  icon: React.ElementType
  title: string
  description: string
  size: "default" | "wide" | "lg"
  gradient?: boolean
}) {
  const sizeClasses = {
    default: "",
    wide: "md:col-span-2 lg:col-span-1",
    lg: "md:col-span-2 lg:row-span-2",
  }

  return (
    <div
      className={`
        group relative overflow-hidden h-full
        bg-card rounded-2xl p-6 lg:p-8
        border border-border/50
        shadow-depth hover:shadow-depth-lg
        transition-all duration-500
        hover:-translate-y-1
        ${sizeClasses[size]}
        ${gradient ? "bg-gradient-to-br from-primary/5 via-transparent to-gold/5" : ""}
      `}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </div>

      <div className="relative">
        {/* Icon */}
        <div className={`
          w-12 h-12 lg:w-14 lg:h-14 rounded-xl
          flex items-center justify-center mb-5
          transition-all duration-300
          ${gradient
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
            : "bg-accent group-hover:bg-primary/10"
          }
        `}>
          <Icon className={`
            w-6 h-6 lg:w-7 lg:h-7
            transition-transform duration-300
            group-hover:scale-110
            ${gradient ? "" : "text-primary"}
          `} />
        </div>

        {/* Content */}
        <h3 className={`
          font-bold mb-3 tracking-tight
          ${size === "lg" ? "text-xl lg:text-2xl" : "text-lg"}
        `}>
          {title}
        </h3>

        <p className={`
          text-muted-foreground leading-relaxed
          ${size === "lg" ? "text-base lg:text-lg" : "text-sm"}
        `}>
          {description}
        </p>

        {/* Feature highlight for large card */}
        {gradient && (
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Propulse par l&apos;IA Claude</span>
            </div>
          </div>
        )}
      </div>

      {/* Decorative corner gradient for gradient cards */}
      {gradient && (
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-2xl pointer-events-none" />
      )}
    </div>
  )
}

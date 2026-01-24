"use client"

import { useTranslations } from "next-intl"
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

const featureKeys = [
  { key: "aiAssistant", icon: MessageSquare, size: "lg" as const, gradient: true },
  { key: "meetingRecording", icon: Mic, size: "wide" as const },
  { key: "annotatedPhotos", icon: Image, size: "default" as const },
  { key: "multiProject", icon: Layers, size: "default" as const },
  { key: "chronologicalJournal", icon: Calendar, size: "default" as const },
  { key: "offlineMode", icon: Wifi, size: "default" as const },
]

export function Features() {
  const t = useTranslations("features")

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            <span className="font-serif">{t("titleLine1")}</span>
            <br />
            <span className="font-serif text-gradient-primary">{t("titleLine2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </AnimateOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featureKeys.map((feature, index) => (
            <AnimateOnScroll key={feature.key} delay={index * 75} animation="scale-in">
              <BentoCard
                icon={feature.icon}
                title={t(`items.${feature.key}.title`)}
                description={t(`items.${feature.key}.description`)}
                size={feature.size}
                gradient={feature.gradient}
                aiPoweredLabel={t("aiPowered")}
              />
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
  aiPoweredLabel,
}: {
  icon: React.ElementType
  title: string
  description: string
  size: "default" | "wide" | "lg"
  gradient?: boolean
  aiPoweredLabel?: string
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
        {gradient && aiPoweredLabel && (
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{aiPoweredLabel}</span>
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

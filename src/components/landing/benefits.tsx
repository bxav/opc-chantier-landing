"use client"

import { Check, FileText, Image, CheckCircle, Users, Clock, WifiOff } from "lucide-react"

const benefits = [
  {
    title: "Prise en main immediate",
    description: "Interface intuitive, aucune formation necessaire.",
  },
  {
    title: "Donnees locales",
    description:
      "Vos informations restent sur votre appareil. Confidentialite garantie.",
  },
  {
    title: "Mode vocal",
    description: "Dictez vos notes et questions. L'app repond a voix haute.",
  },
  {
    title: "Application native iOS",
    description:
      "Une vraie app iPhone, fluide et optimisee pour le terrain.",
  },
]

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "utilisateurs actifs",
  },
  {
    icon: Clock,
    value: "2 min",
    label: "prise en main",
  },
  {
    icon: WifiOff,
    value: "100%",
    label: "hors ligne",
  },
]

export function Benefits() {
  return (
    <section id="avantages" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-20 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              <span className="font-serif">Concu pour</span>
              <br />
              <span className="font-serif text-gradient-primary">le terrain</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              OptiChantier est pense pour les professionnels du BTP qui ont
              besoin d&apos;un outil simple, rapide et fiable.
            </p>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <BenefitItem key={benefit.title} {...benefit} index={index} />
              ))}
            </div>
          </div>

          {/* Floating Cards Visual */}
          <div className="relative h-[400px] hidden lg:block">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5 rounded-3xl" />

            <FloatingCard
              icon={FileText}
              text="CR reunion genere"
              className="absolute top-[10%] left-[10%] animate-float"
              variant="primary"
            />
            <FloatingCard
              icon={CheckCircle}
              text="3 actions a suivre"
              className="absolute top-[40%] right-[5%] animate-float-delayed"
              variant="success"
            />
            <FloatingCard
              icon={Image}
              text="12 photos ce mois"
              className="absolute bottom-[15%] left-[20%] animate-float-slow"
              variant="info"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType
  value: string
  label: string
}) {
  return (
    <div className="text-center p-4 lg:p-6 rounded-2xl bg-card border border-border/50 shadow-depth hover:shadow-depth-lg transition-all duration-300 hover:-translate-y-1">
      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary mx-auto mb-2" />
      <div className="text-2xl lg:text-3xl font-bold text-gradient-primary">{value}</div>
      <div className="text-xs lg:text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function BenefitItem({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  return (
    <div
      className="flex gap-4 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
        <Check className="w-4 h-4 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

function FloatingCard({
  icon: Icon,
  text,
  className,
  variant,
}: {
  icon: React.ElementType
  text: string
  className?: string
  variant: "primary" | "success" | "info"
}) {
  const variantClasses = {
    primary: "bg-accent text-primary",
    success: "bg-green-100 text-green-600",
    info: "bg-blue-100 text-blue-600",
  }

  return (
    <div
      className={`
        flex items-center gap-3 px-5 py-4
        bg-card rounded-xl
        shadow-depth hover:shadow-depth-lg
        border border-border/50
        transition-all duration-300
        ${className}
      `}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${variantClasses[variant]}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium text-sm">{text}</span>
    </div>
  )
}

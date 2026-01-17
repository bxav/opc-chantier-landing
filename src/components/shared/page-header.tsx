import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full opacity-20 animate-float-orb"
          style={{
            background: "radial-gradient(circle, oklch(0.62 0.24 30 / 0.4) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute top-1/2 -left-60 w-[500px] h-[500px] rounded-full opacity-15 animate-float-orb-reverse"
          style={{
            background: "radial-gradient(circle, oklch(0.80 0.12 85 / 0.5) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <Badge
            variant="secondary"
            className="mb-6 bg-accent/50 border border-primary/20 text-primary opacity-0 animate-fade-up"
          >
            {badge}
          </Badge>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight opacity-0 animate-fade-up delay-100">
          <span className="text-gradient-primary">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

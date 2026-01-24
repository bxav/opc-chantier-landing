"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wifi, WifiOff, Shield, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30 animate-float-orb"
          style={{
            background: "radial-gradient(circle, oklch(0.62 0.24 30 / 0.4) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute top-1/2 -left-60 w-[600px] h-[600px] rounded-full opacity-20 animate-float-orb-reverse"
          style={{
            background: "radial-gradient(circle, oklch(0.80 0.12 85 / 0.5) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-25 animate-float-orb"
          style={{
            background: "radial-gradient(circle, oklch(0.60 0.15 250 / 0.3) 0%, transparent 70%)",
            animationDelay: "-5s"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 opacity-0 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Bientot sur iOS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight opacity-0 animate-fade-up delay-100">
              <span className="font-serif font-semibold">Pilotez vos chantiers</span>
              <br />
              <span className="text-gradient-primary font-serif font-bold">en toute simplicite</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-up delay-200">
              Centralisez notes, photos et comptes-rendus de reunion. Annotez vos images et posez vos questions a l&apos;assistant IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
              <Button size="lg" asChild className="rounded-full px-8 shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-300 animate-glow-pulse-subtle min-h-[48px]">
                <Link href="/contact" className="gap-2">
                  Commencer gratuitement
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 hover:bg-secondary active:scale-[0.98] transition-all duration-300 min-h-[48px]">
                <Link href="#fonctionnalites">En savoir plus</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-4 opacity-0 animate-fade-up delay-400">
              <TrustBadge icon={WifiOff} text="100% hors ligne" />
              <TrustBadge icon={Shield} text="Donnees locales" />
              <TrustBadge icon={Wifi} text="Aucune inscription" />
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-scale-in delay-300">
            <div className="relative group">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-[3.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-foreground rounded-[3rem] p-3 shadow-depth-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-primary px-4 pt-10 pb-4">
                    <p className="text-primary-foreground font-semibold text-sm">
                      Mon chantier
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 space-y-3">
                    <p className="text-xs text-muted-foreground font-medium">
                      Aujourd&apos;hui
                    </p>

                    <MockupCard
                      color="bg-blue-100"
                      iconColor="bg-blue-500"
                      title="Reunion de chantier"
                      subtitle="3 actions identifiees"
                      delay={0}
                    />
                    <MockupCard
                      color="bg-green-100"
                      iconColor="bg-green-500"
                      title="Photos zone B"
                      subtitle="5 photos annotees"
                      delay={100}
                    />
                    <MockupCard
                      color="bg-amber-100"
                      iconColor="bg-amber-500"
                      title="Note rapide"
                      subtitle="Retard livraison beton"
                      delay={200}
                    />
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex justify-around py-3 border-t bg-background">
                    <NavItem label="Journal" active />
                    <NavItem label="+" />
                    <NavItem label="Assistant" />
                    <NavItem label="Agenda" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/80 border border-border min-h-[36px]">
      <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{text}</span>
    </div>
  )
}

function MockupCard({
  color,
  iconColor,
  title,
  subtitle,
  delay = 0,
}: {
  color: string
  iconColor: string
  title: string
  subtitle: string
  delay?: number
}) {
  return (
    <div
      className="flex items-center gap-3 p-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`relative w-9 h-9 rounded-lg ${color} flex items-center justify-center`}>
        <div className={`w-3 h-3 rounded-full ${iconColor} group-hover:scale-110 transition-transform`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold truncate">{title}</p>
        <p className="text-[10px] text-muted-foreground truncate">{subtitle}</p>
      </div>
    </div>
  )
}

function NavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span className={`text-[10px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>
      {label}
    </span>
  )
}

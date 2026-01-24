"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden">
        <div
          className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-white/10 animate-float"
        />
        <div
          className="absolute bottom-20 right-[15%] w-16 h-16 rounded-full bg-white/10 animate-float-delayed"
        />
        <div
          className="absolute top-1/2 right-[5%] w-12 h-12 rounded-full bg-white/10 animate-float-slow"
        />
        <div
          className="absolute bottom-10 left-[20%] w-8 h-8 rounded-full bg-white/10 animate-float"
          style={{ animationDelay: "-3s" }}
        />

        {/* Larger decorative orbs */}
        <div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-float-orb"
          style={{
            background: "radial-gradient(circle, white 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-15 animate-float-orb-reverse"
          style={{
            background: "radial-gradient(circle, white 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/90">Gratuit et sans inscription</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
            <span className="font-serif">Pret a simplifier</span>
            <br />
            <span className="font-serif">votre quotidien ?</span>
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Commencez a utiliser BrickNote des maintenant. Vos donnees restent sur votre appareil, aucun compte n&apos;est requis.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} animation="scale-in">
          <Button
            size="lg"
            asChild
            className="
              rounded-full px-10 py-6
              bg-white text-primary
              hover:bg-white/90 active:scale-[0.98]
              shadow-xl hover:shadow-2xl
              transition-all duration-300
              animate-glow-pulse
            "
          >
            <Link href="/contact" className="gap-2 text-lg font-semibold">
              Lancer l&apos;application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </AnimateOnScroll>

        {/* Trust note */}
        <AnimateOnScroll delay={300}>
          <p className="mt-8 text-sm text-white/60">
            Bientot sur l&apos;App Store · Fonctionne hors ligne · Donnees 100% locales
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

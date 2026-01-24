"use client"

import { useTranslations } from "next-intl"
import { Quote } from "lucide-react"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"

const testimonialKeys = ["marie", "thomas", "sophie"]

export function Testimonials() {
  const t = useTranslations("testimonials")

  return (
    <section id="temoignages" className="py-24 bg-muted/30">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialKeys.map((key, index) => (
            <AnimateOnScroll key={key} delay={index * 100} animation="fade-up">
              <TestimonialCard
                quote={t(`items.${key}.quote`)}
                author={t(`items.${key}.author`)}
                role={t(`items.${key}.role`)}
                company={t(`items.${key}.company`)}
                avatar={t(`items.${key}.avatar`)}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
}: {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}) {
  return (
    <div
      className="
        relative group h-full
        bg-card rounded-2xl p-6 lg:p-8
        border border-border/50
        shadow-depth hover:shadow-depth-lg
        transition-all duration-500
        hover:-translate-y-1
      "
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
        <Quote className="w-4 h-4 text-primary-foreground" />
      </div>

      {/* Quote */}
      <blockquote className="text-muted-foreground leading-relaxed mb-6 pt-2">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-primary-foreground font-semibold text-sm">
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-sm">{author}</div>
          <div className="text-xs text-muted-foreground">
            {role} · {company}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

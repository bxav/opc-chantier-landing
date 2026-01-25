"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"
import { CopyResultsButton } from "./copy-results-button"
import { CalculatorCta } from "./calculator-cta"
import { RelatedTools } from "./related-tools"

type ToolPath =
  | "/tools/concrete-calculator"
  | "/tools/paint-calculator"
  | "/tools/tile-calculator"
  | "/tools/flooring-calculator"
  | "/tools/unit-converter"

interface CalculatorLayoutProps {
  title: string
  description: string
  icon: ReactNode
  children: ReactNode
  results: ReactNode
  note?: string
  copyText?: string
  currentTool: ToolPath
}

export function CalculatorLayout({
  title,
  description,
  icon,
  children,
  results,
  note,
  copyText,
  currentTool,
}: CalculatorLayoutProps) {
  const t = useTranslations("tools")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Back link */}
        <Link
          href="/tools"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("backToTools")}
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>

        {/* Calculator content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input section */}
          <div className="bg-card rounded-2xl border p-6 shadow-sm">
            <div className="space-y-6">{children}</div>
          </div>

          {/* Results section */}
          <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">{t("results")}</h2>
              {copyText && <CopyResultsButton copyText={copyText} />}
            </div>
            <div className="space-y-4">{results}</div>
            {note && (
              <p className="mt-6 text-sm text-muted-foreground italic">
                {note}
              </p>
            )}
          </div>
        </div>

        {/* CTA Banner */}
        <CalculatorCta />

        {/* Related Tools */}
        <RelatedTools currentTool={currentTool} />
      </div>
    </div>
  )
}

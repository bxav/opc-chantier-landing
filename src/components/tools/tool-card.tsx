"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

type ToolPath =
  | "/tools/concrete-calculator"
  | "/tools/paint-calculator"
  | "/tools/tile-calculator"
  | "/tools/flooring-calculator"
  | "/tools/unit-converter"

interface ToolCardProps {
  href: ToolPath
  title: string
  description: string
  icon: ReactNode
}

export function ToolCard({ href, title, description, icon }: ToolCardProps) {
  const t = useTranslations("tools")

  return (
    <Link href={href}>
      <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex items-center text-primary text-sm font-medium">
            <span className="group-hover:underline">{t("open")}</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

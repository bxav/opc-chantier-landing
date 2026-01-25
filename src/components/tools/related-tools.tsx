"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Box, Paintbrush, Grid3X3, Layers, ArrowLeftRight } from "lucide-react"
import type { ReactNode } from "react"

type ToolPath =
  | "/tools/concrete-calculator"
  | "/tools/paint-calculator"
  | "/tools/tile-calculator"
  | "/tools/flooring-calculator"
  | "/tools/unit-converter"

interface RelatedToolsProps {
  currentTool: ToolPath
}

const tools: { href: ToolPath; titleKey: string; icon: ReactNode }[] = [
  { href: "/tools/concrete-calculator", titleKey: "items.concrete.shortTitle", icon: <Box className="w-5 h-5 text-primary" /> },
  { href: "/tools/paint-calculator", titleKey: "items.paint.shortTitle", icon: <Paintbrush className="w-5 h-5 text-primary" /> },
  { href: "/tools/tile-calculator", titleKey: "items.tile.shortTitle", icon: <Grid3X3 className="w-5 h-5 text-primary" /> },
  { href: "/tools/flooring-calculator", titleKey: "items.flooring.shortTitle", icon: <Layers className="w-5 h-5 text-primary" /> },
  { href: "/tools/unit-converter", titleKey: "items.converter.shortTitle", icon: <ArrowLeftRight className="w-5 h-5 text-primary" /> },
]

export function RelatedTools({ currentTool }: RelatedToolsProps) {
  const t = useTranslations("tools")

  const relatedTools = tools.filter((tool) => tool.href !== currentTool).slice(0, 3)

  return (
    <div className="mt-12">
      <h2 className="font-semibold text-lg mb-4">{t("relatedTools")}</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {relatedTools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card className="group h-full transition-all duration-300 hover:shadow-md hover:border-primary/30">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {tool.icon}
                </div>
                <span className="font-medium text-sm group-hover:text-primary transition-colors">
                  {t(tool.titleKey)}
                </span>
                <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

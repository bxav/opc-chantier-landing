"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Check } from "lucide-react"

interface PersonaCardProps {
  icon: React.ReactNode
  title: string
  description: string
  painPoints: string[]
  features: string[]
  color: string
  scrollToId?: string
}

export function PersonaCard({
  icon,
  title,
  description,
  painPoints,
  features,
  color,
  scrollToId,
}: PersonaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const t = useTranslations("useCases")

  const handleCardClick = () => {
    if (scrollToId) {
      document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Card
      className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: color }}
      />
      <CardContent className="p-6 space-y-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <div className="space-y-3">
          <div>
            <Badge variant="outline" className="mb-2 text-xs">
              {t("dailyChallenges")}
            </Badge>
            <ul className="space-y-1">
              {painPoints.slice(0, isExpanded ? undefined : 2).map((point, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {isExpanded && (
            <div className="animate-fade-up">
              <Badge variant="outline" className="mb-2 text-xs">
                {t("keyFeatures")}
              </Badge>
              <ul className="space-y-1">
                {features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
        >
          {isExpanded ? (
            <>
              {t("seeLess")} <ChevronUp className="w-4 h-4 ml-1" />
            </>
          ) : (
            <>
              {t("learnMore")} <ChevronDown className="w-4 h-4 ml-1" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

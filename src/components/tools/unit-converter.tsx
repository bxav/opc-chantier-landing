"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { ArrowLeft, ArrowRightLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CalculatorCta } from "./calculator-cta"
import { RelatedTools } from "./related-tools"
import { CopyResultsButton } from "./copy-results-button"

type Category = "area" | "volume" | "weight" | "length"

const conversions: Record<Category, Record<string, Record<string, number>>> = {
  area: {
    m2: { m2: 1, ft2: 10.7639 },
    ft2: { m2: 0.0929, ft2: 1 },
  },
  volume: {
    m3: { m3: 1, L: 1000, gal: 264.172 },
    L: { m3: 0.001, L: 1, gal: 0.264172 },
    gal: { m3: 0.00378541, L: 3.78541, gal: 1 },
  },
  weight: {
    kg: { kg: 1, lbs: 2.20462 },
    lbs: { kg: 0.453592, lbs: 1 },
  },
  length: {
    m: { m: 1, ft: 3.28084, cm: 100, in: 39.3701 },
    ft: { m: 0.3048, ft: 1, cm: 30.48, in: 12 },
    cm: { m: 0.01, ft: 0.0328084, cm: 1, in: 0.393701 },
    in: { m: 0.0254, ft: 0.0833333, cm: 2.54, in: 1 },
  },
}

const unitsByCategory: Record<Category, string[]> = {
  area: ["m2", "ft2"],
  volume: ["m3", "L", "gal"],
  weight: ["kg", "lbs"],
  length: ["m", "ft", "cm", "in"],
}

export function UnitConverter() {
  const t = useTranslations("tools.items.converter")
  const tTools = useTranslations("tools")

  const [category, setCategory] = useState<Category>("area")
  const [fromUnit, setFromUnit] = useState("m2")
  const [toUnit, setToUnit] = useState("ft2")
  const [value, setValue] = useState(1)

  const result = value * (conversions[category][fromUnit]?.[toUnit] ?? 1)
  const resultFormatted = result.toFixed(4).replace(/\.?0+$/, "")

  const copyText = `${t("title")}
${value} ${t(`units.${fromUnit}`)} = ${resultFormatted} ${t(`units.${toUnit}`)}`

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory)
    const units = unitsByCategory[newCategory]
    setFromUnit(units[0])
    setToUnit(units[1])
  }

  const swapUnits = () => {
    const temp = fromUnit
    setFromUnit(toUnit)
    setToUnit(temp)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Back link */}
        <Link
          href="/tools"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {tTools("backToTools")}
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <ArrowRightLeft className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{t("title")}</h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>
        </div>

        {/* Converter */}
        <div className="bg-card rounded-2xl border p-6 shadow-sm space-y-6">
          {/* Header with copy button */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(conversions) as Category[]).map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(cat)}
                  className="rounded-full"
                >
                  {t(`categories.${cat}`)}
                </Button>
              ))}
            </div>
            <CopyResultsButton copyText={copyText} />
          </div>

          {/* Conversion inputs */}
          <div className="grid sm:grid-cols-[1fr,auto,1fr] gap-4 items-end">
            <div className="space-y-2">
              <Label>{t("from")}</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
                  className="h-11"
                />
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger className="w-24 h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {unitsByCategory[category].map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {t(`units.${unit}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={swapUnits}
              className="h-11 w-11 rounded-full hidden sm:flex"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </Button>

            <div className="space-y-2">
              <Label>{t("to")}</Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={resultFormatted}
                  readOnly
                  className="h-11 bg-primary/5 font-semibold"
                />
                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger className="w-24 h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {unitsByCategory[category].map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {t(`units.${unit}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <CalculatorCta />

        {/* Related Tools */}
        <RelatedTools currentTool="/tools/unit-converter" />
      </div>
    </div>
  )
}

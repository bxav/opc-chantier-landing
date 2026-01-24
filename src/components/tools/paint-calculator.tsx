"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { CalculatorLayout } from "./calculator-layout"
import { CalculatorInput } from "./calculator-input"
import { Paintbrush } from "lucide-react"

export function PaintCalculator() {
  const t = useTranslations("tools.items.paint")

  const [wallHeight, setWallHeight] = useState(2.5)
  const [wallLength, setWallLength] = useState(15)
  const [coats, setCoats] = useState(2)
  const [coverage, setCoverage] = useState(10)
  const [openings, setOpenings] = useState(4)

  const grossSurface = wallHeight * wallLength
  const netSurface = Math.max(0, grossSurface - openings * 1.5)
  const liters = (netSurface * coats) / coverage

  return (
    <CalculatorLayout
      title={t("title")}
      description={t("description")}
      icon={<Paintbrush className="w-7 h-7 text-primary" />}
      note={t("note")}
      results={
        <>
          <div className="bg-white rounded-xl p-4 border">
            <div className="text-sm text-muted-foreground mb-1">
              {t("litersNeeded")}
            </div>
            <div className="text-3xl font-bold text-primary">
              {liters.toFixed(1)} L
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border">
            <div className="text-sm text-muted-foreground mb-1">
              {t("surfaceArea")}
            </div>
            <div className="text-2xl font-bold">{netSurface.toFixed(1)} m²</div>
          </div>
        </>
      }
    >
      <CalculatorInput
        id="wallHeight"
        label={t("wallHeight")}
        value={wallHeight}
        onChange={setWallHeight}
        unit="m"
        min={0.5}
        step={0.1}
      />
      <CalculatorInput
        id="wallLength"
        label={t("wallLength")}
        value={wallLength}
        onChange={setWallLength}
        unit="m"
        min={1}
        step={0.5}
      />
      <CalculatorInput
        id="coats"
        label={t("coats")}
        value={coats}
        onChange={setCoats}
        min={1}
        max={4}
        step={1}
      />
      <CalculatorInput
        id="coverage"
        label={t("coverage")}
        value={coverage}
        onChange={setCoverage}
        unit="m²/L"
        min={5}
        max={20}
        step={1}
      />
      <CalculatorInput
        id="openings"
        label={t("openings")}
        value={openings}
        onChange={setOpenings}
        min={0}
        step={1}
      />
    </CalculatorLayout>
  )
}

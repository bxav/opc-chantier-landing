"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { CalculatorLayout } from "./calculator-layout"
import { CalculatorInput } from "./calculator-input"
import { LayoutGrid } from "lucide-react"

export function FlooringCalculator() {
  const t = useTranslations("tools.items.flooring")

  const [roomLength, setRoomLength] = useState(5)
  const [roomWidth, setRoomWidth] = useState(4)
  const [packCoverage, setPackCoverage] = useState(2.4)
  const [waste, setWaste] = useState(5)

  const surfaceArea = roomLength * roomWidth
  const surfaceWithWaste = surfaceArea * (1 + waste / 100)
  const packsNeeded = Math.ceil(surfaceWithWaste / packCoverage)

  const copyText = `${t("title")}
${t("surfaceNeeded")}: ${surfaceWithWaste.toFixed(1)} m²
${t("packsNeeded")}: ${packsNeeded}`

  return (
    <CalculatorLayout
      title={t("title")}
      description={t("description")}
      icon={<LayoutGrid className="w-7 h-7 text-primary" />}
      note={t("note")}
      copyText={copyText}
      currentTool="/tools/flooring-calculator"
      results={
        <>
          <div className="bg-white rounded-xl p-4 border">
            <div className="text-sm text-muted-foreground mb-1">
              {t("surfaceNeeded")}
            </div>
            <div className="text-3xl font-bold text-primary">
              {surfaceWithWaste.toFixed(1)} m²
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border">
            <div className="text-sm text-muted-foreground mb-1">
              {t("packsNeeded")}
            </div>
            <div className="text-2xl font-bold">{packsNeeded}</div>
          </div>
        </>
      }
    >
      <CalculatorInput
        id="roomLength"
        label={t("roomLength")}
        value={roomLength}
        onChange={setRoomLength}
        unit="m"
        min={0.5}
        step={0.1}
      />
      <CalculatorInput
        id="roomWidth"
        label={t("roomWidth")}
        value={roomWidth}
        onChange={setRoomWidth}
        unit="m"
        min={0.5}
        step={0.1}
      />
      <CalculatorInput
        id="packCoverage"
        label={t("packCoverage")}
        value={packCoverage}
        onChange={setPackCoverage}
        unit="m²"
        min={0.5}
        step={0.1}
      />
      <CalculatorInput
        id="waste"
        label={t("waste")}
        value={waste}
        onChange={setWaste}
        unit="%"
        min={0}
        max={30}
        step={1}
      />
    </CalculatorLayout>
  )
}

"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { CalculatorLayout } from "./calculator-layout"
import { CalculatorInput } from "./calculator-input"
import { Layers } from "lucide-react"

export function ConcreteCalculator() {
  const t = useTranslations("tools.items.concrete")

  const [length, setLength] = useState(5)
  const [width, setWidth] = useState(4)
  const [thickness, setThickness] = useState(0.1)

  const volume = length * width * thickness
  const bags25kg = Math.ceil((volume * 2000) / 25)
  const bags35kg = Math.ceil((volume * 2000) / 35)

  return (
    <CalculatorLayout
      title={t("title")}
      description={t("description")}
      icon={<Layers className="w-7 h-7 text-primary" />}
      note={t("note")}
      results={
        <>
          <div className="bg-white rounded-xl p-4 border">
            <div className="text-sm text-muted-foreground mb-1">
              {t("volume")}
            </div>
            <div className="text-3xl font-bold text-primary">
              {volume.toFixed(2)} m³
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border">
              <div className="text-sm text-muted-foreground mb-1">
                {t("bags25kg")}
              </div>
              <div className="text-2xl font-bold">{bags25kg}</div>
            </div>
            <div className="bg-white rounded-xl p-4 border">
              <div className="text-sm text-muted-foreground mb-1">
                {t("bags35kg")}
              </div>
              <div className="text-2xl font-bold">{bags35kg}</div>
            </div>
          </div>
        </>
      }
    >
      <CalculatorInput
        id="length"
        label={t("length")}
        value={length}
        onChange={setLength}
        unit="m"
        min={0.1}
        step={0.1}
      />
      <CalculatorInput
        id="width"
        label={t("width")}
        value={width}
        onChange={setWidth}
        unit="m"
        min={0.1}
        step={0.1}
      />
      <CalculatorInput
        id="thickness"
        label={t("thickness")}
        value={thickness}
        onChange={setThickness}
        unit="m"
        min={0.01}
        step={0.01}
      />
    </CalculatorLayout>
  )
}

"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { CalculatorLayout } from "./calculator-layout"
import { CalculatorInput } from "./calculator-input"
import { Grid3X3 } from "lucide-react"

export function TileCalculator() {
  const t = useTranslations("tools.items.tile")

  const [surfaceLength, setSurfaceLength] = useState(5)
  const [surfaceWidth, setSurfaceWidth] = useState(4)
  const [tileLength, setTileLength] = useState(60)
  const [tileWidth, setTileWidth] = useState(60)
  const [tilesPerPack, setTilesPerPack] = useState(4)
  const [waste, setWaste] = useState(10)

  const surfaceArea = surfaceLength * surfaceWidth
  const tileArea = (tileLength / 100) * (tileWidth / 100)
  const tilesNeeded = Math.ceil((surfaceArea / tileArea) * (1 + waste / 100))
  const packsNeeded = Math.ceil(tilesNeeded / tilesPerPack)

  return (
    <CalculatorLayout
      title={t("title")}
      description={t("description")}
      icon={<Grid3X3 className="w-7 h-7 text-primary" />}
      note={t("note")}
      results={
        <>
          <div className="bg-white rounded-xl p-4 border">
            <div className="text-sm text-muted-foreground mb-1">
              {t("tilesNeeded")}
            </div>
            <div className="text-3xl font-bold text-primary">{tilesNeeded}</div>
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
      <div className="grid grid-cols-2 gap-4">
        <CalculatorInput
          id="surfaceLength"
          label={t("surfaceLength")}
          value={surfaceLength}
          onChange={setSurfaceLength}
          unit="m"
          min={0.5}
          step={0.1}
        />
        <CalculatorInput
          id="surfaceWidth"
          label={t("surfaceWidth")}
          value={surfaceWidth}
          onChange={setSurfaceWidth}
          unit="m"
          min={0.5}
          step={0.1}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CalculatorInput
          id="tileLength"
          label={t("tileLength")}
          value={tileLength}
          onChange={setTileLength}
          unit="cm"
          min={5}
          step={5}
        />
        <CalculatorInput
          id="tileWidth"
          label={t("tileWidth")}
          value={tileWidth}
          onChange={setTileWidth}
          unit="cm"
          min={5}
          step={5}
        />
      </div>
      <CalculatorInput
        id="tilesPerPack"
        label={t("tilesPerPack")}
        value={tilesPerPack}
        onChange={setTilesPerPack}
        min={1}
        step={1}
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

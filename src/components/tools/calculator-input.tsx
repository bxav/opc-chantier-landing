"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CalculatorInputProps {
  id: string
  label: string
  value: number | string
  onChange: (value: number) => void
  unit?: string
  min?: number
  max?: number
  step?: number
  placeholder?: string
}

export function CalculatorInput({
  id,
  label,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 0.1,
  placeholder,
}: CalculatorInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {unit && <span className="text-muted-foreground ml-1">({unit})</span>}
      </Label>
      <Input
        id={id}
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        className="h-11"
      />
    </div>
  )
}

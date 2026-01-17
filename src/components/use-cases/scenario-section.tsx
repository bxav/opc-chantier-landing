import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface ScenarioSectionProps {
  role: string
  color: string
  workflow: {
    time: string
    action: string
  }[]
  benefits: string[]
  quote: {
    text: string
    author: string
    company: string
  }
}

export function ScenarioSection({
  role,
  color,
  workflow,
  benefits,
  quote,
}: ScenarioSectionProps) {
  const sectionId = role.toLowerCase().replace(/\s+/g, "-")

  return (
    <section id={sectionId} className="py-16 border-t border-border/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Workflow */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color }}>
              Une journee type : {role}
            </h3>
            <div className="space-y-4">
              {workflow.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-16 shrink-0 text-sm font-medium text-white px-2 py-1 rounded text-center"
                    style={{ backgroundColor: color }}
                  >
                    {step.time}
                  </div>
                  <p className="text-muted-foreground">{step.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Quote */}
          <div className="space-y-8">
            <Card className="bg-card/50 border-0 shadow-none">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Benefices concrets</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ backgroundColor: color }}
                      >
                        {i + 1}
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundColor: color }}
              />
              <CardContent className="p-6 relative">
                <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color }} />
                <blockquote className="text-lg font-serif italic mb-4">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <div className="text-sm">
                  <span className="font-semibold">{quote.author}</span>
                  <span className="text-muted-foreground"> — {quote.company}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

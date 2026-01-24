import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "BrickNote - L'app iOS de pilotage de chantier"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fef3e2 0%, #fff7ed 50%, #fef3e2 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "#ea580c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
            boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)",
          }}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 32 32"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 10 L22 10 L27 15 L27 22 L5 22 Z"/>
            <path d="M22 10 L22 15 L27 15"/>
            <line x1="8" y1="16" x2="24" y2="16"/>
            <line x1="8" y1="19" x2="18" y2="19"/>
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          BrickNote
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "#64748b",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          L&apos;app iOS de pilotage de chantier
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
          }}
        >
          {["Notes vocales", "Photos annotees", "Assistant IA"].map((feature) => (
            <div
              key={feature}
              style={{
                padding: "12px 24px",
                background: "white",
                borderRadius: 100,
                fontSize: 20,
                color: "#ea580c",
                fontWeight: 500,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}

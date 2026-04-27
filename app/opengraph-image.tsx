import { ImageResponse } from "next/og";

export const alt =
  "Manuela Vlașin — 2 Antrenamente Gratuite pentru Abdomen și Fesieri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0f0e09 0%, #1a1812 55%, #2a2820 100%)",
          color: "#f7f3ea",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "#f7f3ea",
              color: "#0f0e09",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            VM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, color: "#f7f3ea" }}>
              Manuela Vlașin
            </span>
            <span
              style={{
                fontSize: 13,
                color: "rgba(247,243,234,0.6)",
                letterSpacing: 4,
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Personal Trainer · Calisthenics
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 14,
              color: "#d4b988",
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
            }}
          >
            2 Antrenamente Gratuite
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              lineHeight: 1.05,
              color: "#f7f3ea",
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            <span>Abdomen mai plat și&nbsp;</span>
            <span style={{ color: "#d4b988", fontStyle: "italic" }}>
              fesieri mai tonifiați
            </span>
            <span>&nbsp;în 20 minute.</span>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(247,243,234,0.72)",
              fontFamily: "system-ui, sans-serif",
              maxWidth: 900,
            }}
          >
            De acasă, fără echipament. Simple, eficiente, pentru femei care vor
            rezultate reale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "rgba(247,243,234,0.5)",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>Peste 5.409 femei înscrise</span>
          <span>manuelavlasin.ro</span>
        </div>
      </div>
    ),
    size,
  );
}

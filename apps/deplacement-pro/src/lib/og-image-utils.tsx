import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Colors from deplacement-pro design system
const THEME = {
  primary: "#2A5A6D",
  accent: "#A04E6D",
  siteName: "DeplacementPro.fr",
  domain: "deplacement-pro.fr",
  tagline: "Comparateur de solutions de deplacement professionnel",
};

export function generateGenericOgImage({
  title,
  subtitle,
  categoryLabel,
}: {
  title: string;
  subtitle?: string;
  categoryLabel: string;
}) {
  const displayTitle = title.length > 70 ? `${title.slice(0, 67)}...` : title;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#F9F9F9",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "6px",
          backgroundColor: THEME.primary,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "48px 60px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              color: THEME.primary,
            }}
          >
            {THEME.siteName.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              color: "#999",
              fontWeight: 500,
            }}
          >
            {categoryLabel}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.1,
            }}
          >
            {displayTitle}
          </div>
          {subtitle && (
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#555",
                lineHeight: 1.3,
              }}
            >
              {subtitle.length > 120
                ? `${subtitle.slice(0, 117)}...`
                : subtitle}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e5e7eb",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", fontSize: 16, color: "#888" }}>
            {THEME.domain}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              color: THEME.primary,
              fontWeight: 600,
            }}
          >
            Comparateur independant
          </div>
        </div>
      </div>
    </div>,
    { ...OG_SIZE },
  );
}

export function generateFallbackOgImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: THEME.primary,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 48,
        fontWeight: 700,
      }}
    >
      {THEME.siteName}
    </div>,
    { ...OG_SIZE },
  );
}

import { ImageResponse } from "next/og";

export const alt = "Gilgal Dental Clinics | Dental Care in Ikoyi, Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#013565",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Background texture rings */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#7dd3fc",
            }}
          />
          <span
            style={{
              color: "#7dd3fc",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Ikoyi · Lagos · Nigeria
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1
            style={{
              color: "#FDFEFF",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 780,
            }}
          >
            Gilgal Dental Clinics
          </h1>
          <p
            style={{
              color: "rgba(253,254,255,0.65)",
              fontSize: 24,
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Specialist restorative and family dental care in Ikoyi.
          </p>
        </div>

        {/* Bottom call to action */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 16,
          }}
        >
          <span style={{ color: "#FDFEFF", fontSize: 16, fontWeight: 500 }}>
            Book an Appointment
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>→</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0e09",
          color: "#d4b988",
          fontSize: 36,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          fontStyle: "italic",
          letterSpacing: -1,
          borderRadius: 12,
        }}
      >
        VM
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Social card for a case study, in the patch-series style: mail headers, then the subject. */
export function caseStudyOg(title: string, state: "LIVE" | "MERGED", host: string) {
  const green = "#16794a";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#ffffff",
          color: "#1a1d24",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 28, color: "#535a66" }}>
          <div style={{ display: "flex" }}>From: Shaswat Raj</div>
          <div style={{ display: "flex" }}>Subject: case study</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: green }}>[{state}]</div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#535a66", borderTop: "2px solid #d9dce3", paddingTop: 24 }}>
          <span>{host}</span>
          <span>playlikeboy.github.io</span>
        </div>
      </div>
    ),
    ogSize,
  );
}

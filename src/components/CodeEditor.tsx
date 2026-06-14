import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";

const lineNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const CodeEditor: React.FC<{
  lines?: { text: string; highlight?: boolean }[];
  cursor?: boolean;
  empty?: boolean;
  style?: React.CSSProperties;
}> = ({ lines, cursor = false, empty = false, style }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: 12,
        padding: "24px 0",
        fontFamily: FONTS.mono,
        fontSize: 22,
        lineHeight: 1.8,
        overflow: "hidden",
        border: "1px solid #333",
        width: 800,
        ...style,
      }}
    >
      {empty ? (
        <div style={{ padding: "0 24px", color: COLORS.grayDark }}>
          <span style={{ color: COLORS.grayDark }}> </span>
          <span
            style={{
              opacity: cursor && Math.floor(frame / 15) % 2 ? 1 : 0,
              color: COLORS.white,
              backgroundColor: COLORS.white,
              padding: "0 2px",
              marginLeft: 4,
            }}
          >
            {" "}
          </span>
        </div>
      ) : lines ? (
        lines.map((line, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              padding: "0 24px",
              backgroundColor: line.highlight ? "rgba(255,255,255,0.05)" : "transparent",
            }}
          >
            <span style={{ color: COLORS.grayDark, width: 40, textAlign: "right", marginRight: 20, userSelect: "none" }}>
              {lineNumbers[i] || ""}
            </span>
            <span style={{ color: COLORS.white, whiteSpace: "pre" }}>{line.text}</span>
          </div>
        ))
      ) : null}
    </div>
  );
};

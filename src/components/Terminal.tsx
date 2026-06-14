import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";
import { typewriter } from "../theme/animations";

export const Terminal: React.FC<{
  lines?: { text: string; isCommand?: boolean }[];
  typingCommand?: string;
  typingDelay?: number;
  style?: React.CSSProperties;
}> = ({ lines, typingCommand, typingDelay = 0, style }) => {
  const frame = useCurrentFrame();
  const typed = typingCommand ? typewriter(frame, typingCommand, 8, typingDelay) : "";

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        borderRadius: 12,
        border: "1px solid #333",
        overflow: "hidden",
        width: 700,
        fontFamily: FONTS.mono,
        fontSize: 20,
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 16px",
          backgroundColor: "#151515",
          borderBottom: "1px solid #222",
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ff5f57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#febc2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#28c840" }} />
        <span style={{ color: COLORS.grayDark, fontSize: 14, marginLeft: 12 }}>terminal</span>
      </div>
      <div style={{ padding: "16px 20px" }}>
        {lines
          ? lines.map((line, i) => (
              <div key={i} style={{ display: "flex", marginBottom: 4 }}>
                {line.isCommand && (
                  <span style={{ color: COLORS.accent, marginRight: 10 }}>$</span>
                )}
                <span style={{ color: line.isCommand ? COLORS.white : COLORS.grayLight }}>
                  {line.text}
                </span>
              </div>
            ))
          : null}
        {typingCommand && (
          <div style={{ display: "flex" }}>
            <span style={{ color: COLORS.accent, marginRight: 10 }}>$</span>
            <span style={{ color: COLORS.white }}>{typed}</span>
            <span
              style={{
                opacity: Math.floor(frame / 15) % 2 ? 1 : 0,
                color: COLORS.white,
              }}
            >
              ▊
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

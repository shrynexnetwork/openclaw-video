import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";
import { countUp, fadeIn, usePulse } from "../theme/animations";

export const GitHubStarCounter: React.FC<{
  target: number;
  label?: string;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ target, label = "stars", delay = 0, style }) => {
  const frame = useCurrentFrame();
  const count = countUp(frame, target, 60, delay);
  const opacity = fadeIn(frame, 15, delay);
  const pulse = usePulse(frame);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity,
        transform: `scale(${pulse})`,
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          backgroundColor: COLORS.cardBg,
          borderRadius: 12,
          padding: "16px 32px",
          border: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        <Img
          src={staticFile("assets/logos/github-mark.svg")}
          style={{ width: 36, height: 36 }}
        />
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: 56,
            fontWeight: 800,
            color: COLORS.white,
          }}
        >
          {count.toLocaleString()}
        </div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill={COLORS.warmGold}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      </div>
      {label && (
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 18,
            color: COLORS.grayLight,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

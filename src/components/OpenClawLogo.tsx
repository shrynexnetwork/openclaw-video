import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";
import { fadeIn, scaleIn } from "../theme/animations";

export const OpenClawLogo: React.FC<{
  size?: number;
  showText?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ size = 120, showText = true, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 20, delay);
  const s = scaleIn(frame, 30, delay, 0.7);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        opacity,
        transform: `scale(${s})`,
        ...style,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="55" stroke={COLORS.accent} strokeWidth="3" fill="none" />
        <path
          d="M60 20 C70 20 80 30 80 45 C80 55 75 62 70 65 L75 75 C78 80 82 82 85 80 L90 75 L95 82 L88 88 C82 94 72 94 65 85 L58 75"
          stroke={COLORS.accent}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60 20 C50 20 40 30 40 45 C40 55 45 62 50 65 L45 75 C42 80 38 82 35 80 L30 75 L25 82 L32 88 C38 94 48 94 55 85 L62 75"
          stroke={COLORS.accent}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="60" cy="48" r="6" fill={COLORS.accent} />
        <path
          d="M45 55 Q60 65 75 55"
          stroke={COLORS.accent}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && (
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: size * 0.4,
            fontWeight: 800,
            color: COLORS.accent,
            letterSpacing: 2,
          }}
        >
          OpenClaw
        </div>
      )}
    </div>
  );
};

import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";
import { fadeIn, scaleIn } from "../theme/animations";

export const QuoteCard: React.FC<{
  quote: string;
  attribution?: string;
  delay?: number;
  color?: string;
}> = ({ quote, attribution, delay = 0, color = COLORS.accent }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 20, delay);
  const s = scaleIn(frame, 25, delay, 0.92);

  return (
    <div
      style={{
        position: "absolute",
        left: 200,
        width: 1520,
        top: "50%",
        transform: `translateY(-50%) scale(${s})`,
        opacity,
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.cardBg,
          borderLeft: `4px solid ${color}`,
          borderRadius: 12,
          padding: "48px 56px",
          border: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 42,
            fontWeight: 400,
            color: COLORS.white,
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          "{quote}"
        </div>
        {attribution && (
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 22,
              fontWeight: 600,
              color: color,
              marginTop: 24,
            }}
          >
            — {attribution}
          </div>
        )}
      </div>
    </div>
  );
};

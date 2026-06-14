import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";
import { countUp, fadeIn } from "../theme/animations";

export const CountUpNumber: React.FC<{
  target: number;
  label?: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
  duration?: number;
  fontSize?: number;
  color?: string;
}> = ({ target, label, prefix = "", suffix = "", delay = 0, duration = 60, fontSize = 96, color = COLORS.accent }) => {
  const frame = useCurrentFrame();
  const count = countUp(frame, target, duration, delay);
  const opacity = fadeIn(frame, 15, delay);

  return (
    <div
      style={{
        position: "absolute",
        left: 160,
        width: 1600,
        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize,
          fontWeight: 800,
          color,
        }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      {label && (
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 32,
            color: COLORS.grayLight,
            marginTop: 12,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

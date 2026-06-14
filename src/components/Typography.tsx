import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";
import { fadeIn, scaleIn, typewriter as typewriterFn, shake } from "../theme/animations";

const baseStyle: React.CSSProperties = {
  fontFamily: FONTS.heading,
  color: COLORS.white,
  position: "absolute",
  left: 160,
  width: 1600,
  textAlign: "center",
};

export const FlashText: React.FC<{
  text: string;
  style?: React.CSSProperties;
  delay?: number;
  color?: string;
  fontSize?: number;
}> = ({ text, style, delay = 0, color, fontSize = 72 }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 20, delay);
  return (
    <div
      style={{
        ...baseStyle,
        fontSize,
        fontWeight: 800,
        color: color || COLORS.white,
        opacity,
        top: "50%",
        transform: "translateY(-50%)",
        ...style,
      }}
    >
      {text}
    </div>
  );
};

export const EmphasisWord: React.FC<{
  text: string;
  color?: string;
  fontSize?: number;
  delay?: number;
  shakeAmount?: number;
}> = ({ text, color = COLORS.red, fontSize = 120, delay = 0, shakeAmount }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 15, delay);
  const s = scaleIn(frame, 25, delay, 0.5);
  const sh = shakeAmount ? shake(frame, shakeAmount) : { x: 0, y: 0 };
  return (
    <div
      style={{
        ...baseStyle,
        fontSize,
        fontWeight: 900,
        color,
        opacity,
        top: "50%",
        transform: `translate(-50%, -50%) scale(${s})`,
        left: "50%",
        margin: 0,
        transformOrigin: "center center",
      }}
    >
      {text}
    </div>
  );
};

export const TypewriterText: React.FC<{
  text: string;
  style?: React.CSSProperties;
  delay?: number;
  charsPerSecond?: number;
  fontSize?: number;
}> = ({ text, style, delay = 0, charsPerSecond = 12, fontSize = 48 }) => {
  const frame = useCurrentFrame();
  const displayText = typewriterFn(frame, text, charsPerSecond, delay);
  return (
    <div
      style={{
        ...baseStyle,
        fontSize,
        fontWeight: 600,
        fontFamily: FONTS.mono,
        textAlign: "left",
        top: "50%",
        transform: "translateY(-50%)",
        ...style,
      }}
    >
      {displayText}
      <span style={{ opacity: Math.floor(frame / 15) % 2 ? 1 : 0, color: COLORS.accent }}>
        |
      </span>
    </div>
  );
};

export const KeyPhrase: React.FC<{
  text: string;
  subtext?: string;
  delay?: number;
  color?: string;
}> = ({ text, subtext, delay = 0, color = COLORS.accent }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 20, delay);
  const s = scaleIn(frame, 25, delay, 0.9);
  return (
    <div
      style={{
        position: "absolute",
        left: 160,
        width: 1600,
        top: "50%",
        transform: `translateY(-50%) scale(${s})`,
        textAlign: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: 80,
          fontWeight: 800,
          color: color,
        }}
      >
        {text}
      </div>
      {subtext && (
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 36,
            color: COLORS.grayLight,
            marginTop: 20,
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};

export const SectionTitle: React.FC<{
  text: string;
  subtext?: string;
  delay?: number;
}> = ({ text, subtext, delay = 0 }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 20, delay);
  return (
    <div
      style={{
        position: "absolute",
        left: 160,
        width: 1600,
        top: 80,
        textAlign: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: 28,
          fontWeight: 700,
          color: COLORS.grayDark,
          textTransform: "uppercase",
          letterSpacing: 4,
        }}
      >
        {text}
      </div>
      {subtext && (
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 18,
            color: COLORS.grayDark,
            marginTop: 8,
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};

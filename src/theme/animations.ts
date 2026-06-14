import { interpolate, Easing, spring, useVideoConfig } from "remotion";

export function fadeIn(
  frame: number,
  duration = 30,
  delay = 0,
  from = 0,
  to = 1
) {
  return interpolate(frame, [delay, delay + duration], [from, to], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export function fadeInAndOut(
  frame: number,
  totalFrames: number,
  fadeDuration = 15
) {
  const opacity = interpolate(
    frame,
    [0, fadeDuration, totalFrames - fadeDuration, totalFrames],
    [0, 1, 1, 0],
    {
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  return opacity;
}

export function slideIn(
  frame: number,
  direction: "left" | "right" | "up" | "down" = "up",
  duration = 30,
  delay = 0,
  distance = 60
) {
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x =
    direction === "left"
      ? interpolate(progress, [0, 1], [distance, 0])
      : direction === "right"
        ? interpolate(progress, [0, 1], [-distance, 0])
        : 0;
  const y =
    direction === "up"
      ? interpolate(progress, [0, 1], [distance, 0])
      : direction === "down"
        ? interpolate(progress, [0, 1], [-distance, 0])
        : 0;
  return { x, y, opacity: progress };
}

export function scaleIn(
  frame: number,
  duration = 30,
  delay = 0,
  from = 0.85
) {
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return interpolate(progress, [0, 1], [from, 1]);
}

export function typewriter(
  frame: number,
  text: string,
  charsPerSecond = 12,
  delay = 0
) {
  const charsPerFrame = charsPerSecond / 30;
  const visibleChars = Math.max(
    0,
    Math.floor((frame - delay) * charsPerFrame)
  );
  return text.slice(0, visibleChars);
}

export function shake(frame: number, intensity = 3) {
  const x = Math.sin(frame * 15.7) * intensity;
  const y = Math.cos(frame * 11.3) * intensity;
  return { x, y };
}

export function glitchText(frame: number) {
  const glitchFrame = Math.floor(frame / 3) % 4;
  if (glitchFrame === 1) return 3;
  if (glitchFrame === 2) return -2;
  return 0;
}

export function countUp(
  frame: number,
  target: number,
  duration = 60,
  delay = 0
) {
  const progress = interpolate(frame, [delay, delay + duration], [0, target], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return Math.floor(progress);
}

export function usePulse(frame: number, speed = 0.03) {
  return 1 + Math.sin(frame * speed * Math.PI * 2) * 0.05;
}

export function useSpringValue(frame: number, config?: { damping?: number; mass?: number }) {
  const { fps } = useVideoConfig();
  const s = spring({
    frame,
    fps,
    config: {
      damping: config?.damping ?? 12,
      mass: config?.mass ?? 0.5,
    },
  });
  return s;
}

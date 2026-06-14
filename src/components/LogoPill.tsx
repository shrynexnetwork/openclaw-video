import React from "react";
import { Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";

export const LogoPill: React.FC<{
  src: string;
  label?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ src, label, size = 48, style }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        backgroundColor: "rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "8px 16px",
        ...style,
      }}
    >
      <Img
        src={staticFile(src)}
        style={{ width: size, height: size, objectFit: "contain", borderRadius: 4 }}
      />
      {label && (
        <span style={{ color: COLORS.white, fontFamily: "Helvetica, sans-serif", fontSize: 16, fontWeight: 600 }}>
          {label}
        </span>
      )}
    </div>
  );
};

export const LogoGrid: React.FC<{
  items: { src: string; label?: string }[];
  columns?: number;
  style?: React.CSSProperties;
}> = ({ items, columns = 3, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {items.map((item, i) => (
        <LogoPill key={i} src={item.src} label={item.label} size={40} />
      ))}
    </div>
  );
};

import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";
import { fadeIn } from "../theme/animations";

interface FlowNode {
  label: string;
  x: number;
  y: number;
  color?: string;
}

interface FlowArrow {
  from: number;
  to: number;
}

export const FlowDiagram: React.FC<{
  nodes: FlowNode[];
  arrows: FlowArrow[];
  style?: React.CSSProperties;
}> = ({ nodes, arrows, style }) => {
  const frame = useCurrentFrame();

  return (
    <div style={{ position: "relative", width: 1400, height: 300, ...style }}>
      <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
        {arrows.map((arrow, i) => {
          const from = nodes[arrow.from];
          const to = nodes[arrow.to];
          const opacity = Math.min(1, (frame - i * 5) / 15);
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={COLORS.grayDark}
              strokeWidth={2}
              strokeDasharray="6 4"
              opacity={opacity}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
          );
        })}
        {arrows.map((arrow, i) => {
          const from = nodes[arrow.from];
          const to = nodes[arrow.to];
          const opacity = Math.min(1, (frame - i * 5) / 15);
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const ux = dx / len;
          const uy = dy / len;
          const arrowSize = 10;
          return (
            <polygon
              key={`arrow-${i}`}
              points={`${to.x},${to.y} ${to.x - ux * arrowSize - uy * arrowSize * 0.5},${to.y - uy * arrowSize + ux * arrowSize * 0.5} ${to.x - ux * arrowSize + uy * arrowSize * 0.5},${to.y - uy * arrowSize - ux * arrowSize * 0.5}`}
              fill={COLORS.gray}
              opacity={opacity}
            />
          );
        })}
      </svg>
      {nodes.map((node, i) => {
        const opacity = Math.min(1, (frame - i * 3) / 10);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: node.x - 100,
              top: node.y - 30,
              width: 200,
              height: 60,
              backgroundColor: node.color || COLORS.cardBg,
              border: `1px solid ${node.color || COLORS.cardBorder}`,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONTS.body,
              fontSize: 18,
              fontWeight: 600,
              color: COLORS.white,
              opacity,
            }}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
};

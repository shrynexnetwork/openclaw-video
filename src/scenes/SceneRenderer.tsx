import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { SceneTiming } from "../data/timeline";
import { COLORS } from "../theme/colors";
import Act1Hook from "./Act1Hook";
import Act2Origins from "./Act2Origins";
import Act3Burnout from "./Act3Burnout";
import Act4Spark from "./Act4Spark";
import Act5Idea from "./Act5Idea";
import Act6Agent from "./Act6Agent";
import Act7Breakthrough from "./Act7Breakthrough";
import Act8Architecture from "./Act8Architecture";
import Act9LLM from "./Act9LLM";
import Act10Names from "./Act10Names";
import Act11Security from "./Act11Security";
import Act12Moltbook from "./Act12Moltbook";
import Act13Bidding from "./Act13Bidding";
import Act14Vision from "./Act14Vision";
import Act15Conclusion from "./Act15Conclusion";

const SCENE_MAP: Record<string, React.FC<{ chunks: SceneTiming["chunks"] }>> = {
  Act1Hook,
  Act2Origins,
  Act3Burnout,
  Act4Spark,
  Act5Idea,
  Act6Agent,
  Act7Breakthrough,
  Act8Architecture,
  Act9LLM,
  Act10Names,
  Act11Security,
  Act12Moltbook,
  Act13Bidding,
  Act14Vision,
  Act15Conclusion,
};

export const SceneRenderer: React.FC<{ scene: SceneTiming }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const Component = SCENE_MAP[scene.group.sceneComponent];

  const activeChunk = scene.chunks.find((c) => {
    const relStart = c.startFrame - scene.startFrame;
    const relEnd = c.endFrame - scene.startFrame;
    return frame >= relStart && frame < relEnd;
  });

  const chunksToRender = activeChunk ? [activeChunk] : [];

  if (!Component) {
    return (
      <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
        <div
          style={{
            color: COLORS.red,
            fontFamily: "monospace",
            fontSize: 24,
            padding: 40,
          }}
        >
          Missing scene: {scene.group.id}
        </div>
      </AbsoluteFill>
    );
  }
  return <Component chunks={chunksToRender} />;
};

import React from "react";
import { AbsoluteFill, Audio, staticFile, Sequence } from "remotion";
import { buildTimeline } from "./data/timeline";
import { SceneRenderer } from "./scenes/SceneRenderer";

const timeline = buildTimeline();

export const Video: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0f0f0f" }}>
      {timeline.map((scene) => (
        <Sequence
          key={scene.group.id}
          from={scene.startFrame}
          durationInFrames={scene.durationFrames}
        >
          <>
            {scene.chunks.map((chunk) => (
              <Audio
                key={chunk.id}
                src={staticFile(`audio/${chunk.file}`)}
                startFrom={chunk.startFrame - scene.startFrame}
              />
            ))}
            <SceneRenderer scene={scene} />
          </>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

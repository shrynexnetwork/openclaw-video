import { AbsoluteFill, useVideoConfig, Audio, Sequence } from "remotion";
import timing from "../public/audio/timing.json";

export const Video: React.FC = () => {
  const { fps } = useVideoConfig();

  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f0f0f" }}>
      {timing.chunks.map((chunk) => {
        const startFrame = currentFrame;
        const durationFrames = Math.ceil(chunk.duration * fps);
        currentFrame += durationFrames;

        return (
          <Sequence
            key={chunk.id}
            from={startFrame}
            durationInFrames={durationFrames}
          >
            <Audio src={`/audio/${chunk.file}`} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

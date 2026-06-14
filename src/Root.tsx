import { Composition } from "remotion";
import { Video } from "./Video";

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  const totalFrames = Math.floor(1646 * FPS);

  return (
    <Composition
      id="Video"
      component={Video}
      durationInFrames={totalFrames}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};

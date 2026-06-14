import { Composition } from "remotion";
import { Video } from "./Video";
import { getTotalFrames } from "./data/timeline";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

export const RemotionRoot: React.FC = () => {
  const totalFrames = getTotalFrames();

  return (
    <Composition
      id="Video"
      component={Video}
      durationInFrames={totalFrames}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

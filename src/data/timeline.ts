import timing from "../../public/audio/timing.json";
import { SCENE_GROUPS, SceneGroup } from "./sceneGroups";

export interface ChunkTiming {
  id: string;
  file: string;
  duration: number;
  startFrame: number;
  endFrame: number;
}

export interface SceneTiming {
  group: SceneGroup;
  chunks: ChunkTiming[];
  startFrame: number;
  endFrame: number;
  durationFrames: number;
}

const FPS = 30;

const chunkMap = new Map<string, { file: string; duration: number }>();
for (const chunk of timing.chunks) {
  chunkMap.set(chunk.id, { file: chunk.file, duration: chunk.duration });
}

export function buildTimeline(): SceneTiming[] {
  const scenes: SceneTiming[] = [];
  let currentFrame = 0;

  for (const group of SCENE_GROUPS) {
    const chunks: ChunkTiming[] = [];
    let totalDuration = 0;

    for (const chunkId of group.chunkIds) {
      const info = chunkMap.get(chunkId);
      if (!info) continue;
      const startFrame = Math.floor(currentFrame + totalDuration * FPS);
      const durationFrames = Math.ceil(info.duration * FPS);
      chunks.push({
        id: chunkId,
        file: info.file,
        duration: info.duration,
        startFrame,
        endFrame: startFrame + durationFrames,
      });
      totalDuration += info.duration;
    }

    const durationFrames = Math.ceil(totalDuration * FPS);
    scenes.push({
      group,
      chunks,
      startFrame: currentFrame,
      endFrame: currentFrame + durationFrames,
      durationFrames,
    });
    currentFrame += durationFrames;
  }

  return scenes;
}

export function getTotalFrames(): number {
  const scenes = buildTimeline();
  const last = scenes[scenes.length - 1];
  return last ? last.endFrame : 0;
}

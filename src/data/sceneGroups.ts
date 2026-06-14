export interface SceneGroup {
  id: string;
  chunkIds: string[];
  sceneComponent: string;
}

export const SCENE_GROUPS: SceneGroup[] = [
  { id: "act1-hook", chunkIds: generateChunkRange(1, 20), sceneComponent: "Act1Hook" },
  { id: "act2-origins", chunkIds: generateChunkRange(21, 40), sceneComponent: "Act2Origins" },
  { id: "act3-burnout", chunkIds: generateChunkRange(41, 69), sceneComponent: "Act3Burnout" },
  { id: "act4-spark", chunkIds: generateChunkRange(70, 83), sceneComponent: "Act4Spark" },
  { id: "act5-idea", chunkIds: generateChunkRange(84, 93), sceneComponent: "Act5Idea" },
  { id: "act6-agent", chunkIds: generateChunkRange(94, 112), sceneComponent: "Act6Agent" },
  { id: "act7-breakthrough", chunkIds: generateChunkRange(113, 139), sceneComponent: "Act7Breakthrough" },
  { id: "act8-architecture", chunkIds: generateChunkRange(140, 158), sceneComponent: "Act8Architecture" },
  { id: "act9-llm", chunkIds: generateChunkRange(159, 189), sceneComponent: "Act9LLM" },
  { id: "act10-names", chunkIds: generateChunkRange(190, 224), sceneComponent: "Act10Names" },
  { id: "act11-security", chunkIds: generateChunkRange(225, 264), sceneComponent: "Act11Security" },
  { id: "act12-moltbook", chunkIds: generateChunkRange(265, 312), sceneComponent: "Act12Moltbook" },
  { id: "act13-bidding", chunkIds: generateChunkRange(313, 361), sceneComponent: "Act13Bidding" },
  { id: "act14-vision", chunkIds: generateChunkRange(362, 418), sceneComponent: "Act14Vision" },
  { id: "act15-conclusion", chunkIds: generateChunkRange(419, 439), sceneComponent: "Act15Conclusion" },
];

function generateChunkRange(start: number, end: number): string[] {
  const ids: string[] = [];
  for (let i = start; i <= end; i++) {
    ids.push(`s${String(i).padStart(3, "0")}`);
  }
  return ids;
}

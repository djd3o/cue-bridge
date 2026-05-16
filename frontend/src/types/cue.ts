export type NormalizedCue = {
  id: string;
  source: "rekordbox" | "serato";
  trackTitle: string;
  artist?: string;
  filePath?: string;
  cueIndex: number;
  cueName?: string;
  timeMs: number;
  color?: string;
  cueType: "hotcue" | "memory" | "loop";
};

export type Track = {
  trackTitle: string;
  artist: string;
  cues: NormalizedCue[];
};

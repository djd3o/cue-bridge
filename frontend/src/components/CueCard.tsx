import type { NormalizedCue } from "../types/cue";
import { formatCueTime } from "../utils/time";
type Props = {
  cue: NormalizedCue;
};

export default function CueCard({ cue }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "0.75rem",
        marginTop: "0.5rem",
      }}
    >
      <strong>{cue.cueName}</strong>
      <p>Time: {formatCueTime(cue.timeMs)}</p>
      <p>Type: {cue.cueType}</p>
      <p>Index: {cue.cueIndex}</p>
    </div>
  );
}

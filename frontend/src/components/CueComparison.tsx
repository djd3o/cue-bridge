import type { NormalizedCue } from "../types/cue";
import CueCard from "./CueCard";

type Props = {
  leftCue: NormalizedCue;
  rightCue?: NormalizedCue;
};

export default function CueComparison({ leftCue, rightCue }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginTop: "1rem",
        border: "1px solid #444",
        padding: "1rem",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3>Rekordbox</h3>
        <CueCard cue={leftCue} />
      </div>

      <div style={{ flex: 1 }}>
        <h3>Serato</h3>

        {rightCue ? <CueCard cue={rightCue} /> : <p>Missing cue</p>}
      </div>
    </div>
  );
}

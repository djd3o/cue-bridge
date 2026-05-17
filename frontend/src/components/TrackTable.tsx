import type { Track } from "../types/cue";
import CueCard from "./CueCard";

type Props = {
  tracks: Track[];
};

export default function TrackTable({ tracks }: Props) {
  return (
    <div>
      <h2>Parsed Tracks</h2>

      {tracks.map((track, index) => (
        <div
          key={`${track.trackTitle}-${index}`}
          style={{
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <h3>{track.trackTitle}</h3>

          <p>{track.artist}</p>

          <div style={{ marginTop: "1rem" }}>
            <p>Cues:</p>

            {track.cues.length > 0 ? (
              track.cues.map((cue, cueIndex) => (
                <CueCard key={cue.id || cueIndex} cue={cue} />
              ))
            ) : (
              <p>No cues found</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

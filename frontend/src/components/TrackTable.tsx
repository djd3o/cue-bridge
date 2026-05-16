import type { Track } from "../types/cue";

type Props = {
  tracks: Track[];
};

export default function TrackTable({ tracks }: Props) {
  return (
    <div>
      <h2>Parsed Tracks</h2>

      {tracks.map((track, index) => (
        <div key={`${track.trackTitle}-${index}`}>
          <h3>{track.trackTitle}</h3>
          <p>{track.artist}</p>
          <p>Cues: {track.cues.length}</p>
        </div>
      ))}
    </div>
  );
}

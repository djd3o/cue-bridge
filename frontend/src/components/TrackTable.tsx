import { useState } from "react";
import type { Track } from "../types/cue";

type Props = {
  tracks: Track[];
};

type SortBy = "title" | "artist" | "cueCount";

export default function TrackTable({ tracks }: Props) {
  const [sortBy, setSortBy] = useState<SortBy>("title");

  const sortedTracks = [...tracks].sort((a, b) => {
    if (sortBy === "title") return a.trackTitle.localeCompare(b.trackTitle);
    if (sortBy === "artist") return a.artist.localeCompare(b.artist);
    return b.cues.length - a.cues.length;
  });

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Parsed Tracks</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr 160px 80px",
          padding: "0.75rem 1rem",
          background: "#0f1014",
          color: "#aaa",
          fontWeight: "bold",
        }}
      >
        <div>Wave</div>

        <div onClick={() => setSortBy("title")} style={{ cursor: "pointer" }}>
          Track {sortBy === "title" ? "▲" : ""}
        </div>

        <div onClick={() => setSortBy("artist")} style={{ cursor: "pointer" }}>
          Artist {sortBy === "artist" ? "▲" : ""}
        </div>

        <div
          onClick={() => setSortBy("cueCount")}
          style={{ cursor: "pointer" }}
        >
          Cues {sortBy === "cueCount" ? "▲" : ""}
        </div>
      </div>

      {sortedTracks.map((track, index) => (
        <div
          key={`${track.trackTitle}-${index}`}
          style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr 160px 80px",
            alignItems: "center",
            gap: "1rem",
            padding: "0.75rem 1rem",
            borderBottom: "1px solid #2a2a2a",
            background: "#14151a",
          }}
        >
          <div style={{ color: "#888" }}>|||</div>

          <strong>{track.trackTitle}</strong>

          <div style={{ color: "#999", fontSize: "0.85rem" }}>
            {track.artist || "Unknown Artist"}
          </div>

          <div style={{ color: "#aaa" }}>{track.cues.length}</div>
        </div>
      ))}
    </div>
  );
}

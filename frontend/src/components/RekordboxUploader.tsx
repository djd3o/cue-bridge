import React, { useState } from "react";
import { uploadRekordboxXml } from "../services/rekordboxApi";
import type { Track } from "../types/cue";
import TrackTable from "./TrackTable";

export default function RekordboxUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const data = await uploadRekordboxXml(file);

      setTracks(data.tracks ?? []);
    } catch (error) {
      console.error("Failed to upload Rekordbox XML:", error);
      setTracks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>CueBridge</h1>

      <input
        type="file"
        accept=".xml"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      <button onClick={uploadFile} disabled={!file || loading}>
        {loading ? "Uploading..." : "Upload XML"}
      </button>

      {tracks.length > 0 && <TrackTable tracks={tracks} />}
    </div>
  );
}

import type { Track } from "../types/cue";

type UploadRekordboxResponse = {
  filename: string;
  tracksFound: number;
  tracks: Track[];
};

export async function uploadRekordboxXml(
  file: File
): Promise<UploadRekordboxResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:8000/upload/rekordbox", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Upload failed");
  }

  return data;
}

export function formatCueTime(timeMs: number): string {
  const minutes = Math.floor(timeMs / 60000);

  const seconds = Math.floor((timeMs % 60000) / 1000);

  const milliseconds = timeMs % 1000;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
}

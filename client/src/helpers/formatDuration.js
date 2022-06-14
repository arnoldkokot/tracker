export default function formatDuration(unix) {
  const minutes = Math.floor(unix / 60);
  const seconds = unix % 60;
  return `${minutes}m ${seconds}s`;
}

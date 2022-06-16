function formatCreation(unix) {
  const diff = Date.now() - unix;
  const days = Math.floor(diff / (1000 * 3600 * 24));
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

function formatDuration(unix) {
  const minutes = Math.floor(unix / 60);
  const seconds = unix % 60;
  return `${minutes}m ${seconds}s`;
}

export { formatCreation, formatDuration };

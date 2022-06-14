export default function formatCreation(unix) {
  const diff = Date.now() - unix;
  const days = Math.floor(diff / (1000 * 3600 * 24));
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

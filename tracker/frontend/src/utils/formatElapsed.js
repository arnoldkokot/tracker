export function formatElapsed(timestamp) {
  const hoursElapsed = ((Date.now() - timestamp) / (1000 * 60 * 60)).toFixed();
  if (hoursElapsed < 24) {
    return hoursElapsed <= 1 ? `1 hour ago` : `${hoursElapsed} hours ago`;
  } else {
    const daysElapsed = (hoursElapsed / 24).toFixed();
    return daysElapsed <= 1 ? `1 day ago` : `${daysElapsed} days ago`;
  }
}

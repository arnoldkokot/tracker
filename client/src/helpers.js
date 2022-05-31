const fetchData = async (name, region) => {
  const player = await fetch(`/api/player/${name}?region=${region}`).then(
    (res) => res.json()
  );

  const matchList = await fetch(`/api/list/${player.puuid}?page=1`).then(
    (res) => res.json()
  );

  const matches = await Promise.all(
    matchList.map((matchID) =>
      fetch(`/api/match/${matchID}`).then((res) => res.json())
    )
  );

  return { ...player, matchList, matches };
};

function formatDuration(unix) {
  const minutes = Math.floor(unix / 60);
  const seconds = unix % 60;
  return `${minutes}m ${seconds}s`;
}

function formatCreation(unix) {
  const diff = Date.now() - unix;
  const days = Math.floor(diff / (1000 * 3600 * 24));
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

export { fetchData, formatDuration, formatCreation };

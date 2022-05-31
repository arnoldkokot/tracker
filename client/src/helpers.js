import summoner from "./assets/summoner.json";
import queue from "./assets/queue.json";

const fetchPlayer = async (name, region) => {
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

function getSummoner(id) {
  return summoner[id]?.id;
}

function getQueue(id) {
  return queue.find((obj) => obj.queueId === id)?.description;
}
/*
countRecent outputs: 
[
  {name: "Player 1", count: 3},
  {name: "Player 2", count: 4},
] 
Alternative as object
.reduce(
  (counted, current) => ({
    ...counted,
    [current]: counted[current] + 1 || 1,
  }),{}
);
*/
function countRecent(matches) {
  return matches
    .map((match) => match.info.participants)
    .flat()
    .map((player) => player.summonerName)
    .reduce((counted, current) => {
      const found = counted.find((e) => e.name === current);
      if (found) found.count++;
      return found ? [...counted] : [...counted, { name: current, count: 1 }];
    }, [])
    .filter((e) => e.count > 1);
}

export {
  fetchPlayer,
  formatDuration,
  formatCreation,
  getSummoner,
  getQueue,
  countRecent,
};

export default async function fetchPlayer(name, region) {
  const player = await fetch(`/api/player/${name}?region=${region}`).then(
    (res) => res.json()
  );

  const matchList = await fetch(`/api/list/${player.puuid}?page=1`).then(
    (res) => res.json()
  );

  // .map fails here if summoner doesnt exist
  const matches = await Promise.all(
    matchList.map((matchID) =>
      fetch(`/api/match/${matchID}`).then((res) => res.json())
    )
  );

  return { ...player, matchList, matches };
}

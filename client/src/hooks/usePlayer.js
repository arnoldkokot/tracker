import { useEffect, useState } from "react";

async function fetchPlayer(name, region) {
  let player = await fetch(`/api/player/${name}?region=${region}`);
  player = await player.json();
  if (player?.status) throw player;

  let list = await fetch(`/api/list/${player.puuid}?page=1`);
  list = await list.json();
  if (list?.status) throw list;

  const matches = await Promise.all(
    list?.map((matchID) =>
      fetch(`/api/match/${matchID}`).then((res) => res.json())
    )
  );

  return { ...player, matches };
}

export default function usePlayer(name, region) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);
    fetchPlayer(name, region)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [name, region]);

  return { data, error };
}

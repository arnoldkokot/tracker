import { useEffect, useState } from "react";

async function api(url) {
  let response = await fetch(url);
  response = await response.json();
  if (response?.status) throw response;
  return response;
}

async function fetchPage(puuid, page) {
  let list = await api(`/api/list/${puuid}?page=${page}`);

  return await Promise.all(list?.map((id) => api(`/api/match/${id}`)));
}

async function fetchPlayer(name, region) {
  let player = await api(`/api/player/${name}?region=${region}`);

  const matches = await fetchPage(player.puuid, 0);

  return { ...player, matches, currentPage: 0 };
}

export default function usePlayer(name, region) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [extending, setExtending] = useState(false);

  const extend = () => {
    setExtending(true);
    fetchPage(data.puuid, data.currentPage + 1).then((newMatches) => {
      setData({
        ...data,
        matches: [...data.matches, ...newMatches],
        currentPage: data.currentPage + 1,
      });
      setExtending(false);
    });
  };

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

  return {
    player: data,
    error,
    extend,
    extending,
  };
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Header, Content, Footer, Loading, Center, Pane } from "../layouts";
import { fetchPlayer } from "../helpers";

export default function Player() {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(true);
  let { playerName, region } = useParams();

  useEffect(() => {
    setFetching(true);
    fetchPlayer(playerName, region)
      .then((data) => {
        setData(data);
        setFetching(false);
      })
      .catch((error) => console.log(error));
  }, [playerName, region]);

  if (fetching) return <Loading />;

  if (data.status !== undefined) <Center>{JSON.stringify(data.status)}</Center>;

  return (
    <>
      <Header {...data} region={region} />
      <Pane {...data} />
      <Content matches={data.matches} puuid={data.puuid} />
      <Footer />
    </>
  );
}

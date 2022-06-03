import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Header, Content, Footer, Loading, Center, Pane } from "../layouts";
import { fetchPlayer } from "../helpers";
import { Heading } from "@primer/react";

export default function Player() {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [failed, setFailed] = useState(false);
  let { playerName, region } = useParams();

  useEffect(() => {
    setFetching(true);
    fetchPlayer(playerName, region)
      .then((data) => {
        setData(data);
        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setFailed(true);
        setFetching(false);
      });
  }, [playerName, region]);

  if (fetching) return <Loading />;

  if (failed)
    return (
      <Center>
        <Heading sx={{ fontSize: 3, textAlign: "center" }}>
          Summoner does not exist
        </Heading>
      </Center>
    );

  return (
    <>
      <Header {...data} region={region} />
      <Pane {...data} />
      <Content matches={data.matches} puuid={data.puuid} />
      <Footer />
    </>
  );
}

import React from "react";
import { useParams } from "react-router-dom";

import { Loading, Center, Bar } from "../layouts";
import { PlayerContext, useFetch } from "../helpers";
import { Heading } from "@primer/react";

export default function Player() {
  let { playerName, region } = useParams();
  let { data: player, error } = useFetch(
    `/api/player/${playerName}?region=${region}`
  );

  if (error !== null)
    return (
      <Center>
        <Heading sx={{ fontSize: 3, textAlign: "center", mb: "5" }}>
          {JSON.stringify(error)}
        </Heading>
        <Bar />
      </Center>
    );

  if (player === null) return <Loading />;

  return (
    <PlayerContext.Provider value={player}>
      {/* <Bar />
      <Header />
      <Pane />
      <Content />
      <Footer /> */}
    </PlayerContext.Provider>
  );
}

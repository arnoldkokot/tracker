import React from "react";
import { useParams } from "react-router-dom";
import { Spinner, Box } from "@primer/react";

import { PlayerContext } from "../helpers";
import Error from "./Error";
import { Layout, Header, Content } from "../layouts";
import { usePlayer } from "../hooks";

export default function Player() {
  let { playerName, region } = useParams();
  let { data: player, error } = usePlayer(playerName, region);

  if (error !== null)
    return (
      <Error title={error?.status?.message} code={error?.status?.status_code} />
    );

  if (player === null)
    return (
      <Layout.Center>
        <Box width={64} margin="0 auto">
          <Spinner size="large" />
        </Box>
      </Layout.Center>
    );

  return (
    <PlayerContext.Provider value={player}>
      <Header />
      <Content />
      {/* <Pane />
      <Footer /> */}
    </PlayerContext.Provider>
  );
}

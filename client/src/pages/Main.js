import React from "react";
import { useParams } from "react-router-dom";
import { Spinner, Box, PageLayout } from "@primer/react";

import { PlayerContext } from "../helpers";
import Error from "./Error";
import { Player } from "../layouts";
import { usePlayer } from "../hooks";

export default function Main() {
  let { playerName, region } = useParams();
  let { player, error, extend, extending } = usePlayer(playerName, region);

  if (error !== null)
    return (
      <Error title={error?.status?.message} code={error?.status?.status_code} />
    );

  if (player === null)
    return (
      <PageLayout.Content
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box width={64} margin="0 auto">
          <Spinner size="large" />
        </Box>
      </PageLayout.Content>
    );

  return (
    <PlayerContext.Provider value={{ ...player, extend, extending }}>
      <Player />
    </PlayerContext.Provider>
  );
}

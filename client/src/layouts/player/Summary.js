import { Box } from "@primer/react";
import React, { useContext } from "react";

import { Container, Ratio } from "../../components";
import { PlayerContext, countRatio, countKda } from "../../helpers";

export default function Summary() {
  const { matches, puuid } = useContext(PlayerContext);
  const { kills, deaths, assists } = countKda(matches, puuid);

  return (
    <Container mb={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Container.Bold>Total KDA</Container.Bold>
          <Container.Bold>
            {kills} / {deaths} / {assists}
          </Container.Bold>
        </Box>
        <Ratio percentage={countRatio(matches, puuid)} />
      </Box>
    </Container>
  );
}

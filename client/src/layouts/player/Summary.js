import { Box } from "@primer/react";
import React, { useContext } from "react";

import { Container } from "../../components";
import { PlayerContext } from "../../helpers";

export default function Summary() {
  const { matches } = useContext(PlayerContext);
  return (
    <Container mb={2}>
      <Box display="flex" justifyContent="space-between">
        <Container.Bold>Match history</Container.Bold>
        <Container.Bold>{matches.length} games</Container.Bold>
      </Box>
    </Container>
  );
}

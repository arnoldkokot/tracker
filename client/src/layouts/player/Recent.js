import React, { useContext } from "react";
import { Box, Text } from "@primer/react";

import { Container } from "../../components";
import { countRecent, PlayerContext } from "../../helpers";

export default function Recent() {
  const { matches, name } = useContext(PlayerContext);
  return (
    <Container mb={2}>
      <Box display="flex" justifyContent="space-between">
        <Container.Bold>Recently played with</Container.Bold>
        <Container.Bold>{matches.length} games</Container.Bold>
      </Box>
      {countRecent(matches)
        .filter((e) => e.name !== name)
        .map(({ name, count }) => (
          <Box display="flex" justifyContent="space-between" mt={1} key={name}>
            <Text fontSize={1}>{name}</Text>
            <Text fontSize={1}>{count}</Text>
          </Box>
        ))}
    </Container>
  );
}

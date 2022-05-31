import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@primer/react";

import { Container } from "..";
import { countRecent } from "../../helpers";

Recent.propTypes = {
  matches: PropTypes.array,
  name: PropTypes.name,
};

export default function Recent({ matches, name }) {
  return (
    <Container mb={2}>
      <Box display="flex" justifyContent="space-between">
        <Text fontWeight="bold" fontSize={1}>
          Recently played with
        </Text>
        <Text fontWeight="bold" fontSize={1}>
          {matches.length} games
        </Text>
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

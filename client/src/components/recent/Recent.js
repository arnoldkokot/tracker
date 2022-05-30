import React from "react";
import { Box, Text } from "@primer/react";

import { Container } from "..";

export default function Recent() {
  return (
    <Container mb={2}>
      <Box display="flex" justifyContent="space-between">
        <Text fontWeight="bold" fontSize={1}>
          Recently played with
        </Text>
        <Text fontWeight="bold" fontSize={1}>
          20 games
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Text fontSize={1}>Kad1</Text>
        <Text fontSize={1}>4W 5L</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Text fontSize={1}>Toksyczna Wróżka </Text>
        <Text fontSize={1}>3W 1L</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Text fontSize={1}>TaKeoo0</Text>
        <Text fontSize={1}>2W 51</Text>
      </Box>
    </Container>
  );
}

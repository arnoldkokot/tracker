import React from "react";
import { Box, Text, Label } from "@primer/react";

export default function MatchPlayer() {
  return (
    <Box
      flexShrink={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text fontWeight="bold">10 / 0 / 10</Text>
      <Text fontSize={1} mb={1}>
        5.44:1 KDA
      </Text>
      <Label variant="success">Performance</Label>
    </Box>
  );
}

import React from "react";
import { Box, Text } from "@primer/react";

export default function MatchData() {
  return (
    <Box flexShrink={0} display="flex" flexDirection="column" ml={1}>
      <Text fontSize={1} fontWeight="bold">
        Ranked Solo
      </Text>
      <Text fontSize={1}>4 days ago</Text>
      <Text fontSize={1}>26m 51s</Text>
    </Box>
  );
}

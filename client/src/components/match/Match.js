import React from "react";
import { Box } from "@primer/react";

import MatchData from "./MatchData";
import MatchAvatar from "./MatchAvatar";
import MatchPlayer from "./MatchPlayer";
import MatchItems from "./MatchItems";
import MatchTeams from "./MatchTeams";

export default function Match() {
  return (
    <Box
      bg="canvas.subtle"
      borderRadius={6}
      borderLeft={6}
      borderLeftColor="open.muted" /*danger.muted*/
      borderLeftStyle="solid"
      p={2}
      mb={2}
      display="flex"
      alignItems="center"
      sx={{ gap: "4" }}
    >
      <MatchData />

      <MatchAvatar />

      <MatchPlayer />

      <MatchItems />

      <MatchTeams />
    </Box>
  );
}

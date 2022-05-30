import React from "react";
import { Box, Avatar } from "@primer/react";

import flashIcon from "../../assets/flash.webp";
import championAvatar from "../../assets/Zeri.webp";

export default function MatchAvatar() {
  return (
    <Box
      flexShrink={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ gap: "5px" }}
    >
      <Avatar src={championAvatar} size={45} />
      <Box display="flex" sx={{ gap: "5px" }}>
        <Avatar src={flashIcon} size={24} square />
        <Avatar src={flashIcon} size={24} square />
      </Box>
    </Box>
  );
}

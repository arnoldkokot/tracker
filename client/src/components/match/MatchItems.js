import React from "react";
import { Box, Avatar } from "@primer/react";

import championAvatar from "../../assets/Zeri.webp";

export default function MatchItems() {
  return (
    <Box
      flexShrink={0}
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridGap={1}
      sx={{ display: ["none", "grid"] }}
    >
      <Avatar src={championAvatar} size={32} square />
      <Avatar src={championAvatar} size={32} square />
      <Avatar src={championAvatar} size={32} square />
      <Avatar src={championAvatar} size={32} square />
      <Avatar src={championAvatar} size={32} square />
      <Avatar src={championAvatar} size={32} square />
    </Box>
  );
}

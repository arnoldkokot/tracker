import React from "react";
import { Box, Text, Avatar, Link } from "@primer/react";

import championAvatar from "../../assets/Zeri.webp";

export default function MatchTeams() {
  return (
    <Box
      ml="auto"
      sx={{
        gap: "20px",
        display: ["none", "none", "none", "flex"],
      }}
    >
      <Box display="flex" flexDirection="column" sx={{ gap: "5px" }}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ gap: "4px", fontSize: 1 }}
        >
          <Avatar src={championAvatar} square />
          <Link href="#">Ceco</Link>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" sx={{ gap: "5px" }}>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
        <Box display="flex" sx={{ gap: "4px" }}>
          <Avatar src={championAvatar} square />
          <Text fontSize={1}>Ceco</Text>
        </Box>
      </Box>
    </Box>
  );
}

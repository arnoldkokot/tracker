import React from "react";
import { Avatar, Box, Text } from "@primer/react";
import championAvatar from "../../assets/Zeri.webp";

export default function Match() {
  return (
    <Box
      bg="canvas.subtle"
      borderRadius={6}
      p={2}
      mb={2}
      display="flex"
      alignItems="center"
      sx={{ gap: "20px" }}
    >
      <Box display="flex" flexDirection="column">
        <Text fontSize={1} fontWeight="bold">
          Ranked Solo
        </Text>
        <Text fontSize={1}>4 days ago</Text>
        <Text fontSize={1}>26m 51s</Text>
      </Box>
      <Box display="flex" flexDirection="column">
        <Avatar src={championAvatar} size={45} />
      </Box>
      <Box display="flex" sx={{ gap: "20px" }} ml="auto">
        <Box display="flex" flexDirection="column">
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
        <Box display="flex" flexDirection="column">
          {" "}
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
    </Box>
  );
}

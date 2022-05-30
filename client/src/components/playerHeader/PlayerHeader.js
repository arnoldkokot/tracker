import React from "react";
import { Box, Avatar, Heading, Button } from "@primer/react";

import profileIcon from "../../assets/profileIcon.jpg";

export default function PlayerHeader() {
  return (
    <>
      <Avatar src={profileIcon} alt="Player profile icon" square size={100} />
      <Box display="flex" flexDirection="column" justifyContent="space-around">
        <Heading>Deithy</Heading>
        <Button>Refresh</Button>
      </Box>
    </>
  );
}

import React from "react";
import { Box, Avatar, Heading, Button } from "@primer/react";
import { Search } from "..";

import profileIcon from "../../assets/profileIcon.jpg";

export default function PlayerHeader() {
  return (
    <>
      <Avatar src={profileIcon} alt="Player profile icon" square size={100} />
      <Box display="flex" flexDirection="column" justifyContent="space-around">
        <Heading sx={{ marginBottom: "10px" }}>Deithy</Heading>
        <Button>Refresh</Button>
      </Box>
      <Box ml="auto">
        <Search />
      </Box>
    </>
  );
}

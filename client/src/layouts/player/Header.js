import React, { useContext } from "react";
import { Box, Avatar, Heading, Button, PageLayout, Label } from "@primer/react";

import config from "../../config.json";
import { PlayerContext } from "../../helpers";

export default function Header() {
  const { profileIconId, summonerLevel, region, name } =
    useContext(PlayerContext);
  return (
    <PageLayout.Header
      sx={{
        display: "flex",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <Avatar
        src={`${config.CDN}img/profileicon/${profileIconId}.png`}
        alt="Player profile icon"
        square
        size={100}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Box display="flex" alignItems="center" mb={2} sx={{ gap: "9px" }}>
          <Heading>{name}</Heading>
          <Label size="large" sx={{ display: ["none", "inline-flex"] }}>
            {summonerLevel} lvl
          </Label>
          <Label size="large" sx={{ display: ["none", "inline-flex"] }}>
            {region}
          </Label>
        </Box>
        <Button>Refresh</Button>
      </Box>
    </PageLayout.Header>
  );
}

import React, { useContext } from "react";
import { Box, Avatar, Heading, PageLayout, Label } from "@primer/react";

import config from "../../config.json";
import { PlayerContext } from "../../helpers";

export default function Header() {
  const { profileIconId, summonerLevel, region, name } =
    useContext(PlayerContext);
  return (
    <PageLayout.Header
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar
        src={`${config.CDN}img/profileicon/${profileIconId}.png`}
        alt="Player profile icon"
        square
        size={100}
      />
      <Box mr="auto" ml={4}>
        <Heading>{name}</Heading>
        <Box display="flex" sx={{ gap: "1", marginTop: "1" }}>
          <Label size="large" sx={{ display: ["none", "inline-flex"] }}>
            {summonerLevel} lvl
          </Label>
          <Label size="large" sx={{ display: ["none", "inline-flex"] }}>
            {region}
          </Label>
        </Box>
      </Box>
    </PageLayout.Header>
  );
}

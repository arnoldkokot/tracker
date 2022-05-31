import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Heading, Button, PageLayout, Label } from "@primer/react";

import config from "../config.json";

Header.propTypes = {
  name: PropTypes.string,
  profileIconId: PropTypes.number,
  summonerLevel: PropTypes.number,
};

export default function Header({ name, profileIconId, summonerLevel }) {
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
        <Box display="flex" alignItems="center" sx={{ gap: "9px" }}>
          <Heading sx={{ marginBottom: "10px" }}>{name}</Heading>
          <Label sx={{ display: ["none", "inline-flex"] }}>
            {summonerLevel} lvl
          </Label>
        </Box>
        <Button>Refresh</Button>
      </Box>
    </PageLayout.Header>
  );
}

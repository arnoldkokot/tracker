import React from "react";
import { Box, Avatar as ChampionAvatar } from "@primer/react";
import PropsTypes from "prop-types";

import config from "../../config.json";
import { getSummoner } from "../../helpers";

Avatar.propTypes = {
  championName: PropsTypes.string,
  summoner1Id: PropsTypes.number,
  summoner2Id: PropsTypes.number,
};

export default function Avatar({ championName, summoner1Id, summoner2Id }) {
  return (
    <Box
      flexShrink={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ gap: "5px" }}
    >
      <ChampionAvatar
        src={`${config.CDN}img/champion/${championName}.png`}
        size={45}
      />
      <Box display="flex" sx={{ gap: "5px" }}>
        <ChampionAvatar
          src={`${config.CDN}img/spell/${getSummoner(summoner1Id)}.png`}
          size={24}
          square
        />
        <ChampionAvatar
          src={`${config.CDN}img/spell/${getSummoner(summoner2Id)}.png`}
          size={24}
          square
        />
      </Box>
    </Box>
  );
}

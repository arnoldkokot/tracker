import React from "react";
import { Box, Avatar, Link, Truncate } from "@primer/react";
import PropTypes from "prop-types";
import { Link as RouterLink, useParams } from "react-router-dom";

import config from "../../config.json";

Participants.propTypes = {
  participants: PropTypes.array,
};

export default function Participants({ participants }) {
  const blueTeam = participants.filter((e) => e.teamId === 100);
  const redTeam = participants.filter((e) => e.teamId === 200);

  let { region } = useParams();

  return (
    <Box
      ml="auto"
      sx={{
        gap: "20px",
        display: ["none", "none", "none", "flex"],
      }}
    >
      <Box display="flex" flexDirection="column" sx={{ gap: "5px" }}>
        {blueTeam.map(({ summonerName, championName }) => (
          <Box
            display="flex"
            alignItems="center"
            sx={{ gap: "4px", fontSize: 1 }}
            key={summonerName}
          >
            <Avatar
              src={`${config.CDN}img/champion/${championName}.png`}
              square
            />
            <Link as={RouterLink} to={`/${region}/${summonerName}`}>
              <Truncate title={summonerName} sx={{ width: "80px" }}>
                {summonerName}
              </Truncate>
            </Link>
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" sx={{ gap: "5px" }}>
        {redTeam.map(({ summonerName, championName }) => (
          <Box
            display="flex"
            alignItems="center"
            sx={{ gap: "4px", fontSize: 1 }}
            key={summonerName}
          >
            <Avatar
              src={`${config.CDN}img/champion/${championName}.png`}
              square
            />
            <Link as={RouterLink} to={`/${region}/${summonerName}`}>
              <Truncate title={summonerName} sx={{ width: "80px" }}>
                {summonerName}
              </Truncate>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

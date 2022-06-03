import React from "react";
import { Container } from "..";
import { Box, Text } from "@primer/react";
import PropTypes from "prop-types";

import { formatDuration, formatCreation, getQueue } from "../../helpers";

import MatchAvatar from "./MatchAvatar";
import MatchPlayer from "./MatchPlayer";
import MatchItems from "./MatchItems";
import Participants from "./Participants";

Match.propTypes = {
  info: PropTypes.object,
  puuid: PropTypes.string,
};

export default function Match({ info, puuid }) {
  const player = info.participants.find(
    (participant) => participant.puuid === puuid
  );

  if (!player) {
    return (
      <Text>
        PUUIDs from match and ids requests dont match, database is probably
        polluted with games requested using different key
      </Text>
    );
  }

  const items = [...Array(6).keys()].map((key) => player[`item${key}`]);

  // Riot CDN does not respond to capital S only for this champ lol
  if (player.championName === "FiddleSticks")
    player.championName = "Fiddlesticks";
  info.participants.forEach((participant) => {
    if (participant.championName === "FiddleSticks")
      participant.championName = "Fiddlesticks";
  });

  return (
    <Container
      mb={2}
      borderLeft={6}
      borderLeftColor={player.win ? "open.muted" : "closed.muted"}
      borderLeftStyle="solid"
      display="flex"
      alignItems="center"
      sx={{ gap: "4" }}
    >
      <Box flexShrink={0} display="flex" flexDirection="column" ml={1}>
        <Text fontSize={1} fontWeight="bold">
          {getQueue(info.queueId)}
        </Text>
        <Text fontSize={1}>{formatCreation(info.gameCreation)}</Text>
        <Text fontSize={1}>{formatDuration(info.gameDuration)}</Text>
      </Box>

      <MatchAvatar {...player} />
      <MatchPlayer {...player} />
      <MatchItems items={items} />
      <Participants participants={info.participants} />
    </Container>
  );
}

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@primer/react";

import {
  PlayerContext,
  formatDuration,
  formatCreation,
  getQueue,
} from "../helpers";
import { Container } from "../components";
import { Avatar, Metadata, Items, Participants } from ".";

Match.propTypes = {
  info: PropTypes.object,
};

export default function Match({ info }) {
  const { puuid } = useContext(PlayerContext);

  const player = info.participants.find(
    (participant) => participant.puuid === puuid
  );
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
      <Avatar {...player} />
      <Metadata {...player} />
      <Items items={items} />
      <Participants participants={info.participants} />
    </Container>
  );
}

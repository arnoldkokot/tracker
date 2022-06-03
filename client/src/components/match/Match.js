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
  console.log(info, puuid);
  const player = info.participants.find(
    (participant) => participant.puuid === puuid
  );
  console.log("Found player: ", player);

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
      <MatchItems {...player} />
      <Participants participants={info.participants} />
    </Container>
  );
}

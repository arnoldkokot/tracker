import React, { useContext } from "react";
import { Box, Text, Avatar } from "@primer/react";
import PropTypes from "prop-types";
import { Container } from "../../components";
import { PlayerContext } from "../../helpers";

Rank.propTypes = {
  title: PropTypes.string,
  queueType: PropTypes.string,
};

export default function Rank({ title, queueType }) {
  const { entries } = useContext(PlayerContext);

  const entry = entries.find((entry) => entry.queueType === queueType);

  return (
    <Container mb={2}>
      <Box display="flex" justifyContent="space-between">
        <Text fontWeight="bold" fontSize={1}>
          {title}
        </Text>
        {!entry && (
          <Text fontWeight="bold" fontSize={1}>
            Unranked
          </Text>
        )}
      </Box>
      {entry && (
        <Box display="flex" alignItems="center">
          <Avatar src={`/img/${entry.tier}.webp`} size={72} />
          <Box>
            <Text as="p" fontWeight="bold" fontSize={3} m={0}>
              {entry.tier.charAt(0).toUpperCase() +
                entry.tier.slice(1).toLowerCase() +
                " "}
              {entry.rank}
            </Text>
            <Text as="p" fontSize={1} m={0}>
              {entry.leaguePoints} LP
            </Text>
          </Box>
        </Box>
      )}
    </Container>
  );
}

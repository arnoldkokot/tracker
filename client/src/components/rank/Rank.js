import React from "react";
import { Box, Text, Avatar } from "@primer/react";
import PropTypes from "prop-types";
import { Container } from "..";

Rank.propTypes = {
  title: PropTypes.string,
  tier: PropTypes.string,
  rank: PropTypes.string,
  leaguePoints: PropTypes.number,
};

export default function Rank({ title, tier, rank, leaguePoints }) {
  return (
    <Container mb={2}>
      <Box display="flex" justifyContent="space-between">
        <Text fontWeight="bold" fontSize={1}>
          {title}
        </Text>
        {!tier && (
          <Text fontWeight="bold" fontSize={1}>
            Unranked
          </Text>
        )}
      </Box>
      {tier && (
        <Box display="flex" alignItems="center">
          <Avatar src={`/img/${tier}.webp`} size={72} />
          <Box>
            <Text as="p" fontWeight="bold" fontSize={3} m={0}>
              {tier.charAt(0).toUpperCase() + tier.slice(1).toLowerCase() + " "}
              {rank}
            </Text>
            <Text as="p" fontSize={1} m={0}>
              {leaguePoints} LP
            </Text>
          </Box>
        </Box>
      )}
    </Container>
  );
}

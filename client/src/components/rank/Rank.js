import React from "react";
import { Box, Text, Avatar } from "@primer/react";
import PropTypes from "prop-types";
import { Container } from "..";

import platinum from "../../assets/platinum.webp";

Rank.propTypes = {
  unranked: PropTypes.bool,
};

export default function Rank({ unranked }) {
  if (unranked)
    return (
      <Container mb={2}>
        <Box display="flex" justifyContent="space-between">
          <Text fontWeight="bold" fontSize={1}>
            Ranked Flex
          </Text>
          <Text fontWeight="bold" fontSize={1}>
            Unranked
          </Text>
        </Box>
      </Container>
    );
  return (
    <Container mb={2}>
      <Text fontWeight="bold" fontSize={1}>
        Ranked Solo
      </Text>
      <Box display="flex" alignItems="center">
        <Avatar src={platinum} size={72} />
        <Box>
          <Text as="p" fontWeight="bold" fontSize={3} m={0}>
            Platinum 1
          </Text>
          <Text as="p" fontSize={1} m={0}>
            54 LP
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

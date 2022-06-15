import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Label } from "@primer/react";

Metadata.propTypes = {
  kills: PropTypes.number,
  deaths: PropTypes.number,
  assists: PropTypes.number,
};

export default function Metadata({ kills, deaths, assists }) {
  const kda = (kills + assists) / deaths;

  return (
    <Box
      flexShrink={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={86}
    >
      <Text fontWeight="bold">
        {kills} / {deaths} / {assists}
      </Text>
      <Text fontSize={1} mb={1}>
        {deaths === 0 ? "Perfect" : kda.toFixed(1) + " KDA"}
      </Text>
      {kda > 3 && <Label variant="success">Performance</Label>}
    </Box>
  );
}

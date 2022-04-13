import { Box, Heading, Text } from "@primer/react";
import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { url } = useParams();
  return (
    <Box
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>401</Heading>
      <Text>/{url}</Text>
    </Box>
  );
};

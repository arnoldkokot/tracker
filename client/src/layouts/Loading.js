import React from "react";
import { Box, Spinner } from "@primer/react";
import Center from "./Center";

export default function Loading() {
  return (
    <Center>
      <Box width={64} margin="auto">
        <Spinner size="large" />
      </Box>
    </Center>
  );
}

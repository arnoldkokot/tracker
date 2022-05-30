import React from "react";
import { Box } from "@primer/react";

export default function Container(props) {
  return <Box bg="canvas.subtle" borderRadius={6} p={2} {...props} />;
}

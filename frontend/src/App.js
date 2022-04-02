import React from "react";
import { Box } from "@primer/react";

import Navigation from "./components/Navigation";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Box bg="canvas.default" height="100vh">
      <Navigation />
      <Layout />
    </Box>
  );
}

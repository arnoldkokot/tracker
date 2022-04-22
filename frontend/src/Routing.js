import React from "react";
import { Box, Heading } from "@primer/react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import About from "./components/About";
import Player from "./components/Player";

export default () => {
  return (
    <Box bg="canvas.default" height="100vh">
      <Header />
      <Routes>
        <Route path="" element={<Search />} />
        <Route path="player/:summonerName" element={<Player />} />
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <Box
              height="80vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Heading>401 | Page missing</Heading>
            </Box>
          }
        />
      </Routes>
    </Box>
  );
};

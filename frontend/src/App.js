import React from "react";
import { Box } from "@primer/react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Summoner from "./components/profile/Summoner";
import Search from "./components/Search";
import Missing from "./components/Missing";
import About from "./components/About";

export default () => {
  return (
    <Box bg="canvas.default" height="100vh">
      <Navigation />
      <Routes>
        <Route path="summoner/:summonerName" element={<Summoner />} />
        <Route path="" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path=":url" element={<Missing />} />
      </Routes>
    </Box>
  );
};

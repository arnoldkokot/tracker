import React from "react";
import { Box } from "@primer/react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Summoner from "./Summoner";
import Search from "./Search";
import Missing from "./Missing";
import About from "./About";

export default function App() {
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
}

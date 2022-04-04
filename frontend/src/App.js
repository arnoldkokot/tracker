import React from "react";
import { Box } from "@primer/react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import Search from "./components/Search";

export default function App() {
  return (
    <Box bg="canvas.default" height="100vh">
      <Navigation />
      <Routes>
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </Box>
  );
}

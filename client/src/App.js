import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, PageLayout } from "@primer/react";
import { Footer, Navigation } from "./layouts";
import { Missing, Home, Player } from "./pages";

function App() {
  return (
    <Box minHeight="100vh" bg="canvas.default">
      <Navigation />

      <PageLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path=":region/:playerName" element={<Player />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </PageLayout>

      <Footer />
    </Box>
  );
}

export default App;

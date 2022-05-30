import React from "react";
import { ThemeProvider, BaseStyles, Box } from "@primer/react";
import { Header } from "./layouts";
import { Home, Player } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider colorMode="day">
      <BaseStyles>
        <Box minHeight="100vh" bg="canvas.default">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path=":region/:playerName" element={<Player />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { ThemeProvider, BaseStyles, Box } from "@primer/react";
import { Header } from "./layouts";
import { Player } from "./pages";

function App() {
  return (
    <ThemeProvider colorMode="day">
      <BaseStyles>
        <Box minHeight="100vh" bg="canvas.default">
          <Header />
          <Player />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;

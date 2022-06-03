import { PageLayout } from "@primer/react";
import React, { useState } from "react";
import { Navigation } from "./layouts";
import Routing from "./Routing";
import { ThemeProvider, BaseStyles, Box } from "@primer/react";

function App() {
  const [theme, setTheme] = useState("night");
  const toggleTheme = () => setTheme(theme === "day" ? "night" : "day");

  return (
    <ThemeProvider colorMode={theme}>
      <BaseStyles>
        <Box minHeight="100vh" bg="canvas.default">
          <Navigation toggleTheme={toggleTheme} theme={theme} />
          <PageLayout>
            <Routing />
          </PageLayout>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;

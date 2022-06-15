import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, BaseStyles, Box } from "@primer/react";

import App from "./App";
import { Navigation } from "./layouts";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider colorMode="auto">
        <BaseStyles>
          <Box backgroundColor="canvas.default">
            <Navigation />
            <App />
          </Box>
        </BaseStyles>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

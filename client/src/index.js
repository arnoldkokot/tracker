import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, BaseStyles, Box } from "@primer/react";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider colorMode="day">
        <BaseStyles>
          <Box minHeight="100vh" bg="canvas.default">
            <App />
          </Box>
        </BaseStyles>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

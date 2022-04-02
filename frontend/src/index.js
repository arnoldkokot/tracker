import React from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider, BaseStyles } from "@primer/react";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <ThemeProvider colorMode="day">
    <BaseStyles>
      <App />
    </BaseStyles>
  </ThemeProvider>
);

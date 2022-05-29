import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, BaseStyles } from "@primer/react";
import { CookiesProvider } from "react-cookie";

import App from "./Routing";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider colorMode="day">
    <BaseStyles>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </BaseStyles>
  </ThemeProvider>
);

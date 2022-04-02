import React from "react";
import { Button } from "@primer/react";
import { ThemeProvider, BaseStyles } from "@primer/react";

export default function App() {
  return (
    <ThemeProvider colorMode="day">
      <BaseStyles>
        <div className="App">
          Hello world
          <Button>Default</Button>
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

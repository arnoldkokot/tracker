import { PageLayout } from "@primer/react";
import React from "react";

import { Navigation } from "./layouts";
import Routing from "./Routing";

function App() {
  return (
    <>
      <Navigation />
      <PageLayout>
        <Routing />
      </PageLayout>
    </>
  );
}

export default App;

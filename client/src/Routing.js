import React from "react";
import { NotFound, Home, Player } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Bar } from "./layouts";

function Routing() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path=":region/:playerName"
        element={
          <>
            <Bar />
            <Player />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <Bar />
            <NotFound />
          </>
        }
      />
    </Routes>
  );
}

export default Routing;

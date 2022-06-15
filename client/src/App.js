import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { PageLayout } from "@primer/react";
import { Footer } from "./layouts";
import { Error, Home, PlayerPage } from "./pages";
import { Search } from "./components";

function App() {
  return (
    <PageLayout sx={{ minHeight: "calc(100vh - 56px)" }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Wrapper />}>
          <Route path=":region/:playerName" element={<PlayerPage />} />
          <Route path="*" element={<Error title="Page missing" code={404} />} />
        </Route>
      </Routes>
      <PageLayout.Footer>
        <Footer />
      </PageLayout.Footer>
    </PageLayout>
  );
}

function Wrapper() {
  return (
    <>
      <PageLayout.Header>
        <Search />
      </PageLayout.Header>
      <Outlet />
    </>
  );
}

export default App;

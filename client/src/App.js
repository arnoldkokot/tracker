import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { PageLayout, Link } from "@primer/react";
import { Error, Home, Main } from "./pages";
import { Search } from "./components";

function App() {
  return (
    <PageLayout sx={{ minHeight: "calc(100vh - 56px)" }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Wrapper />}>
          <Route path=":region/:playerName" element={<Main />} />
          <Route path="*" element={<Error title="Page missing" code={404} />} />
        </Route>
      </Routes>
      <PageLayout.Footer sx={{ fontFamily: "mono", paddingTop: "5" }}>
        <Link href="https://arnoldkokot.com" target="_blank">
          Created by Arnold Kokot
        </Link>
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

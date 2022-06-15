import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { PageLayout } from "@primer/react";
import { Error, Home, Main } from "./pages";
import { Search } from "./components";
import About from "./pages/About";

function App() {
  return (
    <PageLayout sx={{ minHeight: "calc(100vh - 56px)" }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Wrapper />}>
          <Route path=":region/:playerName" element={<Main />} />
          <Route path="*" element={<Error title="Page missing" code={404} />} />
        </Route>
      </Routes>
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

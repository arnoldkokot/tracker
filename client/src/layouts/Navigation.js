import React from "react";
import { Header, useTheme } from "@primer/react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const { setColorMode, resolvedColorMode: currentTheme } = useTheme();

  return (
    <Header>
      <Header.Item full>
        <Header.Link as={Link} to="/">
          Home page
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link
          onClick={() => setColorMode(currentTheme === "day" ? "night" : "day")}
        >
          {currentTheme === "day" ? (
            <MoonIcon size={24} />
          ) : (
            <SunIcon size={24} />
          )}
        </Header.Link>
      </Header.Item>
    </Header>
  );
}

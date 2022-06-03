import React from "react";
import { Header } from "@primer/react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Navigation.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default function Navigation({ toggleTheme, theme }) {
  return (
    <Header>
      <Header.Item full>
        <Header.Link as={Link} to="/">
          Home page
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link onClick={toggleTheme}>
          {theme === "day" ? <MoonIcon size={24} /> : <SunIcon size={24} />}
        </Header.Link>
      </Header.Item>
    </Header>
  );
}

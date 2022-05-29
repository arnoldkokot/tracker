import React from "react";
import { Header } from "@primer/react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Header>
      <Header.Item>
        <Header.Link as={Link} to="/">
          Search player
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link as={Link} to="/about">
          About
        </Header.Link>
      </Header.Item>
    </Header>
  );
};

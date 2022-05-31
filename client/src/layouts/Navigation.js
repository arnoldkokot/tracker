import React from "react";
import { Header } from "@primer/react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Header>
      <Header.Item>
        <Header.Link as={Link} to="/">
          Home page
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link as={Link} to="/euw/Shibumi">
          Shibumi
        </Header.Link>
      </Header.Item>
    </Header>
  );
}

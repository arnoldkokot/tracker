import React from "react";
import { Header } from "@primer/react";

export default function Navigation() {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="#">Search player</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">About</Header.Link>
      </Header.Item>
    </Header>
  );
}

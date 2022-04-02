import React from "react";
import { Header } from "@primer/react";

export default function Navigation() {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="#">Header text</Header.Link>
      </Header.Item>
    </Header>
  );
}

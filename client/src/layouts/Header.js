import React from "react";
import { Header } from "@primer/react";

export default function Component() {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="#">About</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">Releases</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">Team</Header.Link>
      </Header.Item>
    </Header>
  );
}

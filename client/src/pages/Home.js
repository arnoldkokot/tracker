import React from "react";
import { Heading, PageLayout } from "@primer/react";
import { Search } from "../components";

export default function Home() {
  return (
    <PageLayout.Content
      width="medium"
      sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
    >
      <Heading
        sx={{
          fontFamily: "mono",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        League tracker
      </Heading>
      <Search focus example />
    </PageLayout.Content>
  );
}

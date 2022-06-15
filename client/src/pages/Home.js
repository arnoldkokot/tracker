import React from "react";
import { Heading, PageLayout, Box } from "@primer/react";
import { Search } from "../components";
import { GraphIcon } from "@primer/octicons-react";

export default function Home() {
  return (
    <PageLayout.Content
      width="medium"
      sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
    >
      <Box width={80} margin="0 auto">
        <GraphIcon size={80} />
      </Box>
      <Heading
        sx={{
          fontFamily: "mono",
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "3",
        }}
      >
        League tracker
      </Heading>
      <Search focus example />
    </PageLayout.Content>
  );
}

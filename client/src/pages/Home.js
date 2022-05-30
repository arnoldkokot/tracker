import React from "react";
import { Box, Heading, PageLayout } from "@primer/react";
import { Search } from "../components";

export default function Home() {
  return (
    <PageLayout>
      <PageLayout.Content
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box m="auto" width="100%" maxWidth={500}>
          <Heading
            sx={{
              fontFamily: "mono",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            League tracker
          </Heading>
          <Search focus />
        </Box>
      </PageLayout.Content>
    </PageLayout>
  );
}

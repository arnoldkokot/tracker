import React from "react";
import { Box, PageLayout } from "@primer/react";
import { Search } from "../../components";

export default function Bar() {
  return (
    <PageLayout.Header>
      <Box ml="auto" alignSelf="flex-end">
        <Search />
      </Box>
    </PageLayout.Header>
  );
}

import React from "react";
import { PageLayout, Box, Heading } from "@primer/react";

export default function Layout() {
  return (
    <PageLayout>
      <PageLayout.Header divider="line">
        <Heading>James Delos</Heading>
      </PageLayout.Header>
      <PageLayout.Content>
        <Box height={240}>Content</Box>
      </PageLayout.Content>
      <PageLayout.Pane divider="line">
        <Box height={120}>Pane</Box>
      </PageLayout.Pane>
      <PageLayout.Footer divider="line">
        <Box height={64}>Footer</Box>
      </PageLayout.Footer>
    </PageLayout>
  );
}

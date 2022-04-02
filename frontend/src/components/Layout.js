import React from "react";
import { PageLayout, Box } from "@primer/react";

export default function Layout() {
  return (
    <PageLayout>
      <PageLayout.Header divider="line">
        {/*bg="canvas.subtle"*/}
        <Box height={64}>Header</Box>
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

import React from "react";
import { PageLayout, Box, Heading, ActionList } from "@primer/react";

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
        <ActionList showDividers>
          <ActionList.Group title="Recently played with">
            <ActionList.Item>Deithy</ActionList.Item>
            <ActionList.Item>Wicked Game</ActionList.Item>
            <ActionList.Item>Shibumi</ActionList.Item>
          </ActionList.Group>
        </ActionList>
      </PageLayout.Pane>
      <PageLayout.Footer divider="line">
        <Box height={64}>Footer</Box>
      </PageLayout.Footer>
    </PageLayout>
  );
}

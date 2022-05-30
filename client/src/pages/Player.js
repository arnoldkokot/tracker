import React from "react";
import { PageLayout } from "@primer/react";

import { Rank, Recent, Match, PlayerHeader } from "../components";

export default function Player() {
  return (
    <PageLayout>
      <PageLayout.Header sx={{ display: "flex", gap: "24px" }}>
        <PlayerHeader />
      </PageLayout.Header>
      <PageLayout.Pane position="start">
        <Rank />
        <Rank unranked />
        <Recent />
      </PageLayout.Pane>
      <PageLayout.Content>
        <Match />
        <Match />
        <Match />
        <Match />
      </PageLayout.Content>
    </PageLayout>
  );
}

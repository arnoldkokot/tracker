import React from "react";
import { PageLayout } from "@primer/react";

import { Header, Recent, Rank, History, Summary } from "../layouts";

export default function Player() {
  return (
    <>
      <Header />

      <PageLayout.Content>
        <History />
      </PageLayout.Content>

      <PageLayout.Pane position="start">
        <Summary />
        <Rank title="Ranked Solo" queueType="RANKED_SOLO_5x5" />
        <Rank title="Ranked Flex" queueType="RANKED_FLEX" />
        <Recent />
      </PageLayout.Pane>
    </>
  );
}

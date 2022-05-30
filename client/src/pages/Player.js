import React, { useEffect } from "react";
import { PageLayout } from "@primer/react";

import { Rank, Recent, Match, PlayerHeader } from "../components";
import { useParams } from "react-router-dom";

export default function Player() {
  let params = useParams();

  useEffect(() => {
    console.log("Player effect");
  }, [params]);

  return (
    <PageLayout>
      <PageLayout.Header
        sx={{ display: "flex", gap: "24px", alignItems: "center" }}
      >
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
      <PageLayout.Footer>
        {params.playerName} @ {params.region}
      </PageLayout.Footer>
    </PageLayout>
  );
}

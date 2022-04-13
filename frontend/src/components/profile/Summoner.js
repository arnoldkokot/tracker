import React from "react";
import { PageLayout, Box, Heading } from "@primer/react";
import Game from "./Game";
import { useParams } from "react-router-dom";
import Pane from "./Pane";

export default () => {
  const { summonerName } = useParams();

  return (
    <PageLayout>
      <PageLayout.Header divider="line">
        <Heading>{summonerName}</Heading>
      </PageLayout.Header>
      <PageLayout.Content>
        <Game />
        <Game />
        <Game />
        <Game />
      </PageLayout.Content>
      <PageLayout.Pane>
        <Pane />
      </PageLayout.Pane>
      <PageLayout.Footer divider="line">
        <Box height={64}>Footer</Box>
      </PageLayout.Footer>
    </PageLayout>
  );
};

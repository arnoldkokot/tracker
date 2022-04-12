import React from "react";
import { PageLayout, Box, Heading, ActionList } from "@primer/react";
import Game from "./components/Game";
import { Link, useParams } from "react-router-dom";

export default function Summoner(props) {
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
      <PageLayout.Pane divider="line">
        <ActionList showDividers>
          <ActionList.Group title="Recently played with">
            <Link to="/summoner/Deithy">
              <ActionList.Item>Deithy</ActionList.Item>
            </Link>
            <Link to="/summoner/Wicked Game">
              <ActionList.Item>Wicked Game</ActionList.Item>
            </Link>
            <Link to="/summoner/Shibumi">
              <ActionList.Item>Shibumi</ActionList.Item>
            </Link>
          </ActionList.Group>
        </ActionList>
      </PageLayout.Pane>
      <PageLayout.Footer divider="line">
        <Box height={64}>Footer</Box>
      </PageLayout.Footer>
    </PageLayout>
  );
}

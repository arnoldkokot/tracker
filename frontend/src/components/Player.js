import React, { useEffect, useState } from "react";
import { PageLayout, Box, Heading, Text, Spinner } from "@primer/react";
import { useParams } from "react-router-dom";
import Game from "./profile/Game";
import Pane from "./profile/Pane";

export default () => {
  const { summonerName } = useParams();
  const [player, setPlayer] = useState();

  useEffect(() => {
    console.log("Calling API");
    fetch(`/api/player/${summonerName}`)
      .then((data) => data.json())
      .then((data) => setPlayer(data));
  }, [summonerName]);

  return (
    <PageLayout>
      <PageLayout.Header divider="line">
        <Heading>{summonerName}</Heading>
      </PageLayout.Header>
      <PageLayout.Content>
        {/* <Game /> */}
        {player ? <Text>Ready</Text> : <Spinner />}
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

import React, { useEffect, useState } from "react";
import { PageLayout, Box, Heading, Spinner } from "@primer/react";
import { useParams } from "react-router-dom";
import Content from "./player/Content";

export default () => {
  const { summonerName } = useParams();
  const [player, setPlayer] = useState();

  useEffect(() => {
    fetch(`/api/player/${summonerName}`)
      .then((data) => data.json())
      .then((data) => setPlayer(data));
  }, [summonerName]);

  return (
    <PageLayout>
      <PageLayout.Header divider="line">
        <Heading>{summonerName}</Heading>
      </PageLayout.Header>
      {player ? (
        <Content {...player} />
      ) : (
        <PageLayout.Content>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="60vh"
          >
            <Spinner />
          </Box>
        </PageLayout.Content>
      )}
      <PageLayout.Footer divider="line">
        <Box height={64}>Footer</Box>
      </PageLayout.Footer>
    </PageLayout>
  );
};

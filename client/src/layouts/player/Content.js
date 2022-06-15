import React, { useContext } from "react";
import { PageLayout } from "@primer/react";

import { Match } from "../../components";
import { PlayerContext } from "../../helpers";

export default function Content() {
  const { matches, puuid } = useContext(PlayerContext);

  return (
    <PageLayout.Content>
      {matches.map((match) => (
        <Match key={match._id} puuid={puuid} {...match} />
      ))}
    </PageLayout.Content>
  );
}

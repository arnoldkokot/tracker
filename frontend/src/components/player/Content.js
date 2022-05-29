import React from "react";
import { PageLayout } from "@primer/react";
import Pane from "./Pane";
import Game from "./Game";

export default (props) => {
  const { matches } = props;
  return (
    <>
      <PageLayout.Content>
        {matches.map((match) => (
          <Game key={match} id={match} />
        ))}
      </PageLayout.Content>
      <PageLayout.Pane>
        <Pane />
      </PageLayout.Pane>
    </>
  );
};

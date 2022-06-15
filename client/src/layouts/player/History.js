import React, { useContext } from "react";
import { Button } from "@primer/react";

import { Container } from "../../components";
import { Match } from "../";
import { PlayerContext } from "../../helpers";

export default function Header() {
  const { matches } = useContext(PlayerContext);
  return (
    <>
      {matches.map((match) => (
        <Match key={match._id} info={match.info} />
      ))}
      <Container>
        <Button variant="invisible" sx={{ width: "100%" }}>
          Load more
        </Button>
      </Container>
    </>
  );
}

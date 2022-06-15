import React, { useContext } from "react";
import { Button } from "@primer/react";

import { Match } from "../";
import { PlayerContext } from "../../helpers";

export default function History() {
  const { matches, extend } = useContext(PlayerContext);

  return (
    <>
      {matches.map((match) => (
        <Match key={match._id} info={match.info} />
      ))}

      <Button variant="invisible" sx={{ width: "100%" }} onClick={extend}>
        Load more
      </Button>
    </>
  );
}

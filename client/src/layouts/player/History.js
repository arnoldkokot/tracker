import React, { useContext } from "react";
import { Box, Button, Spinner } from "@primer/react";

import { Match } from "../";
import { PlayerContext } from "../../helpers";

export default function History() {
  const { matches, extend, extending } = useContext(PlayerContext);

  return (
    <>
      {matches.map((match) => (
        <Match key={match._id} info={match.info} />
      ))}

      <Box display="flex" justifyContent="center" alignItems="center">
        {extending && <Spinner size="small" />}
        <Button variant="invisible" onClick={extend}>
          Load more
        </Button>
      </Box>
    </>
  );
}

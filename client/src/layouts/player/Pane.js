import React from "react";
import { PageLayout } from "@primer/react";
import PropTypes from "prop-types";

import { Rank, Recent } from "../../components";

Pane.propTypes = {
  entries: PropTypes.array,
  matches: PropTypes.array,
  name: PropTypes.string,
};

export default function Pane({ entries, matches, name }) {
  const solo = entries.find((entry) => entry.queueType === "RANKED_SOLO_5x5");
  const duo = entries.find((entry) => entry.queueType === "RANKED_FLEX");

  return (
    <PageLayout.Pane position="start">
      <Rank {...solo} title="Ranked Solo" />
      <Rank {...duo} title="Ranked Flex" />
      <Recent matches={matches} name={name} />
    </PageLayout.Pane>
  );
}

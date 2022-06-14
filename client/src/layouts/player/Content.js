import React from "react";
import { PageLayout } from "@primer/react";
import PropTypes from "prop-types";

import { Match } from "../../components";

Content.propTypes = {
  matches: PropTypes.array,
  puuid: PropTypes.string,
};

export default function Content({ matches, puuid }) {
  return (
    <PageLayout.Content>
      {matches.map((match) => (
        <Match key={match._id} puuid={puuid} {...match} />
      ))}
    </PageLayout.Content>
  );
}

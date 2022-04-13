import React from "react";
import { BookmarkIcon, SyncIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import { ActionList } from "@primer/react";

export default () => {
  const playedWith = ["Deithy", "Wicked Game", "Shibumi"];

  return (
    <ActionList>
      <ActionList.Group>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <SyncIcon />
          </ActionList.LeadingVisual>
          Refresh
        </ActionList.Item>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <BookmarkIcon />
          </ActionList.LeadingVisual>
          Bookmark
        </ActionList.Item>
      </ActionList.Group>

      <ActionList.Group title="Recently played with">
        {playedWith.map((player) => (
          <Link to={`/summoner/${player}`}>
            <ActionList.Item>{player}</ActionList.Item>
          </Link>
        ))}
      </ActionList.Group>
    </ActionList>
  );
};

import React, { useState } from "react";
import {
  FilteredSearch,
  ActionMenu,
  ActionList,
  TextInput,
} from "@primer/react";
import { SearchIcon } from "@primer/octicons-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const REGIONS = ["EUW", "EUNE"];

Search.propTypes = {
  focus: PropTypes.bool,
  example: PropTypes.bool,
};

Search.defaultProps = {
  focus: false,
  example: false,
};

export default function Search({ focus, example }) {
  const [region, setRegion] = useState(REGIONS[0]);
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/" + region.toLowerCase() + "/" + input);
    setInput("");
  };

  return (
    <FilteredSearch>
      <ActionMenu>
        <ActionMenu.Button as="summary" sx={{ width: "100px" }}>
          {region}
        </ActionMenu.Button>
        <ActionMenu.Overlay>
          <ActionList direction="sw" selectionVariant="single">
            {REGIONS.map((e) => (
              <ActionList.Item
                selected={e === region}
                onSelect={() => setRegion(e)}
                key={e}
              >
                {e}
              </ActionList.Item>
            ))}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextInput
          aria-label="Player name"
          name="playerName"
          placeholder={example ? "Player name (eg. 'Deith')" : "Player name"}
          autoComplete="off"
          autoFocus={focus}
          block
          value={input}
          onChange={(e) => setInput(e.target.value)}
          trailingAction={
            <TextInput.Action
              onClick={handleSubmit}
              icon={SearchIcon}
              aria-label="Search player"
              sx={{ color: "fg.subtle" }}
            />
          }
        />
      </form>
    </FilteredSearch>
  );
}

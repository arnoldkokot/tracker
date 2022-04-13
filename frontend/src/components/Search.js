import React, { useState } from "react";
import { TextInput, Box, LabelGroup, Label } from "@primer/react";
import { SearchIcon } from "@primer/octicons-react";
import { Link, useNavigate } from "react-router-dom";

export default () => {
  let navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("summoner/" + input);
  };

  return (
    <Box
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={20}
      margin="0 auto"
      maxWidth="700px"
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          block
          aria-label="Summoner name"
          name="summonerName"
          placeholder="Search summoner"
          autoComplete="off"
          autoFocus
          trailingVisual={SearchIcon}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <LabelGroup sx={{ marginTop: "7px" }}>
        <Label as={Link} to="summoner/James Delos" size="large">
          James Delos
        </Label>
        <Label as={Link} to="summoner/James Delos" size="large">
          Deithy
        </Label>
        <Label as={Link} to="summoner/James Delos" size="large">
          Shibumi
        </Label>
      </LabelGroup>
    </Box>
  );
};

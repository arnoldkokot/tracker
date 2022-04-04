import React from "react";
import { TextInput, Box, LabelGroup, Label } from "@primer/react";
import { SearchIcon } from "@primer/octicons-react";

export default function Search() {
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
      <TextInput
        block
        aria-label="Summoner name"
        name="summonerName"
        placeholder="Search summoner"
        autoComplete="off"
        autoFocus
        leadingVisual={SearchIcon}
      />
      <LabelGroup sx={{ marginTop: "7px" }}>
        <Label size="large">James Delos</Label>
        <Label size="large">Deithy</Label>
        <Label size="large">Shibumi</Label>
      </LabelGroup>
    </Box>
  );
}

import React from "react";
import { TextInput } from "@primer/react";

export default function Navigation() {
  return (
    <TextInput
      block
      aria-label="Summoner name"
      name="summonerName"
      placeholder="Enter summoner name"
    />
  );
}

import React from "react";
import { Heading } from "@primer/react";
import { Search } from "../components";
import { Author, Center } from "../layouts";

export default function Home() {
  return (
    <>
      <Center>
        <Heading
          sx={{
            fontFamily: "mono",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          League tracker
        </Heading>
        <Search focus example />
      </Center>
      <Author />
    </>
  );
}

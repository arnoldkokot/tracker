import React from "react";
import { Heading } from "@primer/react";
import { Center } from "../layouts";

export default function NotFound() {
  return (
    <Center>
      <Heading
        sx={{
          fontFamily: "mono",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        404
      </Heading>
    </Center>
  );
}

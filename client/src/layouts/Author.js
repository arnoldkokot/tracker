import React from "react";
//import PropTypes from "prop-types";
import { Box, Link } from "@primer/react";

export default function Author() {
  return (
    <Box
      position="absolute"
      bottom={5}
      left="50%"
      fontFamily="mono"
      sx={{ transform: "translateX(-50%)" }}
    >
      <Link href="https://arnoldkokot.com" target="_blank">
        Created by Arnold Kokot
      </Link>
    </Box>
  );
}

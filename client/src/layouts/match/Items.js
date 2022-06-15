import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar } from "@primer/react";

import config from "../../config.json";

Items.propTypes = {
  items: PropTypes.array,
};

export default function Items({ items }) {
  return (
    <Box
      flexShrink={0}
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridGap={1}
      sx={{ display: ["none", "grid"] }}
    >
      {items.map((item, index) =>
        item ? (
          <Avatar
            src={`${config.CDN}img/item/${item}.png`}
            size={32}
            square
            key={index}
          />
        ) : (
          <Box width={32} height={32} bg={"neutral.muted"} key={index} />
        )
      )}
    </Box>
  );
}

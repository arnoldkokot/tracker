import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar } from "@primer/react";

import config from "../../config.json";

MatchItems.propTypes = {
  item0: PropTypes.number,
  item1: PropTypes.number,
  item2: PropTypes.number,
  item3: PropTypes.number,
  item4: PropTypes.number,
  item5: PropTypes.number,
};

export default function MatchItems(props) {
  return (
    <Box
      flexShrink={0}
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridGap={1}
      sx={{ display: ["none", "grid"] }}
    >
      {/* ITS RIOTS FAULT? NOT MINE*/}
      <Avatar
        src={`${config.CDN}img/item/${props.item0}.png`}
        size={32}
        square
      />
      <Avatar
        src={`${config.CDN}img/item/${props.item1}.png`}
        size={32}
        square
      />
      <Avatar
        src={`${config.CDN}img/item/${props.item2}.png`}
        size={32}
        square
      />
      <Avatar
        src={`${config.CDN}img/item/${props.item3}.png`}
        size={32}
        square
      />
      <Avatar
        src={`${config.CDN}img/item/${props.item4}.png`}
        size={32}
        square
      />
      <Avatar
        src={`${config.CDN}img/item/${props.item5}.png`}
        size={32}
        square
      />
    </Box>
  );
}

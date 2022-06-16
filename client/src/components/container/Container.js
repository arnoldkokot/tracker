import React from "react";
import { Box, Text } from "@primer/react";
import PropTypes from "prop-types";

function Container(props) {
  return <Box bg="canvas.subtle" borderRadius={6} p={2} {...props} />;
}

Bold.propTypes = {
  children: PropTypes.any,
  props: PropTypes.any,
};

function Bold(props) {
  return <Text fontWeight="bold" fontSize={1} {...props} />;
}

Container.Bold = Bold;

export default Container;

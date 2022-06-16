import { Box, useTheme } from "@primer/react";
import React from "react";
import PropTypes from "prop-types";

const RADIUS = 80,
  STROKE_WIDTH = 14,
  SIZE = RADIUS + STROKE_WIDTH;

function Ratio({ percentage }) {
  const { theme } = useTheme();

  return (
    <Box position="relative" width={SIZE} height={SIZE}>
      <svg width={SIZE} height={SIZE}>
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS / 2}
          stroke={theme.colors.open.muted}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={RADIUS * 3.14}
          strokeDashoffset={RADIUS * 3.14 * (1 + percentage)}
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS / 2}
          stroke={theme.colors.closed.muted}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={RADIUS * 3.14}
          strokeDashoffset={RADIUS * 3.14 * percentage}
          fill="transparent"
        />
      </svg>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        fontWeight="bold"
        sx={{ transform: "translate(-50%,-50%)" }}
      >
        {percentage * 100}%
      </Box>
    </Box>
  );
}

Ratio.propTypes = {
  percentage: PropTypes.number,
};

export default Ratio;

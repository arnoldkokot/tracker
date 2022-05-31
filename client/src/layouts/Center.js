import React from "react";
import PropTypes from "prop-types";
import { PageLayout, Box } from "@primer/react";

Center.propTypes = {
  children: PropTypes.any,
};

export default function Center({ children }) {
  return (
    <PageLayout.Content
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box m="auto" width="100%" maxWidth={500}>
        {children}
      </Box>
    </PageLayout.Content>
  );
}

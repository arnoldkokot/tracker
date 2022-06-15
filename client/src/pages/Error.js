import React from "react";
import { Heading, PageLayout } from "@primer/react";
import PropTypes from "prop-types";

Error.propTypes = {
  title: PropTypes.string,
  code: PropTypes.number,
};

export default function Error({ title, code }) {
  return (
    <PageLayout.Content
      sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
    >
      <Heading
        sx={{
          fontFamily: "mono",
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "3",
        }}
      >
        {code} - {title}
      </Heading>
    </PageLayout.Content>
  );
}

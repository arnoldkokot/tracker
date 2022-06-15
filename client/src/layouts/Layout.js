import React from "react";
import { PageLayout } from "@primer/react";
import PropTypes from "prop-types";

const Center = ({ children }) => (
  <PageLayout.Content
    sx={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </PageLayout.Content>
);

Center.propTypes = {
  children: PropTypes.any,
};

const Layout = PageLayout;
Layout.Center = Center;

export default Layout;

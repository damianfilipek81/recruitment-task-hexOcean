import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";

export const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

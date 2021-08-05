import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = styled.div`
position: relative;
`
export const MainLayout = ({ children }) => {
  return (
    <Root>
      <Header />
      {children}
      <Footer />
    </Root>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

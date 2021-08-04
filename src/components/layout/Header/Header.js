import styled from "styled-components";
import React from "react";

const Root = styled.div`
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.6);
  position: fixed;
  z-index: 999;
`;
const Header = () => {
  return <Root />;
};

export default Header;

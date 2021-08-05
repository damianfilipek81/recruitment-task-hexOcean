import styled from "styled-components";
import React from "react";

const Root = styled.div`
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 999;
  bottom: 0;
  text-align: center;
  line-height: 40px;
  font-size: 11px;
  user-select: none;
`;
const Footer = () => {
  return <Root>Created by Damian Filipek</Root>;
};

export default Footer;

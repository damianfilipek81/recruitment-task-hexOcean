import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

const Root = styled(Link)`
  color: ${({theme})=>theme};
  text-decoration: none;
  font-size: 30px;
  padding-right: 25px;
  position: relative;

  &::after{
    content: "";
    width: 0;
    height: 3px;
    display: inline-block;
    background: ${({theme}) => theme};
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 15px;
    transition: all 1s;
  }

  &:hover::after{
    width: 90%;
  }
`;

const NavButton = ({ children, link }) => {
  const theme = useTheme().palette.primary.main;
  return(
    <Root to={link} theme={theme}>
  {children}
    </Root>
    );
};

NavButton.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};
export default NavButton;

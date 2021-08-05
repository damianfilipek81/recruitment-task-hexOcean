import styled from "styled-components";
import React from "react";
import { useTheme } from "@material-ui/core/styles";
import DarkModeButton from "../../features/DarkModeButton/DarkModeButton";
import { Container } from "@material-ui/core";

const Root = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme};
  position: fixed;
  z-index: 999;
`;

const ContainerRoot = styled(Container)`
  position: relative;
`;
const Header = () => {
  const theme = useTheme().palette.primary;
  return (
    <Root theme={theme.light}>
      <ContainerRoot>
        <DarkModeButton />
      </ContainerRoot>
    </Root>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { createGlobalStyle } from "styled-components";
import { Home } from "./components/views/Home/Home";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Root = styled.div`
  background: #3a3c3e;
`;

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
body{
  font-family: 'Gowun Dodum', sans-serif;
  color: #fff;
}
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#bbb",
    },
    secondary: {
      main: "#F80808",
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Root>
          <Global />
          <MainLayout>
            <Home />
          </MainLayout>
        </Root>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;

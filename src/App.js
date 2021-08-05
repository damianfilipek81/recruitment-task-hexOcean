import React from "react";
import { useSelector } from "react-redux";
import { getDarkMode } from "./redux/darkModeRedux";
import styled from "styled-components";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { createGlobalStyle } from "styled-components";
import { Home } from "./components/views/Home/Home";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutMe from "./components/views/AboutMe/AboutMe";

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

const App = () => {
  const darkMode = useSelector(getDarkMode);
  const theme = createTheme({
    palette: {
      primary: {
        main: darkMode ? "rgba(45,45, 45, 0.7)" : "rgba(189,189,189, 0.7)",
        light: darkMode ? "rgba(255,255,255, 0.7)" : "rgba(45,45, 45, 0.7)",
      },
      secondary: {
        main: darkMode ? "rgba(255,255,255, 0.4)" : "rgba(45,45, 45, 0.6)",
        font: darkMode ? "rgba(45,45, 45, 0.9)" : "rgba(255,255,255, 0.6)"
      }
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Root>
            <Global />
            <MainLayout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutAuthor" component={AboutMe} />
              </Switch>
            </MainLayout>
          </Root>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

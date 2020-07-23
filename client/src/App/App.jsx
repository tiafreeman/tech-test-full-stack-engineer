import { hot } from "react-hot-loader/root";
import React from "react";
import GlobalStyle from "../theme";
import { Application } from "./styles";
import { ReactComponent as Rocket } from "../assets/rocket.svg";
import DashboardPage from "../pages/dashboard";

const App = () => (
  <>
    <Application>
      <DashboardPage />
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);

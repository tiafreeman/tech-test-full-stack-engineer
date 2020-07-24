import React from "react";

import Button from "../button/button-component";
import {
  ControlConsoleContainer,
  ControlConsoleImgContainer,
  ControlInput,
  ControlConsoleDivider,
} from "./styles";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";

const ControlConsole = () => (
  <ControlConsoleContainer>
    <ControlConsoleDivider>
      <Button text="Capsules" />
    </ControlConsoleDivider>
    <ControlConsoleImgContainer>
      <Rocket />
    </ControlConsoleImgContainer>
    <ControlConsoleDivider>
      <ControlInput />
      <Button text="Landing Pad" />
    </ControlConsoleDivider>
  </ControlConsoleContainer>
);

export default ControlConsole;

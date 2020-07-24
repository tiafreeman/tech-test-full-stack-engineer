import React from "react";
import Button from "../button/button";
import {
  Container,
  ControlConsoleContainer,
  ControlConsoleImgContainer,
  ControlInput,
  ControlConsoleDivider,
  DisplayConsoleContainer,
} from "./styles";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";

const ControlConsole = (capsuleData) => {
  return (
    <Container>
      <DisplayConsoleContainer></DisplayConsoleContainer>
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
    </Container>
  );
};

export default ControlConsole;

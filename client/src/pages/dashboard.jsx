import React from "react";
import styled from "styled-components";

import Button from "../components/button/button-component";
import { ReactComponent as Rocket } from "../assets/rocket.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  background-color: white;
  margin-top: 25vh;
  margin-left: 25vw;
`;

const DisplayConsole = styled.div`
  position: relative;
  max-height: inherit;
  max-width: inherit;
  height: 66%;
  width: auto;
  margin: 10px;
  background-color: red;
`;

const ControlConsole = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30%;
  width: auto;
  margin: 10px;
`;

const ControlConsoleDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid black;
  background-color: purple;
  height: 100%;
  width: 100%;
`;

const ControlConsoleImgContainer = styled.div`
  display: flex;
  justify-content: center;
  outline: 1px solid black;
  background-color: purple;
  height: 100%;
  padding-left: 4vw;
  padding-right: 4vw;
`;

const ControlInput = styled.input`
  height: 50%;
  width: 10vw;
  margin: 10px;
  font-size: 1em;
`;

const DashboardPage = () => (
  <Container>
    <DisplayConsole />
    <ControlConsole>
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
    </ControlConsole>
  </Container>
);

export default DashboardPage;

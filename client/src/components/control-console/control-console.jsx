import React, { useState } from "react";
import { StyledButton } from "../button/button";
import ListCard from "../list-card/list-card";
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
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(!showResults);
  return (
    <Container>
      {showResults ? (
        <DisplayConsoleContainer>
          {capsuleData.capsuleData.map((capsule) => (
            <ListCard capsuleData={capsule} />
          ))}
        </DisplayConsoleContainer>
      ) : (
        <DisplayConsoleContainer />
      )}

      <ControlConsoleContainer>
        <ControlConsoleDivider>
          <StyledButton onClick={onClick}>Capsules</StyledButton>
        </ControlConsoleDivider>
        <ControlConsoleImgContainer>
          <Rocket />
        </ControlConsoleImgContainer>
        <ControlConsoleDivider>
          <ControlInput />
          <StyledButton>Launch Pad</StyledButton>
        </ControlConsoleDivider>
      </ControlConsoleContainer>
    </Container>
  );
};

export default ControlConsole;

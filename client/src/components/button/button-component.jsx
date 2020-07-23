import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: "red";
  margin: 10px;
  height: 80%;
  min-width: 10vw;
`;

const Button = () => <StyledButton />;
export default Button;

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 10px;
  height: 80%;
  min-width: 10vw;
  border-radius: 12px;
  font-size: 0.8em;
`;

const Button = (props) => <StyledButton>{props.text}</StyledButton>;
export default Button;

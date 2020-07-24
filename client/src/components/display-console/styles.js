import styled from "styled-components";

const DisplayConsole = styled.div`
  position: relative;
  max-height: inherit;
  max-width: inherit;
  height: 66%;
  width: auto;
  margin: 10px;
  background-color: red;
  @media (max-width: 1200px) {
    width: 66%;
    height: auto;
  }
`;

export { DisplayConsole };

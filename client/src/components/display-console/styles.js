import styled from "styled-components";

const DisplayConsoleContainer = styled.div`
  position: relative;
  max-height: inherit;
  max-width: inherit;
  height: 66%;
  width: auto;
  margin: 10px;
  background-color: white;
  @media (max-width: 1200px) {
    width: 66%;
    height: auto;
  }
`;

export default DisplayConsoleContainer;

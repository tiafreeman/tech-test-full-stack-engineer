import styled from "styled-components";

const DisplayConsoleContainer = styled.div`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  background-color: white;
  margin-top: 25vh;
  margin-left: 25vw;
  @media (max-width: 1200px) {
    height: 100vh;
    width: 100vw;
    margin: 0;
    flex-direction: row;
  }
`;

export default DisplayConsoleContainer;

import styled from "styled-components";

const ControlConsoleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30%;
  width: auto;
  margin: 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    width: 30vw;
  }
`;

const ControlConsoleDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid black;
  background-color: purple;
  height: 100%;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
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
  @media (max-width: 1200px) {
    height: 30%;
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  background-color: grey;
  margin-top: 25vh;
  margin-left: 25vw;
  @media (max-width: 1200px) {
    height: 100vh;
    width: 100vw;
    margin: 0;
    flex-direction: row;
  }
`;
const DisplayConsoleContainer = styled.div`
  position: relative;
  max-height: inherit;
  max-width: inherit;
  height: 66%;
  width: auto;
  margin: 10px;
  overflow: scroll;
  background-color: white;
  @media (max-width: 1200px) {
    width: 66%;
    height: auto;
  }
`;

export {
  Container,
  ControlConsoleContainer,
  ControlConsoleDivider,
  ControlConsoleImgContainer,
  ControlInput,
  DisplayConsoleContainer,
};

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
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
  width: 100%;
  margin: 10px;
  background-color: red;
`;

const DashboardPage = () => (
  <Container>
    <DisplayConsole />
  </Container>
);

export default DashboardPage;

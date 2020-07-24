import React, { useEffect, useState } from "react";

import { DisplayConsole } from "../components/display-console/styles";
import ControlConsole from "../components/control-console/control-console";

const DashboardPage = () => {
  const [capsules, setCapsules] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/capsules")
      .then((response) => response.json())
      .then((data) => setCapsules(data));
  }, []);

  return (
    <Container>
      <DisplayConsole />
      <ControlConsole />
    </Container>
  );
};

export default DashboardPage;

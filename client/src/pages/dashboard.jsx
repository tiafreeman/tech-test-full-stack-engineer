import React, { useEffect } from "react";

import { connect, useSelector } from "react-redux";
import { loadCapsules } from "../redux/capsules/capsules.actions";

import DisplayConsole from "../components/display-console/display-console";
import ControlConsole from "../components/control-console/control-console";
import { Container } from "./styles";

function DashboardPage(props) {
  useEffect(() => {
    props.loadCapsules();
  }, []);
  const capsules = useSelector((state) => state.capsules);
  return (
    <Container>
      <ControlConsole capsuleData={capsules} />
    </Container>
  );
}

const mapDispatchToProps = {
  loadCapsules,
};

export default connect(null, mapDispatchToProps)(DashboardPage);

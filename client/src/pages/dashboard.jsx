import React, { useEffect } from "react";

import { connect, useSelector } from "react-redux";
import { loadCapsules } from "../redux/capsules/capsules.actions";

import ControlConsole from "../components/control-console/control-console";

function DashboardPage(props) {
  useEffect(() => {
    props.loadCapsules();
  }, []);
  const capsules = useSelector((state) => state.capsules);
  return <ControlConsole capsuleData={capsules} />;
}

const mapDispatchToProps = {
  loadCapsules,
};

export default connect(null, mapDispatchToProps)(DashboardPage);

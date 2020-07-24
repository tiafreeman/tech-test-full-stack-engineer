import React from "react";

import { ListItemsContainer } from "./styles";

const ListCard = (capsule) => {
  console.log(capsule.capsuleData);
  const { capsule_serial, capsule_id, details, ...rest } = capsule.capsuleData;
  return (
    <ListItemsContainer>
      <p>Capsule ID: {capsule_id}</p>
      <p>Capsule Serial: {capsule_serial}</p>
      <span>Details: {details}</span>
      <span></span>
      <br />
    </ListItemsContainer>
  );
};

export default ListCard;

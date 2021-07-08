import React from "react";

import "./Characteristic.scss";

function Characteristic({ name, parameter }) {
  return (
    <div className="Characteristics">
      <div className=" name">{name}</div>
      <div className="line"></div>
      <div className="parameter">{parameter}</div>
    </div>
  );
}

export default Characteristic;

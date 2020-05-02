import React from "react";
import utils from "../utils";

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.stars).map((id) => (
        <div key={id} className="star" />
      ))}
    </>
  );
};

export default StarsDisplay;

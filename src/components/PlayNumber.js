import React from "react";
import colors from "../color";

const PlayNumber = (props) => {
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClickNumber(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;

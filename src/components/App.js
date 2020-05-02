import React, { useState } from "react";
import Game from "./Game";

const App = () => {
  const [maxstars, setMaxstars] = useState(16);
  const [timelimit, setTimelimit] = useState(20);
  return (
    <div className="app">
      <Game maxstars={maxstars} timelimit={timelimit} />
    </div>
  );
};

export default App;

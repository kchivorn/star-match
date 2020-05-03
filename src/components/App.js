import React, { useState } from "react";
import Game from "./Game";

const App = () => {
  const [maxstars, setMaxstars] = useState(9);
  const [timelimit, setTimelimit] = useState(20);

  const handleChange = (e) => {
    setMaxstars(e.target.value);
    setTimelimit(Math.sqrt(e.target.value) * 10);
  };

  return (
    <div
      className="app"
      style={{ maxWidth: Math.floor(Math.sqrt(maxstars)) * 2 * 74 }}
    >
      <fieldset>
        <label>Select Difficulty Level:</label>
        <select
          className="mt-4 col-md-4 col-offset-8"
          onChange={(e) => handleChange(e)}
        >
          <option value="9">Easy</option>
          <option value="16">Moderate</option>
          <option value="25">Hard</option>
          <option value="36">Very Hard</option>
        </select>
      </fieldset>
      
      <Game key={maxstars} maxstars={maxstars} timelimit={timelimit} />
    </div>
  );
};

export default App;

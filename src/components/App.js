import React, { useState } from "react";
import Game from "./Game";

const App = () => {
  const [gameId, setGameId] = useState(1);

  return (
    <div className="app">
      <Game
        key={gameId}
        setGameId={() => setGameId(gameId + 1)}
      />
    </div>
  );
};

export default App;

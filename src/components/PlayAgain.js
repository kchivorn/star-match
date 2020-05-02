import React from "react";
const PlayAgain = (props) => {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
      >
        {props.gameStatus === "lost" ? "Game Over" : "Won"}
      </div>
      <button className={'btn btn-primary'} onClick={props.onClickPlayAgain}>Play Again</button>
    </div>
  );
};

export default PlayAgain;

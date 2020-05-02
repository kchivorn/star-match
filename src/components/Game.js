import React, { useEffect } from "react";
import "./App.css";
import utils from "../utils";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";
import PlayAgain from "./PlayAgain";
import useGameState from "../hooks/UseGameState";

function Game(props) {
  const {
    stars,        
    availableNums,
    candidateNums,
    secondsLeft,
    totalScore,
    setTotalScore,
    setGameState,
    resetGame
  } = useGameState();

  const candidateAreWrong = utils.total(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  useEffect(() => {
    if (gameStatus === "won") {
      setTotalScore(totalScore + secondsLeft * 10 + 10);
    }
  }, [gameStatus]);
  
  const setNumberStatus = (number) => {
    if (!availableNums.includes(number)) return "used";
    if (candidateNums.includes(number))
      return candidateAreWrong ? "wrong" : "candidate";
    return "available";
  };

  const onClickNumber = (number, status) => {
    if (gameStatus !== "active" || status === "used") return;
    const newCandidateNums =
      status === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((n) => !candidateNums.includes(n));

    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="score">
        Score: {totalScore}
      </div>
      <div className="help">
        Pick one or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain
              onClickPlayAgain={resetGame}
              gameStatus={gameStatus}
            />
          ) : (
            <StarsDisplay stars={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((id) => (
            <PlayNumber
              key={id}
              number={id}
              status={setNumberStatus(id)}
              onClickNumber={onClickNumber}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time remaining: {secondsLeft}</div>
    </div>
  );
}

export default Game;

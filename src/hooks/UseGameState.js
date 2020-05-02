import { useState, useEffect } from "react";
import utils from "../utils";

const useGameState = (props) => {
  const [stars, setStars] = useState(utils.random(1, props.maxstars));
  const [availableNums, setAvailableNums] = useState(utils.range(1, props.maxstars));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(props.timelimit);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [secondsLeft, availableNums.length]);

  const setGameState = (newCandidateNums) => {
    if (utils.total(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, props.maxstars));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  const resetGame = () => {
    setStars(utils.random(1, props.maxstars));
    setAvailableNums(utils.range(1, props.maxstars));
    setCandidateNums([]);
    setSecondsLeft(props.timelimit);
  };

  return {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    totalScore,
    setTotalScore,
    setGameState,
    resetGame,
  };
};

export default useGameState;

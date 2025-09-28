import { createContext, useEffect, useState, useRef } from "react";

const NUM_BURROWS = 9;
const TIME_LIMIT = 10;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [burrows, setBurrows] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(TIME_LIMIT);
  const [playing, setPlaying] = useState(false);
  const timer = useRef();

  //Keeps track of the game time
  //Ends the round by calling stop
  useEffect(() => {
    if (time <= 0 && playing) {
      stop();
    }
  }, [time, playing]);

  const start = () => {
    //set initial score to zero
    setScore(0);
    //set playing status to true
    setPlaying(true);
    setBurrows(makeBurrows());
    timer.current = setInterval(
      () => setTime((prevTime) => prevTime - 1),
      1000
    );
  };

  //Stops the game
  //Sets playing back to false
  //Sets the time limit back to the start time of 10
  const stop = () => {
    setPlaying(false);
    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };

  //Hop is going to increase the score and move the bunny to a new hole
  const hop = () => {
    setScore((prevScore) => prevScore + 1);
    setBurrows(makeBurrows(burrows));
  };

  const value = {
    burrows,
    score,
    time,
    timeLimit: TIME_LIMIT,
    playing,
    start,
    stop,
    hop,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

//Create an array of holes (9)
//Place a bunny in random hole each time
//9 array cells will all be false; if an array cell is true, a bunny will appear
function makeBurrows(prev = []) {
  const newField = Array(NUM_BURROWS).fill(false);
  let mole = Math.floor(Math.random() * NUM_BURROWS);
  while (prev[mole]) {
    //set to random new index
    //random new index could be anything that is false
    mole = Math.floor(Math.random() * NUM_BURROWS);
  }
  newField[mole] = true;
  return newField;
}

export default GameContext;

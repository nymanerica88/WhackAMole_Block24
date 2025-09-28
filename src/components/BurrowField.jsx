import { useContext } from "react";
import GameContext from "../game/GameContext";
import Burrow from "./Burrow";

//BurrowField is supposed to display the list
//Reads the number of burrows that we get from our use context and then display them in a 3x3 field
//composed of the items that we map to the <Burrow /> Component (boolean to each cell)
function BurrowField() {
  const { burrows } = useContext(GameContext);
  console.log(burrows);

  return (
    <ul className="field">
      {burrows.map((hasMole, index) => (
        <Burrow key={index} hasMole={hasMole} />
      ))}
    </ul>
  );
}

export default BurrowField;

import { useContext } from "react";
import GameContext from "../game/GameContext";

function Burrow({ hasMole }) {
  const { hop } = useContext(GameContext);
  console.log("hasMole", hasMole);
  return <li className={`burrow ${hasMole ? "mole" : ""}`} onClick={hop}></li>;
}

export default Burrow;

import { useContext } from "react";
import GameContext from "../game/GameContext";

function Welcome() {
  const { start } = useContext(GameContext);
  return (
    <section className="welcome">
      <h3> Welcome to Wack-A-Mole!</h3>
      <p>
        {" "}
        Click on the bunnies before they disappear to score points before time
        runs out!{" "}
      </p>
      <button onClick={start}>Start Game</button>
    </section>
  );
}

export default Welcome;

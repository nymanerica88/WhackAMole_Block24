import { useContext } from "react";
import GameContext from "./game/GameContext";
import ScorePanel from "./components/ScorePanel";
import Welcome from "./components/Welcome";
import BurrowField from "./components/BurrowField";
import Burrow from "./components/Burrow";

function App() {
  const { playing } = useContext(GameContext);
  console.log("playing", playing);
  return (
    <>
      <h1>Whack-A-Mole</h1>
      {playing ? (
        <>
          <ScorePanel />
          <BurrowField />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}

export default App;

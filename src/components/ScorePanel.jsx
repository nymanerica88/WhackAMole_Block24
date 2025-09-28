import { useContext } from "react";
import GameContext from "../game/GameContext";

function ScorePanel() {
  const { score, time, stop } = useContext(GameContext);
  return (
    <section className="scoreboard">
      <section className="chip">
        Score <strong>{score}</strong>
      </section>
      <section className="chip">
        Time <strong>{time}</strong>
      </section>
      <button onClick={stop} className="btn btn-secondary">
        Restart
      </button>
    </section>
  );
}

export default ScorePanel;

"use client";
import Player from "../components/player/player.component";
import { GameContext } from "./game.context";
import useGame from "./useGame.hook";

const Game = () => {
  const context = useGame();
  return (
    <GameContext.Provider value={context}>
      <Player />
    </GameContext.Provider>
  );
};

export default Game;

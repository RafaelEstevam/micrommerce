"use client";
import { useEffect } from "react";
import Player from "../components/player/player.component";
import { GameContext } from "./game.context";
import Scenario from "../components/scenario/scenario.component";
import useGame from "./useGame.hook";

const Game = () => {
  const context = useGame();

  useEffect(() => {
    console.log(context);
  }, [context])
  
  return (
    <GameContext.Provider value={context}>
      <Scenario />
      <Player />
    </GameContext.Provider>
  );
};

export default Game;

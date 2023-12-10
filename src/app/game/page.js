"use client";
import { useEffect } from "react";
import Player from "../components/player/player.component";
import { GameContext } from "./game.context";
import useGame from "./useGame.hook";
import TravelersScenario from "../components/scenarios/travelers/travelers.scenario.component";

const Game = () => {
  const context = useGame();

  useEffect(() => {
    console.log(context);
  }, [context])
  
  return (
    <GameContext.Provider value={context}>
      <TravelersScenario />
      <Player />
    </GameContext.Provider>
  );
};

export default Game;

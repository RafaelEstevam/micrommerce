"use client";
import { PlayerContext } from "./player.context";
import usePlayer from "./usePlayer.hook";

import CardsOnHand from '../cards/cardsOnHand.component';

const Player = () => {
  const context = usePlayer();

  return (
    <PlayerContext.Provider value={context}>
      <CardsOnHand />
    </PlayerContext.Provider>
  );
};

export default Player;

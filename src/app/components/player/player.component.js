"use client";
import { PlayerContext } from "./player.context";
import usePlayer from "./usePlayer.hook";

import CardsOnHand from '../cards/cardsOnHand.component';
import CardsOnDeck from '../cards/cardsOnDeck.component';
import CardsOnCemetery from '../cards/cardsOnCemetery.component';

const Player = () => {
  const context = usePlayer();

  return (
    <PlayerContext.Provider value={context}>
      <CardsOnDeck />
      <CardsOnHand />
      <CardsOnCemetery />
    </PlayerContext.Provider>
  );
};

export default Player;

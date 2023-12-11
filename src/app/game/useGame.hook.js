import { useCallback, useState, useEffect } from "react";
import {listOfCards} from './listOfCards.js';

const useGame = () => {
  const [action, setAction] = useState();
  const [cards, setCards] = useState(listOfCards);
  const [drawCard, setDrawCard] = useState(undefined);
  const [cardActivate, setCardActivate] = useState({});
  
  const handleDrawCard = useCallback(() => {
    setDrawCard(cards[0]);
    setCardActivate(cards[0]);
  }, [cards]);

  useEffect(() => {
    if(drawCard){
      const filteredCards = cards?.filter((item) => drawCard.id !== item.id);
      setCards(filteredCards);
      setDrawCard(undefined);
    }
  }, [drawCard, cards])
  
  return {
    action, setAction,
    cards, setCards,
    cardActivate,
    handleDrawCard
  }
};

export default useGame;
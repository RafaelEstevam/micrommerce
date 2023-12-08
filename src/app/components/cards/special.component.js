"use client";

import { useContext } from "react";
import SpecialCard from "./card.special.class";
import { handleTypeStyle } from "./utils";
import { specialFunctionsList, removeSpecialCard } from "./special.functions";
import { PlayerContext } from "../player/player.context";

const SpecialCardPlayer = ({
  type,
  name,
  value,
  callback,
  id,
  flavorText,
  card,
  attackType,
  setAttackType,
  specialAction,
}) => {

  const playerContext = useContext(PlayerContext);
  const {cards, setCards, cemetery, setCemetery} = playerContext;

  const specialFunction = () => {
    specialFunctionsList[specialAction](value, playerContext);
    setCards(removeSpecialCard(card, cards));
    setCemetery([...cemetery, ...[card]])
  };

  const specialCard = new SpecialCard({
    type,
    name,
    value,
    callback,
    flavorText,
    id,
    specialAction: specialFunction,
  });

  return (
    <div className="w-1/4">
      <button
        onClick={specialCard.specialAction}
        // onClick={() => setAttackType(card)}
        className={`p-4 rounded-2xl text-white mb-4 ${
          attackType?.id === id ? "opacity-50" : "opacity-100"
        } ${handleTypeStyle(specialCard.type)}`}
      >
        {specialCard.name}
        <p className="text-xs">{specialCard.flavorText}</p>
      </button>
    </div>
  );
};

export default SpecialCardPlayer;

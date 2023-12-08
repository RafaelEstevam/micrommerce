"use client";

import { useState } from "react";
import { useAttack } from "./useAttack.hooks.js";
import PlusCard from "../../components/cards/plus.component";
import AttackCard from "../../components/cards/attack.component";
import SpecialCard from "../../components/cards/special.component";
import DefenseCard from "../../components/cards/defense.component";

const cardsOnHand = [
  { name: "Attack", type: "melee", id: 5, action: "attack" },
  { name: "Attack", type: "reach", id: 16, action: "attack" },
  { name: "Attack", type: "melee", id: 63, action: "attack" },
  { name: "Attack", type: "reach", id: 612, action: "attack" },
  { name: "Special", type: "special", id: 1234, action: "", flavorText: "Cure 3 de dano", specialAction: "", value: 3},
  { name: "+3", type: "plus", value: 3, id: 1 },
  { name: "+3", type: "plus", value: 3, id: 3 },
  { name: "+4", type: "plus", value: 4, id: 4 },
  { name: "+2", type: "plus", value: 2, id: 434 },
  { name: "+1", type: "plus", value: 1, id: 412 },
];

const Game = () => {
  const {
    attackType,
    setAttackType,
    addOnListOfActions,
    sum
  } = useAttack();

  const [cards, setCards] = useState(cardsOnHand);

  const renderCards = (card) => {
    switch (card.type) {
      case "plus":
        return (
          <PlusCard {...card} key={card.id} callback={addOnListOfActions} />
        );
      case "melee":
        return (
          <AttackCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      case "reach":
        return (
          <AttackCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      case "special":
        return (
          <SpecialCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      case "defense":
        return (
          <DefenseCard
            {...card}
            key={card.id}
            card={card}
            attackType={attackType}
            setAttackType={setAttackType}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <p className="text-slate-500 text-5xl">Ataque: {sum} </p>
      <p className="text-slate-500 text-5xl">
        Action: {attackType.action} {attackType.type}{" "}
      </p>

      <div className="flex w-full flex-col bg-slate-100">
        {cards?.map((item) => renderCards(item))}
        <button
          className={`${attackType.id === undefined ? 'opacity-50' : 'opacity-100'} bg-red-500 p-4 rounded-2xl text-white`}
          onClick={() => console.log({action: `${attackType.action} ${attackType.type}`, sum: sum})}
          disabled={attackType.id === undefined}
        >
          Terminar
        </button>
      </div>
    </>
  );
};

export default Game;

import { useState } from "react";

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

const usePlayer = () => {
  const [life, setLife] = useState(0);
  const [fury, setFury] = useState(0);
  const [cards, setCards] = useState(cardsOnHand);
  const [character, setCharacter] = useState("");
  const [phase, setPhase] = useState("");

  return {
    life,
    setLife,
    fury,
    setFury,
    cards,
    setCards,
    character,
    setCharacter,
    phase,
    setPhase,
  };
};

export default usePlayer;

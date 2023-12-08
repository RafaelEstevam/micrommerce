import { useState } from "react";

const cardsOnHand = [
  { name: "Attack", type: "melee", id: 509, action: "attack" },
  { name: "Attack", type: "melee", id: 5, action: "attack" },
  {
    name: "Special",
    type: "special",
    id: 12345,
    action: "",
    flavorText: "Cure 3",
    specialAction: "life",
    value: 3,
  },
  // { name: "Special", type: "special", id: 11234, action: "", flavorText: "Compre 2", specialAction: "card", value: 2},
  {
    name: "Special",
    type: "special",
    id: 1433,
    action: "",
    flavorText: "+1 Furia",
    specialAction: "fury",
    value: 1,
  },
  { name: "+3", type: "plus", value: 3, id: 1 },
  { name: "+1", type: "plus", value: 1, id: 412 },
  { name: "+1", type: "plus", value: 1, id: 998 },
];

const usePlayer = () => {
  const [life, setLife] = useState(0);
  const [fury, setFury] = useState(0);
  const [cards, setCards] = useState(cardsOnHand);
  const [character, setCharacter] = useState("");
  const [phase, setPhase] = useState("");
  const [deck, setDeck] = useState([]);
  const [cemetery, setCemetery] = useState([]);

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
    deck,
    setDeck,
    cemetery,
    setCemetery,
  };
};

export default usePlayer;

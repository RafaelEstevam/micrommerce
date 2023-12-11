"use client";

import { useCallback, useState } from "react";
import { freyaCards } from "./freya";

const UseFreya = () => {
  const furyLimit = 6;
  const character = 'Freya';
  const [life, setLife] = useState(8);
  const [cards, setCards] = useState(freyaCards);
  const [card, setCard] = useState(7);
  const [fury, setFury] = useState(0);
  const [actionType, setActionType] = useState(undefined);
  const [power, setPower] = useState(0);
  const [position, setPosition] = useState([[], []]);

  const handleSkillOne = useCallback(() => {
  }, []);


  const handleActiveSkills = useCallback(() => {
    if(fury >= furyLimit){
      handleSkillOne();
      setFury(0)
    }
  }, [fury]);

  return {
    character,
    furyLimit,
    life,
    setLife,
    cards,
    setCards,
    card,
    setCard,
    fury,
    setFury,
    actionType,
    setActionType,
    power,
    setPower,
    position,
    setPosition,
    handleActiveSkills
  };
};

export default UseFreya;

"use client";

import { useCallback, useState, useEffect } from "react";
import { freyaCards } from "./freya";

const UseFreya = () => {
  const furyLimit = 6;
  const character = "Freya";
  const [life, setLife] = useState(8);
  const [cards, setCards] = useState(freyaCards);
  const [card, setCard] = useState(7);
  const [fury, setFury] = useState(0);
  const [actionType, setActionType] = useState(undefined);
  const [power, setPower] = useState(0);
  const [position, setPosition] = useState([2, 0]);
  const [stun, setStun] = useState(false);
  const [poison, setPoison] = useState(false);

  const handleSkillOne = useCallback(() => {}, []);

  const handleActiveSkills = useCallback(() => {
    if (fury >= furyLimit) {
      handleSkillOne();
      setFury(0);
    }
  }, [fury]);

  useEffect(() => {
    if (life <= 0) {
      setStun(true);
    }
  }, [life]);

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
    stun,
    setStun,
    poison,
    setPoison,
    handleActiveSkills,
  };
};

export default UseFreya;

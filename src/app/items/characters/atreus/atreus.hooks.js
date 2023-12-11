"use client";

import { useCallback, useState } from "react";
import { atreusCards } from "./atreus";

const UseAtreus = () => {
  const furyLimit = 4;
  const character = 'Atreus';
  const [life, setLife] = useState(7);
  const [cards, setCards] = useState(atreusCards);
  const [card, setCard] = useState(7);
  const [fury, setFury] = useState(0);
  const [actionType, setActionType] = useState(undefined);
  const [power, setPower] = useState(0);
  const [position, setPosition] = useState([[], []]);

  const handleSkillOne = useCallback(() => {
    setLife(life + 3);
  }, [life]);

  const handleSkillTwo = useCallback(() => {
    setPower(power + 3);
  }, [power]);

  const handleActiveSkills = useCallback(() => {
    handleSkillOne();
    handleSkillTwo();
  }, [life, power]);

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

export default UseAtreus;

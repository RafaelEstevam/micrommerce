"use client";

import { useCallback, useContext, useState, useEffect } from "react";
import { kratosCards } from "./kratos";
import { GodOfWarContext } from "../../../godOfWar/godOfWar.context";

const UseKratos = () => {
  const furyLimit = 5;
  const character = 'Kratos';
  const [life, setLife] = useState(10);
  const [cards, setCards] = useState(kratosCards);
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

export default UseKratos;

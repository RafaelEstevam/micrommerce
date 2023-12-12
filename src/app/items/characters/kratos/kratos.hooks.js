"use client";

import { useCallback, useContext, useState, useEffect } from "react";
import { kratosCards } from "./kratos";
import { GodOfWarContext } from "../../../godOfWar/godOfWar.context";

const UseKratos = () => {
  const furyLimit = 5;
  const character = "Kratos";
  const { lastAction, setLastAction } = useContext(GodOfWarContext);

  const [phase, setPhase] = useState("attack");
  const [life, setLife] = useState(10);
  const [card, setCard] = useState(7);
  const [fury, setFury] = useState(0);
  const [actionType, setActionType] = useState(undefined);
  const [power, setPower] = useState(0);
  const [position, setPosition] = useState([0, 0]);
  const [stun, setStun] = useState(false);
  const [poison, setPoison] = useState(false);
  const [cards, setCards] = useState([]);
  const [cemetery, setCemetery] = useState([]);
  const [deck, setDeck] = useState(kratosCards);
  const [activatedCards, setActivatedCards] = useState([]);

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

  const handleDrawCards = useCallback(() => {
    let limit = 0;
    const drawCards = [];
    while (limit < card) {
      console.log(limit);
      drawCards.push(deck[limit]);
      limit++;
    }
    setCards(drawCards);
  }, [card, cards, deck]);

  const handleFinalizeAttack = useCallback(() => {

    const attackPower = activatedCards.reduce((acc, cur) => acc += cur.value, 0);
    const typeOfAttack = activatedCards.find((item) => item.action).type;
    const enemyPosition = [position[0], typeOfAttack === 'attack_reach' ? 0 : 1];

    setLastAction({
      action: "lessLife",
      value: attackPower,
      target: "enemy",
      targetPosition: enemyPosition,
      targetSide: "a", //HOW GET THE SCENE SIDE
    })

  }, [position, activatedCards]);

  useEffect(() => {
    if (life <= 0) {
      setStun(true);
    }
  }, [life]);

  useEffect(() => {
    handleDrawCards();
  }, []);

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
    cemetery,
    setCemetery,
    deck,
    setDeck,
    activatedCards,
    setActivatedCards,
    phase,
    setPhase,
    handleActiveSkills,
    handleFinalizeAttack,
  };
};

export default UseKratos;

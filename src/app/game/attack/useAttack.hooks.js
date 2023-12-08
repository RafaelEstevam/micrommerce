"use client";

import { useState, useEffect } from "react";

export const useAttack = () => {
  const [attackActions, setAttackActions] = useState([]);
  const [attackAction, setAttackAction] = useState(undefined);
  const [attackType, setAttackType] = useState([]);
  const [sum, setSum] = useState(0);

  const sumAttack = (sum, attackAction) => {
    setSum(attackAction.type === 'plus' ? sum + attackAction.value : sum - attackAction.value);
  }

  const addOnListOfActions = (action) => {
    setAttackAction(action);
  };

  useEffect(() => {
    if (attackAction) {
      sumAttack(sum, attackAction);
      setAttackAction(undefined);
    }
  }, [attackAction, sum]);

  useEffect(() => {
    console.log(sum);
  }, [sum])

  return {
    attackActions,
    setAttackActions,
    attackAction,
    setAttackAction,
    attackType,
    setAttackType,
    addOnListOfActions,
    sum
  };
};

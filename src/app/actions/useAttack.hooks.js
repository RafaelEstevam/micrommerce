"use client";

import { useState, useEffect, useCallback } from "react";

export const useAttack = () => {
  const [plusActions, setPlusActions] = useState([]);
  const [attackAction, setAttackAction] = useState(undefined);
  const [attackPlus, setAttackPlus] = useState(undefined);
  const [attackType, setAttackType] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if(attackPlus){
      const findedAttackAction = plusActions.find((item) => attackPlus.id === item.id);
      if(findedAttackAction){
        const filteredAttackAction = plusActions.filter((item) => attackPlus.id !== item.id);
        setPlusActions(filteredAttackAction);
      }else{
        setPlusActions([...plusActions, ...[attackPlus]]);
      }
      setAttackPlus(undefined);
    }

  }, [attackPlus, plusActions]);

  useEffect(() => {
    if(plusActions.length > 0){
      setSum(plusActions?.reduce((acc, cur) => acc + cur.value, 0))
    }else{
      setSum(0);
    }
  }, [plusActions]);

  return {
    plusActions,
    setPlusActions,
    attackAction,
    setAttackAction,
    attackType,
    setAttackType,
    sum,
    setSum,
    attackPlus,
    setAttackPlus
  };
};

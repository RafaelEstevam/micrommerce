import { useState, useEffect } from "react";

const UseEnemy = (enemy) => {
  const {
    enemyLife,
    enemyPower,
    enemyPosition,
    enemySide,
    enemyArmor,
    enemyRune,
    enemyReach,
    enemyCondition,
    enemyFlipAction,
    enemyFlipCondition,
  } = enemy;
  
  const [life, setLife] = useState(enemyLife);
  const [power, setPower] = useState(enemyPower);
  const [armor, setArmor] = useState(enemyArmor);
  const [rune, setRune] = useState(enemyRune);
  const [reach, setReach] = useState(enemyReach);
  const [condition, setCondition] = useState(enemyCondition);
  const [side, setSide] = useState(enemySide);

  // useEffect(() => {
  //   console.log(enemy);
  // }, [enemy]);

  return {
    life,
    setLife,
    power,
    setPower,
    armor,
    setArmor,
    rune,
    setRune,
    reach,
    setReach,
    condition,
    setCondition,
    side,
    setSide,
    enemyPosition
  };
};

export default UseEnemy;

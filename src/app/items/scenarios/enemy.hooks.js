import {useState, useEffect} from 'react';

const UseEnemy = (enemy) => {

  const {enemyLife, enemyPower, enemyPosition, enemyArmor, enemyRune, enemyReach, enemyCondition, enemyFlipAction, enemyFlipCondition} = enemy;

  const [life, setLife] = useState(enemyLife);
  const [power, setPower] = useState(enemyPower);
  const [armor, setArmor] = useState(enemyArmor);
  const [rune, setRune] = useState(enemyRune);
  const [reach, setReach] = useState(enemyReach);
  const [condition, setCondition] = useState(enemyCondition);
  
  useEffect(() => {
    console.log(enemy);
  }, [enemy])

  return {
    life, setLife,
    power, setPower,
    armor, setArmor,
    rune, setRune,
    reach, setReach,
    condition, setCondition
  }
};

export default UseEnemy;
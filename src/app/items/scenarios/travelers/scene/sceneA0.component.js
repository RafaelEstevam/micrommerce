import { useState, useEffect, useCallback } from "react";
import Enemy from "../../enemy.component";
import UseEnemy from "../../enemy.hooks";

const SceneA0 = () => {

  const [side, setSide] = useState("a");

  const enemyA = UseEnemy({
    enemyLife: 3,
    enemyPower: 2,
    enemyPosition: [0,0],
    enemySide: 'a',
    enemyArmor: 0,
    enemyRune: ["F"],
    enemyReach: undefined,
    enemyCondition: undefined,

  });

  const enemyB = UseEnemy({
    enemyLife: 0,
    enemyPower: 1,
    enemyPosition: [0,0],
    enemySide: 'b',
    enemyArmor: 0,
    enemyRune: ["F"],
    enemyReach: undefined,
    enemyCondition: undefined,
  });

  const handleFlipCard = useCallback(() => {
    if(enemyA.life <= 0){
      setSide('b')
    }
  }, [enemyA])

  useEffect(() => {
    handleFlipCard()
  }, [enemyA])

  return (
    <>
      <div className="border-2 p-4 w-1/4">
        {side === "a" ? (
          <Enemy {...{ enemy: enemyA }} />
        ) : (
          <Enemy {...{ enemy: enemyB }} />
        )}
      </div>
    </>
  );
};

export default SceneA0;

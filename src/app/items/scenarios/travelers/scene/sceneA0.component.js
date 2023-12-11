import { useState, useEffect } from "react";
import Enemy from "../../enemy.component";
import UseEnemy from "../../enemy.hooks";

const SceneA0 = () => {
  const [side, setSide] = useState("a");

  const enemyA = UseEnemy({
    enemyLife: 3,
    enemyPower: 2,
    enemyPosition: "A0",
    enemyArmor: 0,
    enemyRune: ["F"],
    enemyReach: undefined,
    enemyCondition: undefined,
  });

  const enemyB = UseEnemy({
    enemyLife: 0,
    enemyPower: 1,
    enemyPosition: "A0b",
    enemyArmor: 0,
    enemyRune: ["F"],
    enemyReach: undefined,
    enemyCondition: undefined,
  });

  return (
    <>
      <div>
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

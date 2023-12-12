"use client";
import { useContext, useEffect } from "react";
import { GodOfWarContext } from "../../godOfWar/godOfWar.context";
import { mechanics } from "../mechanics/mechanics";

const Enemy = ({ enemy }) => {
  const { lastAction, setLastAction } = useContext(GodOfWarContext);

  useEffect(() => {
    if (lastAction?.target === "enemy") {
      if (
        lastAction.targetPosition[0] === enemy.enemyPosition[0] &&
        lastAction.targetPosition[1] === enemy.enemyPosition[1]
      ) {
        if (lastAction.targetSide === enemy.side) {
          mechanics[lastAction?.action](enemy, lastAction?.value);
        }
      }
    }

    setLastAction(undefined);
  }, [lastAction, enemy]);

  return (
    <div>
      <div>
        {enemy?.rune?.map((item) => (
          <p className="text-red-500" key={item}>
            {item}
          </p>
        ))}
      </div>
      <div>
        <p className="text-green-500">
          {enemy?.life <= 0 ? "death" : enemy?.life}
        </p>
        <p className="text-slate-500">{enemy?.power}</p>
      </div>
    </div>
  );
};

export default Enemy;

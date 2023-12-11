"use client";
// import { useContext, useEffect } from "react";
import { GodOfWarContext } from "./godOfWar.context";
import UseGodOfWar from "./useGodOfWar.hooks";
// import { plusLife } from "../items/mechanics/mechanics";
import Kratos from "../items/characters/kratos/kratos.component";
import Freya from "../items/characters/freya/freya.component";
import Atreus from "../items/characters/atreus/atreus.component";
import Enemy from '../items/scenarios/enemy.component'

import TravelersScenario from '../items/scenarios/travelers/travelers.component';

const GodOfWar = () => {
  const { lastAction, setLastAction } = UseGodOfWar();

  // const { characters, missionActivated, handleChooseCaracters, handleChooseScenario } =
  //   UseGodOfWar();

  // useEffect(() => {
  //   handleChooseCaracters();
  //   handleChooseScenario();
  // }, []);

  // useEffect(() => {
  //   console.log(missionActivated);
  // }, [missionActivated]);

  // console.log(characters);

  const context = {
    lastAction,
    setLastAction,
  };

  return (
    <GodOfWarContext.Provider value={context}>
      {/* <Enemy
        enemyLife={2}
        enemyPower={4}
        enemyPosition='B1'
        enemyArmor={0}
        enemyRune={['R']}
        enemyReach={[0,1,2]}
        enemyCondition={undefined}
      /> */}
      {/* <Kratos />
      <Freya />
      <Atreus /> */}
      {/* <div className="flex gap-4">
        <button
          className="bg-slate-500"
          onClick={() =>
            setLastAction({ action: "plusLife", value: 2, target: "Kratos" })
          }
        >
          Mais vida
        </button>
        <button
          className="bg-slate-500"
          onClick={() =>
            setLastAction({ action: "lessLife", value: 1, target: "Freya" })
          }
        >
          Ataque do inimigo
        </button>
        <button
          className="bg-slate-500"
          onClick={() =>
            setLastAction({ action: "plusFury", value: 1, target: "Atreus" })
          }
        >
          Mais fúria
        </button>
        <button
          className="bg-slate-500"
          onClick={() =>
            setLastAction({ action: "lessLife", value: 1, target: "B1" })
          }
        >
          Ataque Kratos
        </button>
      </div> */}
      <TravelersScenario />
    </GodOfWarContext.Provider>
  );
};

export default GodOfWar;

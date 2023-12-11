"use client";
import { useContext, useEffect } from "react";
import { GodOfWarContext } from "./godOfWar.context";
import UseGodOfWar from "./useGodOfWar.hooks";
import { plusLife } from "../items/mechanics/mechanics";
import Kratos from "../items/characters/kratos.component";

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
      <Kratos />
      <div className="flex gap-4">
        <button
          className="bg-slate-500"
          onClick={() =>
            setLastAction({ action: "plusLife", value: 2, player: "Kratos" })
          }
        >
          Mais vida
        </button>
        <button
          className="bg-slate-500"
          onClick={() =>
            setLastAction({ action: "lessLife", value: 1, player: "Kratos" })
          }
        >
          Ataque do inimigo
        </button>
        <button
          className="bg-slate-500"
          onClick={() =>
            setLastAction({ action: "plusFury", value: 1, player: "Kratos" })
          }
        >
          Mais fúria
        </button>
      </div>
    </GodOfWarContext.Provider>
  );
};

export default GodOfWar;

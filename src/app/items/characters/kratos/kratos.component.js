import { useContext, useEffect } from "react";
import { GodOfWarContext } from "../../../godOfWar/godOfWar.context";
import UseKratos from "./kratos.hooks";
import { mechanics } from "../../mechanics/mechanics";
import Character from '../character.component'

const Kratos = () => {
  const { lastAction, setLastAction } = useContext(GodOfWarContext);
  const kratos = UseKratos();

  useEffect(() => {
    if (lastAction?.target === "player") {
      if (
        lastAction.targetPosition[0] === kratos.position[0] &&
        lastAction.targetPosition[1] === kratos.position[1]
      ) {
        mechanics[lastAction?.action](kratos, lastAction?.value);
      }
    }

    setLastAction(undefined);
  }, [lastAction, kratos]);

  return (
    <Character
      character={kratos}
      name="Kratos"
    />
  );
};

export default Kratos;

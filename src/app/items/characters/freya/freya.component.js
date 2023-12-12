import { useContext, useEffect } from "react";
import { GodOfWarContext } from "../../../godOfWar/godOfWar.context";
import UseFreya from "./freya.hooks";
import Character from '../character.component'

const Freya = () => {

  const {lastAction, setLastAction} = useContext(GodOfWarContext);
  const freya = UseFreya();

  useEffect(() => {
    if (lastAction?.target === "player") {
      if (
        lastAction.targetPosition[0] === freya.position[0] &&
        lastAction.targetPosition[1] === freya.position[1]
      ) {
        mechanics[lastAction?.action](freya, lastAction?.value);
      }
    }

    setLastAction(undefined);
  }, [lastAction, freya]);

  return (
    <>
      <Character
        character={freya}
        name="Freya"
      />
    </>
  )
};

export default Freya;